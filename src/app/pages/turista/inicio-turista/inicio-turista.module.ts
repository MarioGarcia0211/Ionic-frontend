import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioTuristaPageRoutingModule } from './inicio-turista-routing.module';

import { InicioTuristaPage } from './inicio-turista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioTuristaPageRoutingModule
  ],
  declarations: [InicioTuristaPage]
})
export class InicioTuristaPageModule {}
