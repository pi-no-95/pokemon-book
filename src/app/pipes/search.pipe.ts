import { Pipe, PipeTransform } from '@angular/core';

import { REFINEMENTTYPE } from '../../models/refinement-type';
import { POKEMONS } from '../../models/pokemons';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  refinementType = REFINEMENTTYPE;
  displayPokemons: [];

  transform(pokemons: []): [] {
    for (let pokemon of pokemons) {
      for (let [type, i] of this.refinementType.entries()) {
        console.log(pokemon['type'][0]);
        console.log(type['name']);
        if (pokemon['type'][0] === type['name']) {
          this.displayPokemons.push(pokemons[i]);
        }
      }
    }
    return pokemons;
  }
}
