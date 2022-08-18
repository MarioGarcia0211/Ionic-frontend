import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTaquilleroPage } from './crear-taquillero.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTaquilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTaquilleroPageRoutingModule {}
