import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ProfessionalDetailsComponent } from './components/professional-details/professional-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ProfessionalDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
