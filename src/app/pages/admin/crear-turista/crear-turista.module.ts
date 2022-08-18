import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTuristaPageRoutingModule } from './crear-turista-routing.module';

import { CrearTuristaPage } from './crear-turista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CrearTuristaPageRoutingModule
  ],
  declarations: [CrearTuristaPage]
})
export class CrearTuristaPageModule {}
