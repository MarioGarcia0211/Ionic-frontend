import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioTuristaPage } from './inicio-turista.page';

const routes: Routes = [
  {
    path: '',
    component: InicioTuristaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioTuristaPageRoutingModule {}
