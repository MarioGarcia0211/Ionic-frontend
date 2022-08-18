import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GenerarReservaPageRoutingModule } from './generar-reserva-routing.module';

import { GenerarReservaPage } from './generar-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GenerarReservaPageRoutingModule
  ],
  declarations: [GenerarReservaPage]
})
export class GenerarReservaPageModule {}
