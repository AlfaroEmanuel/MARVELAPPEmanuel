# MARVELAPPEmanuel

## WIKI STORE

### Actions del Store.

- **La accion setTeam:** es la que permite guardar y setear el el HERO-PROFILE con su respectivo ID y COLOR, se realizar la petición HTTP, cuya respuesta será enviada al Store mediante esta acción.

- **La acción LoadsHeroes:** es la que permite guardar y guardar todos los HEROES y listarlos en el componente LISTADO DE HEROES con toda la data requerida por el card y HERO PROFILE.
  
### State INICIAL del Store.

```
const heroesState: heroesState = {
    heroes: [],
    heroProfile: {}
};
```

### Creación de acciones.

Para creación de las acciones, se debe importar la librería **@ngrx/store**

```
import { createAction, props } from '@ngrx/store';

export const setTeamHero = createAction(
    '[Hero Component] setTeam',
    props<{ data }>()
);

export const loadHeroes = createAction(
    '[Hero Component] loadHeroes',
    props<{ heroes: Array<Heroe> }>()
);
```

### Reducer.

Es donde se controlan las acciones que definimos tales como LoadHeroes SetTeamHero, acciones que van a modificar el state cuando se ejecuten.
Ya que esta en el payload lleva las props (data) que se está ejecutando en dicha acción y modifica al state.

```
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

```

### Configuración del Store.

Para utilizar y que el store funcione correctamente hay que seguir ciertos lineamentos escenciales, tales como: 

Instalación: 

 - npm install @ngrx/store --save

Para la correcta utilización se debe importar tanto el StoreModule y nuestro reducer en el AppModule, para luego utilizarlos en el array de Imports del mismo: 

```
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './store/heroes.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({ heroes: heroReducer }),
  ],
})
```

### Dispatch.

El dispatch sirve para utilizar las acciones que se ejecutan en el reducer y para ello hay que tener el import del Store como tal y las acciones a utilizar. Para utilizar el reducer es necesario declararlo en el Constructor.

```
import { Store } from '@ngrx/store';
import * from '../store/heroes.actions';

constructor( private _heroesStore: Store<{ heroes: Array<Heroe> }> ) { }

```

Ya teniendo el Store se puede utilizar mediante el dispatch:

```

this._heroesStore.dispatch(actions.loadHeroes({heroes: this.heroes}));

```
