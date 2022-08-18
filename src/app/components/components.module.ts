/* eslint-disable max-len */
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailAdminComponent } from './detail-admin/detail-admin.component';
import { DetailTaquiComponent } from './detail-taqui/detail-taqui.component';
import { DetailTuristaComponent } from './detail-turista/detail-turista.component';
import { MenuComponent } from './menu/menu.component';
import { DetallesTaquilleroComponent } from './taquillero/detalles-taquillero/detalles-taquillero.component';
import { DetallesTuristaComponent } from './taquillero/detalles-turista/detalles-turista.component';



@NgModule({
  declarations: [DetailAdminComponent, DetailTaquiComponent, DetailTuristaComponent, MenuComponent, DetallesTaquilleroComponent, DetallesTuristaComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports:[DetailAdminComponent, DetailTaquiComponent, DetailTuristaComponent, MenuComponent, DetallesTaquilleroComponent, DetallesTuristaComponent]
})
export class ComponentsModule { }
