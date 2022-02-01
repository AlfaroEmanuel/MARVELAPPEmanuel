import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Store } from '@ngrx/store';
import { Heroe } from '../../classes/heroe';
import { setTeamHero } from '../../store/heroes.actions';

@Component({
  selector: 'app-modal-poll',
  templateUrl: './modal-poll.component.html',
  styleUrls: ['./modal-poll.component.css']
})

export class ModalPollComponent implements OnInit {

  @Input() public team_selected: string;
  @Input() public hero: Heroe;
  @Input() public title_modal : string;
  @Output() setTeam:EventEmitter<string> = new EventEmitter<string>();

  public show_modal: boolean = false;

  constructor(private _heroesStore: Store<{ heroes: Array<Heroe> }>) { }

  ngOnInit() {
  }

  toggle_modal(): void {
    this.show_modal = !this.show_modal;
  }

  send_team(team: string): void {
    this.setTeam.emit(team);
    this.toggle_modal();
    this._heroesStore.dispatch(
      setTeamHero({
        data: {
          id: this.hero.id,
          team
        }
      })
    );
  }

}