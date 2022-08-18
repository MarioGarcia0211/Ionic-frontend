import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarTaquilleroPage } from './mostrar-taquillero.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarTaquilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarTaquilleroPageRoutingModule {}
