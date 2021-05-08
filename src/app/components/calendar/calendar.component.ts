import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zen-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  reviewQuantity = 20;

  starQuantity(quantity: number): Array<number> {
    return new Array(quantity);
  }

  ngOnInit(): void {
  }

}
