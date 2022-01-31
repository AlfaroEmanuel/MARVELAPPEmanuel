import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroProfileComponent } from './hero-profile.component';

const routes: Routes = [{ path: '', component: HeroProfileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HeroProfileRoutingModule {}