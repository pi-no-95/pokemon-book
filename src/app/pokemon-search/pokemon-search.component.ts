import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

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

  isSelected: boolean = false;
  requirement: number = 0;
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

  allComplete: boolean = false;

  setSelected() {
    this.isSelected = true;
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  clear() {
    this.isSelected = false;
  }

  outputLog() {
    console.log(this.requirement);
  }

  outputLog2() {
    const result = [];
    for (let item of this.refinementType) {
      if (item['checked']) {
        result.push(item['name']);
      }
    }
    console.log(result);
  }

}
