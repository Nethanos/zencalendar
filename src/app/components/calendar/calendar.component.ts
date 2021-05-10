import { Component, OnInit } from '@angular/core';
import { ScheduleDate } from 'src/app/domain/ScheduleDate';
import { ScheduleHour } from 'src/app/domain/ScheduleHour';
import { ScheduleDateService } from '../services/schedule-date.service';

@Component({
  selector: 'zen-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private schedulerService: ScheduleDateService) { }

  avaliableDates: Array<ScheduleDate>;

  avaliableHours: Array<ScheduleHour> = [];

   ngOnInit(): void {
     this.schedulerService.getAvaliableDates().subscribe(scheduleDateArray => {
       this.mapSchedulerDatesAndHours(scheduleDateArray);
      })
     
  }


  markSchedule(hour: ScheduleHour): void {
    this.schedulerService.markSchedule(hour).subscribe(response => 
      this.mapSchedulerDatesAndHours(response)
      );
  }

  mapSchedulerDatesAndHours(avaliableDates: Array<ScheduleDate>): void{
    this.avaliableDates = avaliableDates;
    this.avaliableHours = this.avaliableDates
    .flatMap((scheduleDate) => scheduleDate.hours)
  }

}
