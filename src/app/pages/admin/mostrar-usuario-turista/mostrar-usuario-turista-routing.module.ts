import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUsuarioTuristaPage } from './mostrar-usuario-turista.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUsuarioTuristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUsuarioTuristaPageRoutingModule {}
