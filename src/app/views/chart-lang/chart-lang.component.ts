import { Component, OnInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { TranslocoModule } from '@ngneat/transloco';
@Component({
  selector: 'app-chart-lang',
  templateUrl: './chart-lang.component.html',
  styleUrls: ['./chart-lang.component.css'],
  providers: [TranslocoModule]
})
export class ChartLangComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
 // mainChart

 public mainChartElements = 27;
 public mainChartData1: Array<number> = [];
 public mainChartData2: Array<number> = [];
 public mainChartData3: Array<number> = [];

 public mainChartData: Array<any> = [
   {
     data: this.mainChartData1,
     label: 'Current' 
   },
   {
     data: this.mainChartData2,
     label: 'Previous'
   },
   {
     data: this.mainChartData3,
     label: 'BEP'
   }
 ];
 /* tslint:disable:max-line-length */
 public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 /* tslint:enable:max-line-length */
 public mainChartOptions: any = {
   tooltips: {
     enabled: false,
     custom: CustomTooltips,
     intersect: true,
     mode: 'index',
     position: 'nearest',
     callbacks: {
       labelColor: function(tooltipItem, chart) {
         return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
       }
     }
   },
   responsive: true,
   maintainAspectRatio: false,
   scales: {
     xAxes: [{
       gridLines: {
         drawOnChartArea: false,
       },
       ticks: {
         callback: function(value: any) {
           return value.charAt(0);
         }
       }
     }],
     yAxes: [{
       ticks: {
         beginAtZero: true,
         maxTicksLimit: 5,
         stepSize: Math.ceil(250 / 5),
         max: 250
       }
     }]
   },
   elements: {
     line: {
       borderWidth: 2
     },
     point: {
       radius: 0,
       hitRadius: 10,
       hoverRadius: 4,
       hoverBorderWidth: 3,
     }
   },
   legend: {
     display: false
   }
 };
 public mainChartColours: Array<any> = [
   { // brandInfo
     backgroundColor: hexToRgba(getStyle('--info'), 10),
     borderColor: getStyle('--info'),
     pointHoverBackgroundColor: '#fff'
   },
   { // brandSuccess
     backgroundColor: 'transparent',
     borderColor: getStyle('--success'),
     pointHoverBackgroundColor: '#fff'
   },
   { // brandDanger
     backgroundColor: 'transparent',
     borderColor: getStyle('--danger'),
     pointHoverBackgroundColor: '#fff',
     borderWidth: 1,
     borderDash: [8, 5]
   }
 ];
 public mainChartLegend = false;
 public mainChartType = 'line';

}
