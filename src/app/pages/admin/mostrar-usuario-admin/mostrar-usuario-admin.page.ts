/* eslint-disable max-len */
/* eslint-disable new-parens */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { map, tap } from 'rxjs/operators';
import { LoadingController, ModalController } from '@ionic/angular';
import { ProfileService } from 'src/app/services/profile.service';
import { Profile } from 'src/app/models/profile';
import { DetailAdminComponent } from 'src/app/components/detail-admin/detail-admin.component';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-mostrar-usuario-admin',
  templateUrl: './mostrar-usuario-admin.page.html',
  styleUrls: ['./mostrar-usuario-admin.page.scss'],
})
export class MostrarUsuarioAdminPage implements OnInit {

  public administradores: Observable<User[]>;
  // perfilSub: Subscription;

  constructor(private us: UserService, public ps: ProfileService, public as: AdminService , public loadCtrl: LoadingController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  async cargarUsuarios(){
    const loading = await this.loadCtrl.create({ message: 'Cargando...'});
    loading.present();

    this.administradores = this.as.mostrarUsuarioAdmin().pipe(
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

  async openDetailModalAdmin(admin: User){
    const modalAdmin = await this.modalCtrl.create({
      component: DetailAdminComponent,
      componentProps: {admin}
    });

    await modalAdmin.present();
  }

}
