import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { CrearAdminPage } from 'src/app/pages/admin/crear-admin/crear-admin.page';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss'],
})
export class DetailAdminComponent implements OnInit {

  @Input() admin: User;

  constructor(private ps: ProfileService, private modalCtrl: ModalController, private loadingCtrl: LoadingController, ) { }

  ngOnInit() {}

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.admin, role);
  }

  async openEdit(){
    const modal = await this.modalCtrl.create({
      component: CrearAdminPage,
      componentProps: {admin: this.admin}
    });

    await modal.present();

    const {data: editAdmin} = await modal.onDidDismiss();
    if(editAdmin){
      this.admin = editAdmin;
    }
  }

  async onDelete(){
    const eliminar = await this.loadingCtrl.create({ message: 'Eliminando...'});
    eliminar.present();

    this.ps.eliminarAdmin(this.admin.id).pipe(take(1)).subscribe(
      () => {
        eliminar.dismiss();
        this.closeModal('delete');
      }
    );
  }


}
