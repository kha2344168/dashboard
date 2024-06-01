import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BarchartComponent } from './graph-list/barchart/barchart.component';
import { ListComponent } from './graph-list/list/list.component';

const routes: Routes = [
  { path: '', component:ListComponent }, // Example route
  { path: 'bar', component:BarchartComponent  }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
