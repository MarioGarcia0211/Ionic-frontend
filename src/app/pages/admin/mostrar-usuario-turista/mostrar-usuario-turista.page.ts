/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { DetailTuristaComponent } from 'src/app/components/detail-turista/detail-turista.component';
import { Profile } from 'src/app/models/profile';
import { TuristaService } from 'src/app/services/turista.service';

@Component({
  selector: 'app-mostrar-usuario-turista',
  templateUrl: './mostrar-usuario-turista.page.html',
  styleUrls: ['./mostrar-usuario-turista.page.scss'],
})
export class MostrarUsuarioTuristaPage implements OnInit {

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
      component: DetailTuristaComponent  ,
      componentProps: {turis}
    });

    await modalAdmin.present();
  }

}
