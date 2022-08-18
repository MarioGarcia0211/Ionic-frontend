import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DetallesTaquilleroComponent } from 'src/app/components/taquillero/detalles-taquillero/detalles-taquillero.component';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mostrar-taquillero',
  templateUrl: './mostrar-taquillero.page.html',
  styleUrls: ['./mostrar-taquillero.page.scss'],
})
export class MostrarTaquilleroPage implements OnInit {

  public taquilleros: Observable<Profile[]>;

  constructor(private us: UserService, public ps: ProfileService, public loadCtrl: LoadingController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  async cargarUsuarios(){
    const loading = await this.loadCtrl.create({ message: 'Cargando...'});
    loading.present();

    this.taquilleros = this.ps.mostrarTaquillero().pipe(
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
  async openDetailModalTaqui(taqui: Profile){
    const modalAdmin = await this.modalCtrl.create({
      component: DetallesTaquilleroComponent,
      componentProps: {taqui}
    });

    await modalAdmin.present();
  }

}
