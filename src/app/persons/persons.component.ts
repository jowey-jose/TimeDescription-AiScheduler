import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
import { AddEditPersonComponent } from '../add-edit-person/add-edit-person.component';
import { DataService } from '../data.service';
import { Tooltip, TooltipEventArgs } from '@syncfusion/ej2-angular-popups';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PersonsComponent implements OnInit {
  @ViewChild('addEditPersonObj',  {static: false})
  public addEditPersonObj: AddEditPersonComponent;
  @ViewChild('specializationObj',  {static: false})
  public specializationObj: DropDownListComponent;
  @ViewChild('specialistItemObj',  {static: false})
  public specialistItemObj: any;
  public personsData: { [key: string]: Object }[];
  public activePersonData: { [key: string]: Object };
  public filteredPersons: { [key: string]: Object }[];
  public specializationData: Object[];
  public fields: Object = { text: 'Text', value: 'Id' };
  public selectedDepartmentId: string;
  public tooltipObj: Tooltip;

  constructor(public dataService: DataService, private router: Router) {
    this.personsData = this.filteredPersons = this.dataService.getPersonsData();
    this.activePersonData = this.personsData[0];
    this.specializationData = this.dataService.specialistData;
  }

  ngOnInit() {
    this.dataService.updateActiveItem('persons');
    this.tooltipObj = new Tooltip({
      height: '30px',
      width: '76px',
      position: 'RightTop',
      offsetX: -10,
      showTipPointer: false,
      target: '.availability',
      beforeOpen: (args: TooltipEventArgs) => {
        args.element.querySelector('.e-tip-content').textContent =
          args.target.classList[1].charAt(0).toUpperCase() + args.target.classList[1].slice(1);
      }
    });
    this.tooltipObj.appendTo(this.specialistItemObj.nativeElement);
  }

  onSpecializationChange(args?: any) {
    let filteredData: { [key: string]: Object }[];
    if (args && args.value) {
      this.selectedDepartmentId = args ? args.itemData.DepartmentId : this.selectedDepartmentId;
      filteredData = this.personsData.filter(
        (item: any) => item.DepartmentId === this.selectedDepartmentId);
    } else {
      this.selectedDepartmentId = null;
      filteredData = this.personsData;
    }
    this.filteredPersons = filteredData;
  }

  onSpecialistClick(args: any) {
    this.tooltipObj.close();
    const specialistId: string = args.currentTarget.querySelector('.specialist-item')['id'].split('_')[1];
    const filteredData: Object[] = this.personsData.filter(
      (item: any) => item.Id === parseInt(specialistId as string, 10));
    this.dataService.setActivePersonData(<{ [key: string]: Object }>filteredData[0]);
    this.router.navigateByUrl('/person-details/' + specialistId);
  }

  onAddPerson() {
    this.addEditPersonObj.onAddPerson();
  }

  updatePersons() {
    this.personsData = this.dataService.getPersonsData();
    if (this.selectedDepartmentId) {
      this.filteredPersons = this.personsData.filter(
        (item: any) => item.DepartmentId === this.selectedDepartmentId);
    }
  }

  getEducation(text: Object) {
    return (<string>text).toUpperCase();
  }
}
