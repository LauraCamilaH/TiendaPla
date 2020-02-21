import { Pipe, PipeTransform } from '@angular/core';
// es otro tipo de decorador
@Pipe({
  name: 'exponencial'
})
export class ExponencialPipe implements PipeTransform {

  transform(value: number): any {
    return Math.pow(value, 2);
     // comrntario de prueba
  }
}
