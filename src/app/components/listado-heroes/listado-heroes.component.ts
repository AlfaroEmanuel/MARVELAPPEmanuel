import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../classes/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css']
})
export class ListadoHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public heroes: Array<Heroe> = [];
  public searchString : string;

  constructor(public heroesService: HeroesService) { }

  ngOnInit() {
    this.heroesService.getHeroes();
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

}
