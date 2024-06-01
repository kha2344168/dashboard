import { Component } from '@angular/core';
import { MyDataObject } from './status.model';
@Component({
  selector: 'app-status-box',
  templateUrl: './status-box.component.html',
  styleUrls: ['./status-box.component.css']
})
export class StatusBoxComponent {

  // const myObject = new MyDataObject(71028, 2, 'EGP');

  myObjects : MyDataObject[] = [
    new MyDataObject( 71028  , 'EGP' , 'Total Value' , '2%' , 'rete-down', ''),
    new MyDataObject( 20000 , 'm' , 'Total Sales' , '50 m' , 'rete-up', '3'),
    new MyDataObject( 20000 , 'm' , 'Avg Sales' , '50 m' , 'rete-down', '3'),
    new MyDataObject( 1567 , '' , 'Total Transaction Count' , '20' , 'rete-up',''),
  ]

  // 71,028 ,EGP , Total Value , 2%


}
