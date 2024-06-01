import { Component, OnInit} from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    const labels = ['Label 1', 'Label 2', 'Label 3' ,'Label 3' ,'Label 3'];

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [  250, 150,  200, 225, 125], // Update the data values as needed
          backgroundColor: [
            '#FF7F5C',
          ],
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,

        }]
      },
      options: {
        plugins : {
          legend: {
            display: false, // Set to false to hide the legend and prevent the button
          },
        },
        maintainAspectRatio: false ,
        scales: {
          y: {
            beginAtZero: true,
            min: 100,
            max: 300,
            display: true,

            grid: {
              display: true, // Set to true to show grid lines
              color: '#dddddd',
            },
            border: {
              dash: [2,4],
              display: false,

            },
            ticks: {
              stepSize: 50,
            }

          },
          x:{
            display: true,
            grid: {
              display: false,
            },
            border: {
              dash: [2,4],
              color: "black",

            },


          }
        }
      }
    });
  }
}
