import { Component, ViewChild, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { isNullOrUndefined } from '@syncfusion/ej2-base';
import { DialogComponent, BeforeOpenEventArgs } from '@syncfusion/ej2-angular-popups';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { EJ2Instance } from '@syncfusion/ej2-angular-schedule';
import { DatePicker } from '@syncfusion/ej2-angular-calendars';
import { FormValidator } from '@syncfusion/ej2-angular-inputs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddEditTaskComponent {
  @Output() refreshEvent = new EventEmitter<string>();
  @ViewChild('newTaskObj',  {static: false})
  public newTaskObj: DialogComponent;
  public animationSettings: Object = { effect: 'None' };
  public title = 'New Task';
  public selectedAllocation = 'Individual';
  public dobValue: Date = new Date();
  public dialogState: string;
  public bloodGroupData: Object[];
  public fields: Object = { text: 'Text', value: 'Value' };
  public tasksData: { [key: string]: Object }[];
  public activeTaskData: { [key: string]: Object; };
  public companyData: { [key: string]: Object }[];
  public personsData: { [key: string]: Object }[];

  constructor(private dataService: DataService) {
    this.bloodGroupData = this.dataService.bloodGroupData;
    this.tasksData = this.dataService.getTasksData();
    this.companyData = this.dataService.getCompanyData();
    this.personsData = this.dataService.getPersonsData();
    this.activeTaskData = this.dataService.getActiveTaskData();
  }

  onAddTask() {
    this.dialogState = 'new';
    this.title = 'New Task';
    this.newTaskObj.show();
  }

  onCancelClick() {
    this.resetFormFields();
    this.newTaskObj.hide();
  }

  onSaveClick() {
    const formElementContainer: HTMLElement = document.querySelector('.new-task-dialog #new-task-form');
    if (formElementContainer && formElementContainer.classList.contains('e-formvalidator') &&
      !((formElementContainer as EJ2Instance).ej2_instances[0] as FormValidator).validate()) {
      return;
    }
    const obj: { [key: string]: Object; } = this.dialogState === 'new' ? {} : this.activeTaskData;
    const formelement: HTMLInputElement[] = [].slice.call(document.querySelectorAll('.new-task-dialog .e-field'));
    for (const curElement of formelement) {
      let columnName: string = curElement.querySelector('input').name;
      const isDropElement: boolean = curElement.classList.contains('e-ddl');
      const isDatePickElement: boolean = curElement.classList.contains('e-date-wrapper');
      if (!isNullOrUndefined(columnName) || isDropElement || isDatePickElement) {
        if (columnName === '' && isDropElement) {
          columnName = curElement.querySelector('select').name;
          const instance: DropDownList = (curElement.parentElement as EJ2Instance).ej2_instances[0] as DropDownList;
          obj[columnName] = instance.value;
        } else if (columnName === 'DOB' && isDatePickElement) {
          const instance: DatePicker = (curElement.parentElement as EJ2Instance).ej2_instances[0] as DatePicker;
          obj[columnName] = instance.value;
        } else if (columnName === 'Allocation') {
          obj[columnName] = this.selectedAllocation;
        } else {
          obj[columnName] = curElement.querySelector('input').value;
        }
      }
    }
    this.tasksData = this.dataService.getTasksData();
    if (this.dialogState === 'new') {
      obj['Id'] = Math.max.apply(Math, this.tasksData.map((data: { [key: string]: Object }) => data.Id)) + 1;
      obj['NewTaskClass'] = 'new-task';
      this.tasksData.push(obj);
    } else {
      this.activeTaskData = obj;
      this.dataService.setActiveTaskData(this.activeTaskData);
    }
    const activityObj: { [key: string]: Object } = {
      Name: this.dialogState === 'new' ? 'Added New Task' : 'Updated Task',
      Message: `${obj['Name']} for ${obj['Description']}`,
      Time: '10 mins ago',
      Type: 'task',
      ActivityTime: new Date()
    };
    this.dataService.addActivityData(activityObj);
    this.dataService.setTasksData(this.tasksData);
    this.refreshEvent.emit();
    this.resetFormFields();
    this.newTaskObj.hide();
  }

  resetFormFields(): void {
    const formelement: HTMLInputElement[] = [].slice.call(document.querySelectorAll('.new-task-dialog .e-field'));
    this.dataService.destroyErrorElement(document.querySelector('#new-task-form'), formelement);
    for (const curElement of formelement) {
      let columnName: string = curElement.querySelector('input').name;
      const isDropElement: boolean = curElement.classList.contains('e-ddl');
      const isDatePickElement: boolean = curElement.classList.contains('e-date-wrapper');
      if (!isNullOrUndefined(columnName) || isDropElement || isDatePickElement) {
        if (columnName === '' && isDropElement) {
          columnName = curElement.querySelector('select').name;
          const instance: DropDownList = (curElement.parentElement as EJ2Instance).ej2_instances[0] as DropDownList;
          instance.value = instance.dataSource[0];
        } else if (columnName === 'DOB' && isDatePickElement) {
          const instance: DatePicker = (curElement.parentElement as EJ2Instance).ej2_instances[0] as DatePicker;
          instance.value = new Date();
        } else if (columnName === 'Allocation') {
          curElement.querySelectorAll('input')[0].checked = true;
        } else {
          curElement.querySelector('input').value = '';
        }
      }
    }
  }

  onAllocationChange(args: any) {
    this.selectedAllocation = args.target.value;
  }

  showDetails() {
    this.dialogState = 'edit';
    this.title = 'Edit Task';
    this.newTaskObj.show();
    this.activeTaskData = this.dataService.getActiveTaskData();
    const obj: { [key: string]: Object; } = this.activeTaskData;
    const formelement: HTMLInputElement[] = [].slice.call(document.querySelectorAll('.new-task-dialog .e-field'));
    for (const curElement of formelement) {
      let columnName: string = curElement.querySelector('input').name;
      const isCustomElement: boolean = curElement.classList.contains('e-ddl');
      const isDatePickElement: boolean = curElement.classList.contains('e-date-wrapper');
      if (!isNullOrUndefined(columnName) || isCustomElement || isDatePickElement) {
        if (columnName === '' && isCustomElement) {
          columnName = curElement.querySelector('select').name;
          const instance: DropDownList = (curElement.parentElement as EJ2Instance).ej2_instances[0] as DropDownList;
          instance.value = <string>obj[columnName];
          instance.dataBind();
        } else if (columnName === 'DOB' && isDatePickElement) {
          const instance: DatePicker = (curElement.parentElement as EJ2Instance).ej2_instances[0] as DatePicker;
          instance.value = <Date>obj[columnName] || null;
        } else if (columnName === 'Allocation') {
          if (obj[columnName] === 'Individual') {
            curElement.querySelectorAll('input')[0].checked = true;
          } else {
            curElement.querySelectorAll('input')[1].checked = true;
          }
        } else {
          curElement.querySelector('input').value = <string>obj[columnName];
        }
      }
    }
  }

  onBeforeOpen(args: BeforeOpenEventArgs) {
    const formElement: HTMLFormElement = args.element.querySelector('#new-task-form');
    if (formElement && formElement.ej2_instances) {
      return;
    }
    const rules: { [key: string]: Object } = {};
    rules['Name'] = { required: [true, 'Enter valid Name'] };
    rules['DOB'] = { required: true, date: [true, 'Select valid DOB'] };
    rules['Mobile'] = { required: [true, 'Enter valid Mobile No'] };
    rules['Email'] = { required: [true, 'Enter valid Email'], email: [true, 'Enter valid Email'] };
    this.dataService.renderFormValidator(formElement, rules, this.newTaskObj.element);
  }
}
