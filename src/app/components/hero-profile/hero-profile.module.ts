import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroProfileRoutingModule } from './hero-profile.routing.module';
import { HeroProfileComponent } from './hero-profile.component';
import { SharedUiModule } from '../../ui/shared-ui.module';

@NgModule({
  declarations: [
    HeroProfileComponent,
  ],
  imports: [
    CommonModule,
    SharedUiModule,
    HeroProfileRoutingModule
  ]
})

export class HeroProfileModule {}