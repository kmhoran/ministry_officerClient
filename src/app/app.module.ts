import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'angular-calendar';

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavigationComponent } from './shared/navigation.component';
import { MonthCalendarComponent } from './calendar/month-calendar.component';
import { DatePickerComponent } from './calendar/date-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavigationComponent,
    MonthCalendarComponent,
    DatePickerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CalendarModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: 'calendar', component: CalendarComponent},
      {path: '', redirectTo: 'calendar', pathMatch: 'full'},
      {path: '**', redirectTo: 'calendar', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
