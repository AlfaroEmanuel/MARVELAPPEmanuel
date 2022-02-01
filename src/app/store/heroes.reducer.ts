import { createReducer, on } from '@ngrx/store';
import * as states from './heroes.actions';
import { Heroe } from '../classes/heroe';

export interface heroesState {
    heroes: Array<Heroe>;
    heroProfile: Object
}

const heroesState: heroesState = {
    heroes: [],
    heroProfile: {}
};

const _heroesReducer = createReducer(
    heroesState,
    on(states.loadHeroes, (state, { heroes }) => ({
        ...state,
        heroes
        
    })),
    on(states.setTeamHero, (state, { type, data }) => {
        return {
            ...state,
            heroProfile: data
        }
    }),
);

export function heroesReducer(state, action) {
    return _heroesReducer(state, action);
}