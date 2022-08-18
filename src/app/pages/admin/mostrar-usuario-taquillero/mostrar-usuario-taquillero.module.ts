import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioTaquilleroPageRoutingModule } from './mostrar-usuario-taquillero-routing.module';

import { MostrarUsuarioTaquilleroPage } from './mostrar-usuario-taquillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUsuarioTaquilleroPageRoutingModule
  ],
  declarations: [MostrarUsuarioTaquilleroPage]
})
export class MostrarUsuarioTaquilleroPageModule {}
