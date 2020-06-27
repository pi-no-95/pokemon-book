import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from 'src/models/pokemons';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon;

  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
    },
  };
  public radarChartLabels: Label[] = ['HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ'];

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      // +を先頭につけると数字として計算できるようになるらしい
      const id = +map.get('id');
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.pop();
      this.radarChartData.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base.SpAttack,
          this.pokemon.base.SpDefense,
          this.pokemon.base.Speed,
        ]
      })
    })
  }

}
