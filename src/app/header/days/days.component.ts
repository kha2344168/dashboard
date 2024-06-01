import { Component, EventEmitter, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {
  @Output() dateChanged = new EventEmitter<Date>();

  activeLink: string = '';
  links: string[] = ['TODAY', 'YESTERDAY', 'LAST WEEK'];

  constructor() {
    this.activeLink = this.links[0]; // Set the first link as active by default
  }

  setActiveLink(link: string): void {
    this.activeLink = link;
    let selectedDate: Date;

    switch (link) {
      case 'TODAY':
        selectedDate = new Date();
        break;
      case 'YESTERDAY':
        selectedDate = moment().subtract(1, 'days').toDate();
        break;
      case 'LAST WEEK':
        selectedDate = moment().subtract(7, 'days').toDate();
        break;
      default:
        selectedDate = new Date();
    }

    this.dateChanged.emit(selectedDate);
  }
}
