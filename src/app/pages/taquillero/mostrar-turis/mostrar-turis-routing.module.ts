import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarTurisPage } from './mostrar-turis.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarTurisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarTurisPageRoutingModule {}
