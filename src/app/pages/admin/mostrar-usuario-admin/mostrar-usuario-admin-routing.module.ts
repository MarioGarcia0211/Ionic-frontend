import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarUsuarioAdminPage } from './mostrar-usuario-admin.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarUsuarioAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarUsuarioAdminPageRoutingModule {}
