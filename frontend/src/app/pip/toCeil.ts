import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'toCeil'})
export class toCeil implements PipeTransform {
  transform(value: number): number {
    return Math.ceil(value)
  }
}