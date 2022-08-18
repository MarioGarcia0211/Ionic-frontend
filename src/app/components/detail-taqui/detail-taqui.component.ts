import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { CrearTaquilleroPage } from 'src/app/pages/admin/crear-taquillero/crear-taquillero.page';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-detail-taqui',
  templateUrl: './detail-taqui.component.html',
  styleUrls: ['./detail-taqui.component.scss'],
})
export class DetailTaquiComponent implements OnInit {

  @Input() taqui: User;

  constructor(private ps: ProfileService, private modalCtrl: ModalController, private loadingCtrl: LoadingController, ) { }

  ngOnInit() {}

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.taqui, role);
  }

  async openEdit(){
    const modal = await this.modalCtrl.create({
      component: CrearTaquilleroPage,
      componentProps: {taqui: this.taqui}
    });

    await modal.present();

    const {data: editAdmin} = await modal.onDidDismiss();
    if(editAdmin){
      this.taqui = editAdmin;
    }
  }

  async onDelete(){
    const eliminar = await this.loadingCtrl.create({ message: 'Eliminando...'});
    eliminar.present();

    this.ps.eliminarTaquillero(this.taqui.id).pipe(take(1)).subscribe(
      () => {
        eliminar.dismiss();
        this.closeModal('delete');
      }
    );
  }

}
