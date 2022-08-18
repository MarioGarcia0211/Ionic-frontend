import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarTurisPageRoutingModule } from './mostrar-turis-routing.module';

import { MostrarTurisPage } from './mostrar-turis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarTurisPageRoutingModule
  ],
  declarations: [MostrarTurisPage]
})
export class MostrarTurisPageModule {}
