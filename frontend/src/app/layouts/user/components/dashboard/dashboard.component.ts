import { Component,ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts"; 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' }
];

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'admin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Inflation",
          data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        position: "top",
        labels: {
          offsetY: -18
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
        tooltip: {
          enabled: true,
          offsetY: -35
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.25,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [50, 0, 100, 100]
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }
      },
      title: {
        text: "Monthly Inflation in Argentina, 2002",
        floating: false,
        offsetY: 320,
        align: "center",
        style: {
          color: "#444"
        }
      }
    };
  }


  courses: any[] = [
    {
      title: 'Fundamental Of UX design and research',
      students: 200,
      lectures: 28,
      date: 12,
      bg: 'mat-bg-light-primary'
    },
    {
      title: 'JAVA Fundamental For Beginneres',
      students: 200,
      lectures: 28,
      date: 12,
      bg: 'mat-bg-light-warn'
    },
    {
      title: 'C++ Crash Course For Beginneres',
      students: 200,
      lectures: 28,
      date: 12,
      bg: 'mat-bg-light-danger'
    }
  ];


  myComunityList: any = [
    {
      title: 'UI/UX Designers Club',
      membersNumber: 250
    },
    {
      title: 'C++ For Beginners',
      membersNumber: 130
    }
  ];


  profileActivityCount: any = [
    {
      activityName: 'Rank',
      count: 7
    },
    {
      activityName: 'Course',
      count: 9
    },
    {
      activityName: 'Point',
      count: 136
    }
  ];


  lastToDoList: any = [
    {
      id: 1,
      title: 'Research Paper',
      date: '04:00 PM',
      status: 0,
    },
    {
      id: 2,
      title: 'Data Structure Lecture',
      date: '12:00 PM',
      status: 1,
    },
    {
      id: 3,
      title: 'Add month Copun',
      date: '07:00 PM',
      status: 0,
    },
  ];




  lessDisplayedColumns: string[] = ['position', 'name'];


  moreDisplayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  columnToDispaly: string[] = this.lessDisplayedColumns;




  showMoreColumnDisplayed: boolean = false;

  toggleShowMoreCols(): void {
    this.showMoreColumnDisplayed = !this.showMoreColumnDisplayed;
    if (this.showMoreColumnDisplayed) {
      this.columnToDispaly = this.moreDisplayedColumns;
    } else {
      this.columnToDispaly = this.lessDisplayedColumns;
    }
    console.log(this.columnToDispaly);
  }
}
