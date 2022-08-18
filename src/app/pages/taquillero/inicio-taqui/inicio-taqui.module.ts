import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioTaquiPageRoutingModule } from './inicio-taqui-routing.module';

import { InicioTaquiPage } from './inicio-taqui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioTaquiPageRoutingModule
  ],
  declarations: [InicioTaquiPage]
})
export class InicioTaquiPageModule {}
