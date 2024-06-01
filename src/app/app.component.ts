import { Component , ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation : ViewEncapsulation.None,

})
export class AppComponent {










  title(title: any) {
    throw new Error('Method not implemented.');
  }
  inputTexts: string[] = [
    'Initial Text 1',
    'Initial Text 2',
    'Initial Text 3',
    'Initial Text 4',
    'Initial Text 5',
    'Initial Text 6'
  ];

  items = [
    { name: 'Item 1', description: 'Details for Item 1', showDetails: false },
    { name: 'Item 2', description: 'Details for Item 2', showDetails: false },
    // Add more items as needed
  ];

  toggleDetails(item: any): void {
    item.showDetails = !item.showDetails;
    console.log(item)
  }






}
