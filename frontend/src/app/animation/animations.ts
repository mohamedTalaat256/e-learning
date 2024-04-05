import { trigger, transition, style,state, animate } from '@angular/animations';


export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
    ]),
    transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
    ]),
]);


export const slideInOutX = trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateX(-50%)' }), // Start position off-screen
      animate('300ms ease-in', style({ transform: 'translateX(0%)' })), // Slide in
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ transform: 'translateX(-50%)' })), // Slide out
    ]),
  
]);



export const slideInOutY = trigger('slideInOut', [
    transition(':enter', [
      style({ transform: 'translateY(-50%)' }), // Start position off-screen
      animate('300ms ease-in', style({ transform: 'translateY(0%)' })), // Slide in
    ]),
    transition(':leave', [
      animate('300ms ease-in', style({ transform: 'translateY(-50%)' })), // Slide out
    ]),
  
]);


export const expandCollapse =  trigger('expandCollapse', [
    state('open', style({ height: '*' })), // '*' represents the maximum height
    state('closed', style({ height: '60%', overflow: 'hidden' })), // Collapsed state
    transition('closed <=> open', [animate('300ms ease-in-out')]), // Transition between states
  ]);