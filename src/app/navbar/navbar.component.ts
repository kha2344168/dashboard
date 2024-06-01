import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom,

})
export class NavbarComponent {
  imgItems = [
    { imageUrl: 'assets/images/navbar-icon/control-room.png' ,   name: 'Item 1' },
    { imageUrl: 'assets/images/navbar-icon/dashboard.png',       name: 'Item 2' },
    { imageUrl: 'assets/images/navbar-icon/elements.png',        name: 'Item 3' },
    { imageUrl: 'assets/images/navbar-icon/control-room.png' ,   name: 'Item 4' },
    { imageUrl: 'assets/images/navbar-icon/notifications.png' ,  name: 'Item 4' },
  ];


  constructor(){

  }
}
