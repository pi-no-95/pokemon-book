import { Component, OnInit } from '@angular/core';

import { POKEMONS } from './../../models/pokemons';
import { REFINEMENTTYPE } from './../../models/refinement-type';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons = POKEMONS;
  refinementType = REFINEMENTTYPE;

  constructor() { }

  ngOnInit(): void {
  }

}
