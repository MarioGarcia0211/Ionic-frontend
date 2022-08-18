import { Component, Input, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-detalles-taquillero',
  templateUrl: './detalles-taquillero.component.html',
  styleUrls: ['./detalles-taquillero.component.scss'],
})
export class DetallesTaquilleroComponent implements OnInit {

  @Input() taqui: Profile;

  constructor(private ps: ProfileService, private modalCtrl: ModalController, private loadingCtrl: LoadingController, ) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss(this.taqui);
  }

}
