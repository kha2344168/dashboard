import { Component } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  startDate: Date;
  endDate: Date;

  constructor() {
    this.startDate = new Date();
    this.endDate = new Date();
  }

  onDateChanged(newDate: Date) {
    this.startDate = newDate;
    this.endDate = newDate;
  }
}
