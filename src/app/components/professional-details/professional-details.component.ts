import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zen-professional-details',
  templateUrl: './professional-details.component.html',
  styleUrls: ['./professional-details.component.scss']
})
export class ProfessionalDetailsComponent implements OnInit {

  constructor() { }

  reviewQuantity = 20;

  starQuantity(quantity: number): Array<number> {
    return new Array(quantity);
  }

  ngOnInit(): void {
  }

}
