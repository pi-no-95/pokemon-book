import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { PokemonListComponent } from './../pokemon-list/pokemon-list.component'

import { TypePipe } from '../pipes/type.pipe';
import { REFINEMENTTYPE } from '../../models/refinement-type';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})

export class PokemonSearchComponent implements OnInit {
  @Output() action = new EventEmitter<MouseEvent>();

  isSelected: boolean = false;
  requirement: number = 1;
  types = TypePipe;
  refinementType = REFINEMENTTYPE;

  constructor() { }

  ngOnInit(): void {
  }
  task: Task = {
    name: 'Type',
    completed: false,
    color: 'primary',
    subtasks: [
      { name: 'ノーマル', completed: false, color: 'primary' },
      { name: 'ほのお', completed: false, color: 'primary' },
      { name: 'みず', completed: false, color: 'primary' },
      { name: 'くさ', completed: false, color: 'primary' },
      { name: 'でんき', completed: false, color: 'primary' },
      { name: 'こおり', completed: false, color: 'primary' },
      { name: 'かくとう', completed: false, color: 'primary' },
      { name: 'どく', completed: false, color: 'primary' },
      { name: 'じめん', completed: false, color: 'primary' },
      { name: 'ひこう', completed: false, color: 'primary' },
      { name: 'エスパー', completed: false, color: 'primary' },
      { name: 'むし', completed: false, color: 'primary' },
      { name: 'いわ', completed: false, color: 'primary' },
      { name: 'ゴースト', completed: false, color: 'primary' },
      { name: 'ドラゴン', completed: false, color: 'primary' },
      { name: 'あく', completed: false, color: 'primary' },
      { name: 'はがね', completed: false, color: 'primary' },
      { name: 'フェアリー', completed: false, color: 'primary' }
    ]
  };

  filterList(event): void {
    console.log('pokemon-searchのfilterList()だよ');
    this.action.emit(event);
  }

}
