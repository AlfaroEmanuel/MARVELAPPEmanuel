import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../classes/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { ModalPollComponent } from '../../ui/modal-poll/modal-poll.component';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})

export class HeroProfileComponent implements OnInit, OnDestroy {

  @ViewChild('modal') modal: ModalPollComponent;
  
  public question_modal: string;
  private id;
  public heroe: Heroe;
  public team:string = "";
  public heroeSubscription: Subscription;
  public heroes$: Observable<Array<Heroe>>;
  
  constructor(private _route: ActivatedRoute, private heroesService: HeroesService, private _location: Location, private _heroesStore: Store<{ heroes: Array<Heroe> }>) { }

  ngOnInit() {
    this.heroes$ = this._heroesStore.select('heroes');
    this.heroeSubscription = this.heroes$.subscribe((data: any) => {
      if (Object.keys(data.heroProfile).length !== 0) {
        this.team = data.heroProfile.team;
        console.log(data);
        this.heroesService.setHeroeTeam(data);
      }
    });
    this._route.params.subscribe(params => {
      this.id = params.id;
      this.heroesService.getHeroe(this.id).subscribe(data => {
        const temp = data.data.results[0];
        this.heroe = new Heroe(temp.id, temp.name, temp.description, temp. modified, temp.thumbnail, temp.resourceURI,'');
      });
    });
  }

  ngOnDestroy(): void {
    this.heroeSubscription.unsubscribe();
  }

  goBack() {
    this._location.back();
  }

  launchModal():void{
    this.question_modal="¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

  getTeam(team):void{
    this.team = team;
    this.heroesService.teams.set(this.heroe.id, this.team);
  }

}