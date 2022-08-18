import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { CrearTuristaPage } from 'src/app/pages/admin/crear-turista/crear-turista.page';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-detail-turista',
  templateUrl: './detail-turista.component.html',
  styleUrls: ['./detail-turista.component.scss'],
})
export class DetailTuristaComponent implements OnInit {

  @Input() turis: User;

  constructor(private ps: ProfileService, private modalCtrl: ModalController, private loadingCtrl: LoadingController, ) { }

  ngOnInit() {}

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.turis, role);
  }

  async openEdit(){
    const modal = await this.modalCtrl.create({
      component: CrearTuristaPage,
      componentProps: {turis: this.turis}
    });

    await modal.present();

    const {data: editAdmin} = await modal.onDidDismiss();
    if(editAdmin){
      this.turis = editAdmin;
    }
  }

  async onDelete(){
    const eliminar = await this.loadingCtrl.create({ message: 'Eliminando...'});
    eliminar.present();

    this.ps.eliminarTurista(this.turis.id).pipe(take(1)).subscribe(
      () => {
        eliminar.dismiss();
        this.closeModal('delete');
      }
    );
  }

}
