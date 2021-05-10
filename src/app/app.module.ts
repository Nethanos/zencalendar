import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
