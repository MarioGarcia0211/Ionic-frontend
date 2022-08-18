import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenerarReservaPage } from './generar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: GenerarReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerarReservaPageRoutingModule {}
