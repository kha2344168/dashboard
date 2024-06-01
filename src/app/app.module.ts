import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { HeaderStartComponent } from './header/header-start/header-start.component';
import { DaysComponent } from './header/days/days.component';
import { DateComponent } from './header/date/date.component';
import { StatusBoxComponent } from './status-box/status-box.component';

import { MyChartComponent } from './my-chart/my-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { GraphListComponent } from './graph-list/graph-list.component';
import { ListComponent } from './graph-list/list/list.component';
import { BarchartComponent } from './graph-list/barchart/barchart.component';
import { AppRoutingModule } from './app-routing.module';
import { CountUpModule } from 'ngx-countup';







@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderStartComponent,
    DaysComponent,
    DateComponent,
    StatusBoxComponent,
    MyChartComponent,
    GraphListComponent,
    ListComponent,
    BarchartComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    NgIf,
    JsonPipe,
    MatNativeDateModule,
    NgChartsModule,
    AppRoutingModule,
    CountUpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
