import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import * as actions from '../store/heroes.actions';
import { Heroe } from '../classes/heroe';

@Injectable({
  providedIn: 'root',
})

export class HeroesService {

  public group_colors = { 
                          "azul" : "#1f8ff7",
                          "violeta":"#a43de3",
                          "naranjo":"#df5c0f",
                          "verde":"#0ea521"
                        }

  public heroes: Array<Heroe> = [];
  public page = 0;
  public step = 20;
  public total = 0;
  public teams = new Map();

  constructor( private _http: HttpClient, private _heroesStore: Store<{ heroes: Array<Heroe> }>) { }
 
  resetPager() {
    this.page = 0;
  }

  getHeroes (nameStartsWith?: string, page?: number) {
    if (page || page === 0) {
      this.page = page;
    }
    const url = 'http://localhost:3000/bff/v1/Api-Marvel-BFF/getheroes/' + (this.page * this.step)
        + (nameStartsWith ? ('/' + nameStartsWith) : '');

        this._http.get<any>(url).subscribe((data) => {
        this.heroes = [];
        this.total = Math.ceil(data.data.total / this.step);
        data.data.results.forEach( result => {
            this.heroes.push(new Heroe(
              result.id,
              result.name,
              result.description,
              result.modified,
              result.thumbnail,
              result.resourceURI,
              this.getTeamColor(result.id)
            ));
          }
        );
        this._heroesStore.dispatch(actions.loadHeroes({heroes: this.heroes}));
      });
  }

  getHeroe(id) {
    const url = `http://localhost:3000/bff/v1/Api-Marvel-BFF/getheroe/${id}`
    return this._http.get<any>(url);
  } 

  setHeroeTeam(hero) {
    const url = `http://localhost:3000/bff/v1/Api-Marvel-BFF/setTeam/`
    this._http.post<any>(url, hero.heroProfile).subscribe(data => {
      console.log(data);
    });
  }

  getTeamColor(id):string{
    if(this.teams.get(id)!=undefined){
    return this.teams.get(id);
    }
    else{
    return "";
    }
  }
}
