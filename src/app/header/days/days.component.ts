import { Component } from '@angular/core';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css']
})
export class DaysComponent {



  activeLink: string = '';
  constructor() {
    this.activeLink = this.links[0]; // Set the first link as active by default
  }
  links: string[] = ['TODAY', 'YESTERDAY', 'LAST WEEK']; // Add your links here

  setActiveLink(link: string): void {
    this.activeLink = link;
  }
  
}
