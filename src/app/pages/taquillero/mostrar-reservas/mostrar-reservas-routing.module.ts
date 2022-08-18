import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarReservasPage } from './mostrar-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarReservasPageRoutingModule {}
