import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToLength'
})
export class MinToLength implements PipeTransform {
  transform(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const seconds = remainingMinutes * 60;


    var str= '';
    if(remainingMinutes ===0 ){
      return `${hours} h`;
    }else if(hours == 0){
      return ` ${remainingMinutes} min `;
    }else{
      return `${hours} h ${remainingMinutes} min `;
    }
    
   /*  else if(seconds !== 0 && remainingMinutes ===0 ){
      return `${hours} h ${seconds} sec `;
    } */

 


    
  }
}