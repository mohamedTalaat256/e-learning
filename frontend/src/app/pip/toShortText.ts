import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toShortText'
})
export class toShortText implements PipeTransform {
  transform(text: string): string {
     
    if(text.length >27){
      return text.substring(0,25)+ '...';
    }else{
      return text;
    } 
  }
}