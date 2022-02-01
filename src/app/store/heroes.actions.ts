import { createAction, props } from '@ngrx/store';
import { Heroe } from '../classes/heroe';

export const setTeamHero = createAction(
    '[Hero Component] setTeam',
    props<{ data }>()
);

export const loadHeroes = createAction(
    '[Hero Component] LoadsHeroes',
    props<{ heroes: Array<Heroe> }>()
);