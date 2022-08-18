/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';
import { map, tap } from 'rxjs/operators';
import { DetailTaquiComponent } from 'src/app/components/detail-taqui/detail-taqui.component';
import { Profile } from 'src/app/models/profile';
import { TaquilleroService } from 'src/app/services/taquillero.service';

@Component({
  selector: 'app-mostrar-usuario-taquillero',
  templateUrl: './mostrar-usuario-taquillero.page.html',
  styleUrls: ['./mostrar-usuario-taquillero.page.scss'],
})
export class MostrarUsuarioTaquilleroPage implements OnInit {

  public taquilleros: Observable<User[]>;
  constructor(private us: UserService, public ps: ProfileService, public ts: TaquilleroService, public loadCtrl: LoadingController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  async cargarUsuarios(){
    const loading = await this.loadCtrl.create({ message: 'Cargando...'});
    loading.present();

    this.taquilleros = this.ts.mostrarUsuarioTaqui().pipe(
       tap((admins)=>{
         loading.dismiss();
          console.log(admins);
          return admins;
        })
      );
  }

  doRefresh(event) {
    this.cargarUsuarios();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 0);
  }
  async openDetailModalTaqui(taqui: User){
    const modalAdmin = await this.modalCtrl.create({
      component: DetailTaquiComponent,
      componentProps: {taqui}
    });

    await modalAdmin.present();
  }

}
