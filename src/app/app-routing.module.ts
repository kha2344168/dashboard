import { NgModule, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './component/graph-list/barchart/barchart.component';
import { ListComponent } from './component/graph-list/list/list.component';
import { ComponentComponent } from './component/component.component';
import { ControlRoomComponent } from './control-room/control-room.component';
import { ElementsComponent } from './elements/elements.component';
import { SettingsComponent } from './settings/settings.component';
import { NotificationsComponent } from './notifications/notifications.component';
const routes: Routes = [
  { path: '', redirectTo: 'component', pathMatch: 'full' },
  { path: 'control-room', component:ControlRoomComponent  },
  { path: 'elements', component: ElementsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'notifications', component: NotificationsComponent },

  {
    path: 'component', component: ComponentComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component:ListComponent },
      { path: 'bar', component:BarchartComponent  },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
