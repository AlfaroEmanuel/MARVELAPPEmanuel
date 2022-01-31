import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../../classes/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Location } from '@angular/common';
import { ModalPollComponent } from '../../ui/modal-poll/modal-poll.component';

@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})

export class HeroProfileComponent implements OnInit {

  @ViewChild('modal') modal: ModalPollComponent;
  
  public question_modal: string;
  private id;
  public heroe: Heroe;
  public team:string = "";
  
  constructor(private route: ActivatedRoute, private heroesService: HeroesService, private _location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.heroesService.getHeroe(this.id).subscribe(data => {
        const temp = data.data.results[0];
        this.heroe = new Heroe(temp.id, temp.name, temp.description, temp. modified, temp.thumbnail, temp.resourceURI,'');
      });
    });
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