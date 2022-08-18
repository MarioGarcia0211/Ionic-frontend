import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTurisPage } from './crear-turis.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTurisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTurisPageRoutingModule {}
