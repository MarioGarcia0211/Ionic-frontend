import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioAdminPageRoutingModule } from './mostrar-usuario-admin-routing.module';

import { MostrarUsuarioAdminPage } from './mostrar-usuario-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUsuarioAdminPageRoutingModule
  ],
  declarations: [MostrarUsuarioAdminPage]
})
export class MostrarUsuarioAdminPageModule {}
