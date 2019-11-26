import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { createElement, Internationalization, isNullOrUndefined, closest } from '@syncfusion/ej2-base';
import { DataManager, Query, ReturnOption } from '@syncfusion/ej2-data';
import { Dialog } from '@syncfusion/ej2-angular-popups';
import { Button } from '@syncfusion/ej2-angular-buttons';
import {
  EditService, PageService, EditSettingsModel,
  GridComponent, DialogEditEventArgs
} from '@syncfusion/ej2-angular-grids';
import { AddEditTaskComponent } from '../add-edit-task/add-edit-task.component';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  providers: [EditService, PageService],
  encapsulation: ViewEncapsulation.None
})
export class TasksComponent implements OnInit {
  @ViewChild('gridObj',  {static: false}) gridObj: GridComponent;
  @ViewChild('addEditTaskObj',  {static: false}) addEditTaskObj: AddEditTaskComponent;
  public tasksData: { [key: string]: Object }[];
  public filteredTasks: { [key: string]: Object }[];
  public activeTaskData: { [key: string]: Object; };
  public companyData: { [key: string]: Object }[];
  public personsData: { [key: string]: Object }[];
  public intl: Internationalization = new Internationalization();
  public editSettings: EditSettingsModel;
  public gridDialog: Dialog;

  constructor(public dataService: DataService) {
    this.tasksData = this.filteredTasks = this.dataService.getTasksData();
    this.companyData = this.dataService.getCompanyData();
    this.personsData = this.dataService.getPersonsData();
    this.activeTaskData = this.filteredTasks[0];
    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog'
    };
  }

  ngOnInit() {
    this.dataService.updateActiveItem('tasks');
  }

  onTaskClick(args: MouseEvent) {
    const rowIndex: string = (args.currentTarget as HTMLElement).parentElement.getAttribute('index');
    setTimeout(() => {
      this.gridObj.selectRow(parseInt(rowIndex, 10));
      this.gridObj.startEdit();
    });
  }

  onDataEdit(args: DialogEditEventArgs) {
    if (args.requestType === 'beginEdit') {
      this.activeTaskData = args.rowData as { [key: string]: Object; };
      this.dataService.setActiveTaskData(this.activeTaskData);
      this.gridDialog = <Dialog>args.dialog;
      this.gridDialog.header = 'Task Details';
      // const fields: Array<string> = ['Id', 'Name', 'Allocation', 'DOB', 'BloodGroup', 'Mobile', 'Email', 'Description'];
      const fields: Array<string> = ['Id', 'Name', 'Allocation', 'Description'];
      fields.forEach(field => {
        let value: string;
        if (field === 'DOB' && !isNullOrUndefined(this.activeTaskData[field])) {
          value = this.intl.formatDate(<Date>this.activeTaskData[field], { skeleton: 'yMd' }).toString();
        } else {
          value = isNullOrUndefined(this.activeTaskData[field]) ? '' : this.activeTaskData[field].toString();
        }
        (<Dialog>args.dialog).element.querySelector('#' + field).innerHTML = value;
      });
      this.gridDialog.element.querySelector('.history-row').appendChild(this.getHistoryDetails());
      const editButtonElement: HTMLElement = createElement('button', {
        className: 'edit-task',
        id: 'edit',
        innerHTML: 'Edit',
        attrs: { type: 'button', title: 'Edit' }
      });
      editButtonElement.onclick = this.onEditTask.bind(this);
      const deleteButtonElement: HTMLElement = createElement('button', {
        className: 'delete-task',
        id: 'delete',
        innerHTML: 'Delete',
        attrs: { type: 'button', title: 'Delete', content: 'DELETE' }
      });
      deleteButtonElement.onclick = this.onDeleteTask.bind(this);
      this.gridDialog.element.querySelector('.e-footer-content').appendChild(deleteButtonElement);
      this.gridDialog.element.querySelector('.e-footer-content').appendChild(editButtonElement);
      const editButton: Button = new Button({ isPrimary: true });
      editButton.appendTo('#edit');
      const deleteButton: Button = new Button();
      deleteButton.appendTo('#delete');
    }
  }

  onDeleteTask() {
    this.tasksData = this.tasksData.filter((item: { [key: string]: Object; }) => item.Id !== this.activeTaskData.Id);
    this.filteredTasks = this.tasksData;
    this.dataService.setTasksData(this.tasksData);
    this.gridObj.closeEdit();
  }

  onAddTask() {
    this.addEditTaskObj.onAddTask();
  }

  onEditTask() {
    this.gridObj.closeEdit();
    this.addEditTaskObj.showDetails();
  }

  getHistoryDetails() {
    const filteredData: Object[] = this.companyData.filter((item: { [key: string]: Object; }) =>
      item.TaskId === this.activeTaskData.Id);
    const historyElement: HTMLElement = createElement('div', { id: 'history-wrapper' });
    if (filteredData.length > 0) {
      filteredData.map((item: { [key: string]: Object; }) => {
        const element: Element = createElement('div', { className: 'history-content' });
        // tslint:disable-next-line:max-line-length
        element.textContent = `${this.intl.formatDate(<Date>item.StartTime, { skeleton: 'MMMd' })} - ${this.intl.formatDate(<Date>item.StartTime, { skeleton: 'hm' })} - ${this.intl.formatDate(<Date>item.EndTime, { skeleton: 'hm' })} Appointment with Dr.${this.getPersonName(<number>item.PersonId)}`;
        historyElement.appendChild(element);
      });
    } else {
      const element: Element = createElement('div', { className: 'empty-container' });
      element.textContent = 'No Events!';
      historyElement.appendChild(element);
    }
    return historyElement;
  }

  getPersonName(id: number) {
    const activePerson: Object[] = this.personsData.filter((item: { [key: string]: Object; }) => item.Id === id);
    return activePerson[0]['Name'];
  }

  taskSearch(args: MouseEvent) {
    const searchString: string = (args.target as HTMLInputElement).value;
    if (searchString !== '') {
      new DataManager(this.tasksData).executeQuery(new Query().
        search(searchString, ['Id', 'Name', 'Allocation', 'BloodGroup', 'Mobile'], null, true, true)).then((e: ReturnOption) => {
          if ((e.result as any).length > 0) {
            this.filteredTasks = e.result as { [key: string]: Object; }[];
          } else {
            this.filteredTasks = [];
          }
        });
    } else {
      this.filteredTasks = this.tasksData;
    }
  }

  gridRefresh() {
    this.tasksData = this.dataService.getTasksData();
    this.filteredTasks = this.tasksData;
    this.gridObj.refresh();
  }
}
