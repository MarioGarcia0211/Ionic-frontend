/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { CrearTuristaPage } from 'src/app/pages/admin/crear-turista/crear-turista.page';
import { CrearTurisPage } from 'src/app/pages/taquillero/crear-turis/crear-turis.page';
import { ProfileService } from 'src/app/services/profile.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-detalles-turista',
  templateUrl: './detalles-turista.component.html',
  styleUrls: ['./detalles-turista.component.scss'],
})
export class DetallesTuristaComponent implements OnInit {

  @Input() turis: User;

  constructor(private ps: ProfileService, private rs: RegisterService, private modalCtrl: ModalController, private loadingCtrl: LoadingController, ) { }

  ngOnInit() {}

  closeModal(role = 'edit'){
    this.modalCtrl.dismiss(this.turis, role);
  }

  async openEdit(){
    const modal = await this.modalCtrl.create({
      component: CrearTurisPage,
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
