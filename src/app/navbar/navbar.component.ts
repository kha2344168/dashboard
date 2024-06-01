import { Component , ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation : ViewEncapsulation.ShadowDom,

})
export class NavbarComponent {
  imgItems = [
    { imageUrl: 'assets/images/navbar-icon/control-room.png', name: 'control-room' },
    { imageUrl: 'assets/images/navbar-icon/dashboard.png', name: 'component' },
    { imageUrl: 'assets/images/navbar-icon/elements.png', name: 'elements' },
    { imageUrl: 'assets/images/navbar-icon/settings.png', name: 'settings' },
    { imageUrl: 'assets/images/navbar-icon/notifications.png', name: 'notifications' },
  ];


  constructor(){

  }
}
