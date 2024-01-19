import { Component } from '@angular/core';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent {


  lectures:any[]=[
    {
      id:1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 80,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id:1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 80,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id:1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 80,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id:1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 80,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id:1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 80,
      image: 'assets/images/uiux.jpeg'
    },
  ];
}
