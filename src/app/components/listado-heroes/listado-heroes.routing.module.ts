import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoHeroesComponent } from './listado-heroes.component';

const routes: Routes = [{ path: '', component: ListadoHeroesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoHeroesRoutingModule { }