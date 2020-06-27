import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
  japanese = {
    Grass: '草',
    Poison: '毒',
    Bug: '虫',
  }

  transform(types: string[], ...args: unknown[]): unknown {
    return types.map(type => this.japanese[type] || type);
  }

}
