import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarTaquilleroPageRoutingModule } from './mostrar-taquillero-routing.module';

import { MostrarTaquilleroPage } from './mostrar-taquillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarTaquilleroPageRoutingModule
  ],
  declarations: [MostrarTaquilleroPage]
})
export class MostrarTaquilleroPageModule {}
