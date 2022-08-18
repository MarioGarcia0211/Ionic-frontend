/* eslint-disable max-len */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { InicioAdminPage } from './inicio-admin.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAdminPage,
    children: [
      {
        path: '',
        redirectTo: 'tabs1',
        pathMatch: 'full'
      },
      {
        path: 'tabs1',
        loadChildren: () => import('../mostrar-usuario-admin/mostrar-usuario-admin.module').then(m => m.MostrarUsuarioAdminPageModule)
      },
      {
        path: 'tabs2',
        loadChildren: () => import('../mostrar-usuario-taquillero/mostrar-usuario-taquillero.module').then(m => m.MostrarUsuarioTaquilleroPageModule)
      },
      {
        path: 'tabs3',
        loadChildren: () => import('../mostrar-usuario-turista/mostrar-usuario-turista.module').then(m => m.MostrarUsuarioTuristaPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAdminPageRoutingModule {}
