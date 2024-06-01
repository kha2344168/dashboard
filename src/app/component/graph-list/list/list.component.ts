import { Component, OnInit ,HostListener ,ViewChild  , ElementRef , ViewChildren , QueryList} from '@angular/core';
import {MyDataObject} from "./list.model"
import {ChecklistItem} from "./checked.model"
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  myObjects: MyDataObject[] = [
    new MyDataObject(
      '1',
      'assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
      false
    ),
    new MyDataObject(
      '2',
      'assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
      false
    ),
    new MyDataObject(
      '3',
      'assets/images/gas-station-svgrepo-com.png',
      'STATION NAME DUMMY',
      ['Total Sales','62,721 m','Compression State','Compression ','Max Transaction / hour','20',],
      ['Total Value','550 EGP','Total Transaction Count','5161 ','Max Transaction Date-Time','8-1-2021 | 10:16 PM',],
      false
    ),
  ];





  @ViewChild('txt') txt!: ElementRef;
  @ViewChildren('btn') btns!: QueryList<ElementRef>;

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (this.txt && this.txt.nativeElement.contains(event.target)) {
    } else if (this.btns.some(btn => btn.nativeElement.contains(event.target))) {
    } else {
      this.myObjects.forEach(item => {
        item.show = false;
      });
    }
  }
  toggleDetails(item: MyDataObject): void {
    this.myObjects.forEach(item => {
      item.show = false;
    });
    item.show = !item.show;
  }

  checklistItems: ChecklistItem[] = [
    { name: 'Total sales', checked: true },
    { name: 'Max transaction count per hour', checked: false },
    { name: 'Total transaction', checked: true },
    { name: 'Max transaction count date-time', checked: false },
    { name: 'Total value', checked: true },
    { name: 'Compressor status', checked: false },
  ];




}







  // { name: 'Total sales', checked: true },
  // { name: 'Max transaction count per hour', checked: false },
  // { name: 'Total transaction', checked: true },
  // { name: 'Max transaction count date-time', checked: false },
  // { name: 'Total value', checked: true },
  // { name: 'Compressor status', checked: false },
