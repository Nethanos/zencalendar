import { Component, Input, OnInit } from '@angular/core';
import { ScheduleDate } from 'src/app/domain/ScheduleDate';

@Component({
  selector: 'zen-week-day-marker',
  templateUrl: './week-day-marker.component.html',
  styleUrls: ['./week-day-marker.component.scss']
})
export class WeekDayMarkerComponent implements OnInit {

  constructor() { }

  @Input() scheduleDate: ScheduleDate;

  ngOnInit(): void {
  }

}
