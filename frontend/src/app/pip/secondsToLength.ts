import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToLength'
})
/* 
export class secondsToLength implements PipeTransform {
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
  }
}
 */ 
export class secondsToLength implements PipeTransform {
  transform(value: number): string {
    if (!value) {
      return '0 sec';
    }

    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 3600 % 60;

    let result = '';
    if (hours) {
      result += `${hours} hour`;
    }
    if (minutes) {
      result += `${minutes} min`;
    }
    if (seconds) {
      result += `${seconds} sec`;
    }

    return result.trim();
  }
}