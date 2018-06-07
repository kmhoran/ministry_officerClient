import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'angular-calendar';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavigationComponent } from './shared/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    CalendarModule.forRoot(),
    CollapseModule.forRoot(),
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
