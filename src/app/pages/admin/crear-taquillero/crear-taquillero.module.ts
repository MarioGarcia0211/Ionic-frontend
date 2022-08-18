import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTaquilleroPageRoutingModule } from './crear-taquillero-routing.module';

import { CrearTaquilleroPage } from './crear-taquillero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearTaquilleroPageRoutingModule
  ],
  declarations: [CrearTaquilleroPage]
})
export class CrearTaquilleroPageModule {}
