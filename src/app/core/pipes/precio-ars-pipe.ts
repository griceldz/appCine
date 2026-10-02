import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precioArs',
})
export class PrecioArsPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
