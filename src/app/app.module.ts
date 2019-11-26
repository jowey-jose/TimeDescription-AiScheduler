import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule, MultiSelectModule, ComboBoxModule } from '@syncfusion/ej2-angular-dropdowns';
import { CheckBoxModule, ButtonModule, SwitchModule, RadioButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { TreeViewModule, SidebarModule } from '@syncfusion/ej2-angular-navigations';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { DatePickerModule, TimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AddEditPersonComponent } from './add-edit-person/add-edit-person.component';
import { AddEditTaskComponent } from './add-edit-task/add-edit-task.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PersonAvailabilityComponent } from './person-availability/person-availability.component';
import { PersonsComponent } from './persons/persons.component';
import { TasksComponent } from './tasks/tasks.component';
import { RecentActivityComponent } from './recent-activity/recent-activity.component';
import { PreferenceComponent } from './preference/preference.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddEditPersonComponent,
    AddEditTaskComponent,
    CalendarComponent,
    DashboardComponent,
    PersonDetailsComponent,
    PersonAvailabilityComponent,
    PersonsComponent,
    TasksComponent,
    RecentActivityComponent,
    PreferenceComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule,
    RecurrenceEditorModule,
    DropDownListModule,
    MultiSelectModule,
    ComboBoxModule,
    CheckBoxModule,
    ButtonModule,
    SwitchModule,
    SplitButtonModule,
    RadioButtonModule,
    TreeViewModule,
    DatePickerModule,
    TimePickerModule,
    TextBoxModule,
    ListViewModule,
    SidebarModule,
    ChartModule,
    GridModule,
    DialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }, Location, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
