import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostrarUsuarioTuristaPageRoutingModule } from './mostrar-usuario-turista-routing.module';

import { MostrarUsuarioTuristaPage } from './mostrar-usuario-turista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostrarUsuarioTuristaPageRoutingModule
  ],
  declarations: [MostrarUsuarioTuristaPage]
})
export class MostrarUsuarioTuristaPageModule {}
