import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearTuristaPage } from './crear-turista.page';

const routes: Routes = [
  {
    path: '',
    component: CrearTuristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearTuristaPageRoutingModule {}
