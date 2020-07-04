import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { POKEMONS } from './../../models/pokemons';
import { REFINEMENTTYPE } from './../../models/refinement-type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonFullLists = POKEMONS;
  refinementType = REFINEMENTTYPE;
  pokemons: {}[] = this.pokemonFullLists;
  typeStrings: {}[] = [
    {name: "Normal"},
    {name: "Fire"},
    {name: "Water"},
    {name: "Grass"},
    {name: "Electric"},
    {name: "Ice"},
    {name: "Fighting"},
    {name: "Poison"},
    {name: "Ground"},
    {name: "Flying"},
    {name: "Psychic"},
    {name: "Bug"},
    {name: "Rock"},
    {name: "Ghost"},
    {name: "Dragon"},
    {name: "Dark"},
    {name: "Steel"},
    {name: "Fairy"},
  ];
  checkedTypes: string[] = [];
  allUnChecked: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public filterList(event): void {
    this.checkedTypes = [];
    this.allUnChecked = true;
    for (const checkedType of this.refinementType) {

      if (checkedType['checked']) {
        this.pokemons = [];
        this.allUnChecked = false;
        this.checkedTypes.push(checkedType['name']);

        for (const type of this.checkedTypes) {
          // console.log(`今のtypeはこれです: ${type}`);
          for (const [i, typeString] of this.typeStrings.entries()) {
            this.filter(type, typeString['name']);
          }
        }
      }
    }
    if (this.allUnChecked) {
      console.log('全てのチェックが外されました');
      this.pokemons = this.pokemonFullLists;
    } else {
      console.log('Array.fromが呼ばれています');
      this.pokemons = Array.from(new Set(this.pokemons))
    }
    console.log(this.pokemons);
  }

  filter(type: string, TYPE: string) {
    if (type === TYPE) {
      console.log(`${TYPE}のターン`);
      this.pokemons = this.pokemons.concat(this.pokemonFullLists.filter(
        (pokemon) => {
          return pokemon.type[1] ? pokemon.type[0] === TYPE || pokemon.type[1] === TYPE : pokemon.type[0] === TYPE;
        }
      ));
    }
  }
}

