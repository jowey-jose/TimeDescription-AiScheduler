import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Internationalization } from '@syncfusion/ej2-base';
import { Predicate, Query, DataManager } from '@syncfusion/ej2-data';
import {
  CategoryService, DataLabelService, DateTimeService, SplineSeriesService,
  DateTimeCategoryService, LegendService
} from '@syncfusion/ej2-angular-charts';
import { addDays, getWeekFirstDate, resetTime } from '@syncfusion/ej2-angular-schedule';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [
    CategoryService, DataLabelService, SplineSeriesService,
    LegendService, DateTimeService, DateTimeCategoryService
  ],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public companyData: { [key: string]: Object }[];
  public personsData: { [key: string]: Object }[];
  public tasksData: { [key: string]: Object }[];
  public gridData: Object[] = [];
  public primaryXAxis: Object;
  public chartData: Object[] = [];
  public title: string;
  public primaryYAxis: Object;
  public marker: Object;
  public legendSettings: Object;
  public titleStyle: Object;
  public chartArea: Object;
  public chartData1: Object[] = [];
  public chartData2: Object[] = [];
  public intl: Internationalization = new Internationalization();
  public initialChartLoad = true;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.updateActiveItem('dashboard');
    this.companyData = this.dataService.getCompanyData();
    this.personsData = this.dataService.getPersonsData();
    this.tasksData = this.dataService.getTasksData();
    const startDate: Date = this.dataService.selectedDate;
    const firstDayOfWeek: Date = getWeekFirstDate(startDate, this.dataService.calendarSettings.firstDayOfWeek);
    const currentDayEvents: { [key: string]: Object }[] = this.getFilteredData(startDate,
      addDays(new Date(startDate.getTime()), 1)) as { [key: string]: Object }[];
    const currentViewEvents: Object[] = this.getFilteredData(firstDayOfWeek,
      addDays(new Date(firstDayOfWeek.getTime()), 6));
    document.querySelector('.week-event-count').textContent = currentViewEvents.length.toString();
    document.querySelector('.day-event-count').textContent = currentDayEvents.length.toString();
    // Chart Control Code
    const diabetologyData: Object[] = currentViewEvents.filter(
      (item: { [key: string]: Object }) => item.DepartmentId === 5
    );
    const orthopaedicsData: Object[] = currentViewEvents.filter(
      (item: { [key: string]: Object }) => item.DepartmentId === 4
    );
    const cardiologyData: Object[] = currentViewEvents.filter(
      (item: { [key: string]: Object }) => item.DepartmentId === 6
    );
    let date: Date = firstDayOfWeek;
    for (let i = 0; i < 7; i++) {
      this.chartData.push(this.getChartData(diabetologyData, date));
      this.chartData1.push(this.getChartData(orthopaedicsData, date));
      this.chartData2.push(this.getChartData(cardiologyData, date));
      date = addDays(new Date(date.getTime()), 1);
    }
    this.marker = { visible: true, width: 10, height: 10 };
    this.title = 'Task Distribution';
    this.chartArea = { border: { width: 0 } };
    this.titleStyle = { textAlignment: 'Near' };
    this.primaryXAxis = {
      valueType: 'DateTime',
      title: 'Date',
      interval: 1,
      intervalType: 'Days',
      labelFormat: 'MM/dd',
      minimum: firstDayOfWeek,
      maximum: new Date(addDays(new Date(firstDayOfWeek.getTime()), 6)),
      majorGridLines: { width: 0 },
      minorGridLines: { width: 0 },
      majorTickLines: { width: 0 },
      edgeLabelPlacement: 'Shift'
    };
    this.primaryYAxis = {
      title: 'Task',
      minimum: 0,
      maximum: 6,
      interval: 2
    };
    this.legendSettings = {
      visible: true,
      position: 'Top',
      padding: 20
    };
    // Grid Data Preparation
    for (let i = 0; i < currentDayEvents.length; i++) {
      const eventData: { [key: string]: Object } = currentDayEvents[i];
      if (eventData) {
        const filteredTasks: {
          [key: string]: Object;
        }[] = this.tasksData.filter(item => item.Id === eventData.TaskId);
        const filteredPersons: { [key: string]: Object }[] = this.personsData.filter(
          item => item.Id === eventData.PersonId
        );
        if (filteredTasks.length > 0 && filteredPersons.length > 0) {
          const newData: { [key: string]: Object } = {
            Time: this.getDate(<Date>eventData.StartTime),
            Name: filteredTasks[0].Name,
            PersonName: filteredPersons[0].Name,
            Description: eventData.Description,
            PersonId: filteredPersons[0].Id
          };
          this.gridData.push(newData);
        }
      }
    }
  }

  getChartData(data: Object[], startDate: Date) {
    const filteredData: any = data.filter((item: { [key: string]: Object }) => {
      return (
        resetTime(startDate).getTime() === resetTime(new Date(<Date>item.StartTime)).getTime()
      );
    });
    return { Date: startDate, EventCount: filteredData.length };
  }

  getFilteredData(startDate: Date, endDate: Date) {
    const predicate: Predicate = new Predicate('StartTime', 'greaterthanorequal', startDate)
      .and(new Predicate('EndTime', 'greaterthanorequal', startDate))
      .and(new Predicate('StartTime', 'lessthan', endDate))
      .or(new Predicate('StartTime', 'lessthanorequal', startDate)
        .and(new Predicate('EndTime', 'greaterthan', startDate)));
    const filter: Object[] = new DataManager({ json: this.companyData }).executeLocal(new Query().where(predicate));
    return filter;
  }

  getDate(value: Date): string {
    return this.intl.formatDate(value, { skeleton: 'hm', type: 'date' });
  }
}
