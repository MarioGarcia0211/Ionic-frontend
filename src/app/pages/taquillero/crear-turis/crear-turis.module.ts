import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearTurisPageRoutingModule } from './crear-turis-routing.module';

import { CrearTurisPage } from './crear-turis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearTurisPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CrearTurisPage]
})
export class CrearTurisPageModule {}
