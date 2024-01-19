import { Component } from '@angular/core';
import { adminUrls } from '../../constants';


 

@Component({
  selector: 'app-my-community',
  templateUrl: './my-community.component.html',
  styleUrls: ['./my-community.component.scss']
})


export class MyCommunityComponent {
 ADD_COURSE_URL:string = adminUrls.addCourse;

  myClasses: any[] = [
    {
      title: 'First Secondary',
      students: 36,
      date: 12,
      bg: 'mat-bg-light-primary'
    },
    {
      title: 'Second Secondary',
      students: 47, 
      date: 12,
      bg: 'mat-bg-light-warn'
    },
    {
      title: 'Third Secondary Boys',
      students: 28, 
      date: 12,
      bg: 'mat-bg-light-info'
    },
    {
      title: 'Third Secondary Girls',
      students: 30, 
      date: 12,
      bg: 'mat-bg-light-danger'
    },
     
  ];


  topStudents: any=[
    {
      className: 'First Secondary',
      allStutentsCount: 120, 
      students:[
        {
          fullName: 'mohamed Talaat',
          profileImage: '/assets/images/300_24.jpg',
          rank: 92
        },
        {
          fullName: 'Ahmed Ali',
          profileImage: '/assets/images/300_23.jpg',
          rank: 88
        },
        {
          fullName: 'Ibraheim Morad',
          profileImage: '/assets/images/300_22.jpg',
          rank: 85
        },
        {
          fullName: 'mohamed Talaat',
          profileImage: '/assets/images/300_24.jpg',
          rank: 92
        },
        {
          fullName: 'Ahmed Ali',
          profileImage: '/assets/images/300_23.jpg',
          rank: 88
        },
         
      ]
    },
    {
      className: 'Second Secondary',
      allStutentsCount: 75, 
      students:[
        {
          fullName: 'mohamed Talaat',
          profileImage: '/assets/images/300_24.jpg',
          rank: 92
        },
        {
          fullName: 'Ahmed Ali',
          profileImage: '/assets/images/300_23.jpg',
          rank: 88
        },
        {
          fullName: 'Ibraheim Morad',
          profileImage: '/assets/images/300_22.jpg',
          rank: 85
        },
        {
          fullName: 'mohamed Talaat',
          profileImage: '/assets/images/300_24.jpg',
          rank: 92
        },
        {
          fullName: 'Ahmed Ali',
          profileImage: '/assets/images/300_23.jpg',
          rank: 88
        },
         
      ]
    },
    
    {
      className: 'Third Secondary',
      allStutentsCount: 85, 
      students:[
        {
          fullName: 'mohamed Talaat',
          profileImage: '/assets/images/300_24.jpg',
          rank: 92
        },
        {
          fullName: 'Ahmed Ali',
          profileImage: '/assets/images/300_23.jpg',
          rank: 88
        },
        {
          fullName: 'Ibraheim Morad',
          profileImage: '/assets/images/300_22.jpg',
          rank: 85
        },
        {
          fullName: 'mohamed Talaat',
          profileImage: '/assets/images/300_24.jpg',
          rank: 92
        },
        {
          fullName: 'Ahmed Ali',
          profileImage: '/assets/images/300_23.jpg',
          rank: 88
        },
         
      ]
    },
    
    
    
  ];

}
