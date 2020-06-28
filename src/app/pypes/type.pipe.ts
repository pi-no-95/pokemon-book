import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {
  japanese = {
    Normal: 'ノーマル',
    Fire: 'ほのお',
    Water: 'みず',
    Grass: 'くさ',
    Electric: 'でんき',
    Ice: 'こおり',
    Fighting: 'かくとう',
    Poison: 'どく',
    Ground: 'じめん',
    Psychic: 'エスパー',
    Flying: 'ひこう',
    Bug: 'むし',
    Rock: 'いわ',
    Ghost: 'ゴースト',
    Dragon: 'ドラゴン',
    Steel: 'はがね',
    Fairy: 'フェアリー',
  }

  transform(types: string[], ...args: unknown[]): unknown {
    return types.map(type => this.japanese[type] || type);
  }

}
