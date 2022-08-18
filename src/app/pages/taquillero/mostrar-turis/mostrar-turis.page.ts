/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { DetallesTuristaComponent } from 'src/app/components/taquillero/detalles-turista/detalles-turista.component';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { TuristaService } from 'src/app/services/turista.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-mostrar-turis',
  templateUrl: './mostrar-turis.page.html',
  styleUrls: ['./mostrar-turis.page.scss'],
})
export class MostrarTurisPage implements OnInit {

  public turistas: Observable<User[]>;
  constructor(private us: UserService, public ps: ProfileService, public tus: TuristaService, public loadCtrl: LoadingController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  async cargarUsuarios(){
    const loading = await this.loadCtrl.create({ message: 'Cargando...'});
    loading.present();

    this.turistas = this.tus.mostrarUsuarioTuris().pipe(
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
  async openDetailModalTaqui(turis: User){
    const modalAdmin = await this.modalCtrl.create({
      component: DetallesTuristaComponent,
      componentProps: {turis}
    });

    await modalAdmin.present();
  }

}
