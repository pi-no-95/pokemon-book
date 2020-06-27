import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
  japanese = {
    Grass: 'くさ',
    Poison: 'どく',
    Bug: 'むし',
  }

  transform(types: string[], ...args: unknown[]): unknown {
    return types.map(type => this.japanese[type] || type);
  }

}
