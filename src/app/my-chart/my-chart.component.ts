import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-my-chart',
  templateUrl: './my-chart.component.html',
  styleUrls: ['./my-chart.component.css']
})
export class MyChartComponent implements  OnInit {
  timeArray: string[] = ['24:00'];

  constructor() {
    for (let hour = 2; hour <= 22; hour += 2) {
      const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
      this.timeArray.push(`${formattedHour}:00`);
    }
  }
  
      chart: any;

      ngOnInit(): void {
        this.createChart();
      }
      
      createChart(): void {
        const ctx = document.getElementById('radarChart');
    
        this.chart = new Chart("radarChart", {
          type: 'radar',
          data: {
            labels: this.timeArray,
            datasets: [{
              label: 'My First Dataset',
              data: [90, 59, 90, 81, 56, 90, 40 , 50 , 60 , 70 , 80 , 70  ],
              fill: true,
              backgroundColor: '#00cbc15e',
              borderColor: '#00CBC0',
              pointBackgroundColor: 'rgb(255, 99, 132)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 1,


            }, {
              label: 'My Second Dataset',
              data: [65, 59, 90, 81, 56, 55, 40, 90 , 40, 50, 96, 90],
              fill: true,
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              pointBackgroundColor: 'rgb(54, 162, 235)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(54, 162, 235)',
              tension: 0.4,
              pointRadius: 0,
              borderWidth: 1,

            }]
          },
          options: {
            scales: {
              r: {
                display: true,
                beginAtZero: true,
                ticks:{
                  display: false,
                  stepSize : 0,
                }
              }
            },
            plugins : {
              legend: {
                display: false, 
                labels: {
                  font: {
                      size: 50
                  }
              }
              },
            },
            elements: {
              line: {
                borderWidth: 3
              }
            }
          },
        });
      }
  }
  

