import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Heroe } from '../../classes/heroe';
import { Observable } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { config } from 'process';

@Component({
  selector: 'app-listado-heroes',
  templateUrl: './listado-heroes.component.html',
  styleUrls: ['./listado-heroes.component.css'],
})
export class ListadoHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public heroes: Array<Heroe> = [];
  public searchString: string;

  constructor( private heroesService: HeroesService, private _heroesStore: Store<{ heroes: Array<Heroe> }> ) {}

  ngOnInit() {
    this.heroesService.getHeroes();

    this._heroesStore.select('heroes').subscribe((heroes) => {
      this.heroes = heroes;
    });
    console.log(this.heroes);
  }

  getHeroesService() {
    return this.heroesService;
  }

  submitSearch() {
    this.heroesService.getHeroes(this.searchString);
    console.log(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(
      this.searchString,
      this.heroesService.page - 1
    );
  }

  nextPage() {
    this.heroesService.getHeroes(
      this.searchString,
      this.heroesService.page + 1
    );
  }
}
