import { Component } from '@angular/core';

@Component({
  selector: 'app-course-overview',
  templateUrl: './course-overview.component.html',
  styleUrls: ['./course-overview.component.scss']
})
export class CourseOverviewComponent {

  course: any = {
    title: 'JAVA for beginners',
    describtion: 'Hydrogen',
    price: 199.9,
    isFree: 0,
    rating: 4,
    enrolledStudents: 127,
    image: 'assets/images/uiux.jpeg'
  };

  currentLecture: any = {
    id: 1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      rating: 3,
      length: 80,
      image: 'assets/images/uiux.jpeg',
      describtion: 'Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.'
  };

  lectures: any[] = [
    {
      id: 1,
      title: 'lecture 1 -introduction to the Course',
      likes: 2600,
      length: 60,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id: 1,
      title: 'lecture 2 -setup the envirenment',
      likes: 2600,
      length: 90,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id: 1,
      title: 'lecture 3 -Create first Program in JAVA',
      likes: 2600,
      length: 45,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id: 1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 13,
      image: 'assets/images/uiux.jpeg'
    },
    {
      id: 1,
      title: 'lecture 1 - introduction to programming',
      likes: 2600,
      length: 80,
      image: 'assets/images/uiux.jpeg'
    },
  ];
}
