import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { 
    path: 'listado-heroes', 
    loadChildren: () => import('./components/listado-heroes/listado-heroes.module').then(m => m.ListadoHeroesModule)
  },
  { 
    path: 'heroe/:id', 
    loadChildren: () => import('./components/hero-profile/hero-profile.module').then(m => m.HeroProfileModule)
  },
  {
    path: '**', 
    redirectTo: '/listado-heroes' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
