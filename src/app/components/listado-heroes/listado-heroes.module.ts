import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListadoHeroesRoutingModule } from './listado-heroes.routing.module';
import { ListadoHeroesComponent } from './listado-heroes.component';

@NgModule({
  declarations: [ListadoHeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ListadoHeroesRoutingModule
  ]
})

export class ListadoHeroesModule {}