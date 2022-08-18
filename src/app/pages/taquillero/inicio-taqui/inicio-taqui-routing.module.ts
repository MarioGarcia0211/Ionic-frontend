import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioTaquiPage } from './inicio-taqui.page';

const routes: Routes = [
  {
    path: '',
    component: InicioTaquiPage,
    children: [
      {
        path: '',
        redirectTo: 'tabs1',
        pathMatch: 'full'
      },
      {
        path: 'tabs1',
        loadChildren: () => import('../../taquillero/mostrar-taquillero/mostrar-taquillero.module').then(m => m.MostrarTaquilleroPageModule)
      },
      {
        path: 'tabs2',
        loadChildren: () => import('../../taquillero/mostrar-turis/mostrar-turis.module').then(m => m.MostrarTurisPageModule)
      },
      {
        path: 'tabs3',
        loadChildren: () => import('../../taquillero/mostrar-reservas/mostrar-reservas.module').then(m => m.MostrarReservasPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioTaquiPageRoutingModule {}
