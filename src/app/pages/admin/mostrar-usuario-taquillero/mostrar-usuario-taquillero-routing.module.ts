import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUsuarioTaquilleroPage } from './mostrar-usuario-taquillero.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUsuarioTaquilleroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUsuarioTaquilleroPageRoutingModule {}
