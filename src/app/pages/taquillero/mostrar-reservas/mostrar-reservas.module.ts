import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarReservasPageRoutingModule } from './mostrar-reservas-routing.module';

import { MostrarReservasPage } from './mostrar-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarReservasPageRoutingModule
  ],
  declarations: [MostrarReservasPage]
})
export class MostrarReservasPageModule {}
