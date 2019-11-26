import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PersonsComponent } from './persons/persons.component';
import { TasksComponent } from './tasks/tasks.component';
import { PreferenceComponent } from './preference/preference.component';
import { AboutComponent } from './about/about.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'persons', component: PersonsComponent },
  { path: 'person-details/:id', component: PersonDetailsComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'preference', component: PreferenceComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
