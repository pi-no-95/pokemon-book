import { Component, OnInit, ViewChild } from '@angular/core';

import { POKEMONS } from './../../models/pokemons';
import { REFINEMENTTYPE } from './../../models/refinement-type';

import { PokemonSearchComponent } from '../pokemon-search/pokemon-search.component'

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @ViewChild(PokemonSearchComponent)
  private searchComponent: PokemonSearchComponent;
  pokemonFullLists = POKEMONS;
  refinementType: {}[] = REFINEMENTTYPE;
  pokemons: {}[] = this.pokemonFullLists;
  checkedTypes: string[] = [];
  noResults: boolean = false;
  typeStrings: {}[] = [
    { name: "Normal" },
    { name: "Fire" },
    { name: "Water" },
    { name: "Grass" },
    { name: "Electric" },
    { name: "Ice" },
    { name: "Fighting" },
    { name: "Poison" },
    { name: "Ground" },
    { name: "Flying" },
    { name: "Psychic" },
    { name: "Bug" },
    { name: "Rock" },
    { name: "Ghost" },
    { name: "Dragon" },
    { name: "Dark" },
    { name: "Steel" },
    { name: "Fairy" },
  ];

  constructor() { }

  ngOnInit(): void {
    REFINEMENTTYPE.forEach((type: {}): void => {
      if (type['checked'] === true) {
        console.log('チェック済みをfalseにします');

        type['checked'] = false;
      }
    });
    this.refinementType = REFINEMENTTYPE;
    this.filterList(event);
    console.log('listだよ');
  }

  filterList(event): void {
    this.checkedTypes = [];
    this.pokemons = this.pokemonFullLists;
    // this.noResults = false;

    for (const checkedType of this.refinementType) {
      if (checkedType['checked']) {
        this.checkedTypes.push(checkedType['name']);
      }
    }

    if (this.checkedTypes.length) {
      if (this.searchComponent.requirement) {
        this.pokemons = [];
        for (const type of this.checkedTypes) {
          // OR
          this.filter(type, this.pokemonFullLists, true);
        }
      } else {
        for (const type of this.checkedTypes) {
          // AND
          this.filter(type, this.pokemons, false);
        }
      }
      this.pokemons = Array.from(new Set(this.pokemons))
    }

    this.noResults = !!!this.pokemons.length;
  }

  filter(type: string, pokemonLists: {}[], flag: boolean) {

    if (flag) {
      // OR
      for (const typeString of this.typeStrings) {
        if (type === typeString['name']) {
          this.pokemons = this.pokemons.concat(this.pokemonFullLists.filter(
            (pokemon) => {
              return pokemon['type'][1] ? pokemon['type'][0] === typeString['name'] || pokemon['type'][1] === typeString['name'] : pokemon['type'][0] === typeString['name'];
            }
          ));
        }
      }
    } else {
      // AND
      for (const typeString of this.typeStrings) {
        if (type === typeString['name']) {
          pokemonLists = pokemonLists.filter(
            (pokemon) => {
              return pokemon['type'][1] ? pokemon['type'][0] === typeString['name'] || pokemon['type'][1] === typeString['name'] : pokemon['type'][0] === typeString['name'];
            }
          );
        }
      }
      this.pokemons = pokemonLists;
    }
  }
}
