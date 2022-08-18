import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-mostrar-reservas',
  templateUrl: './mostrar-reservas.page.html',
  styleUrls: ['./mostrar-reservas.page.scss'],
})
export class MostrarReservasPage implements OnInit {

  public registros: Observable<Register[]>;

  constructor(private rs: RegisterService, public loadCtrl: LoadingController, public modalCtrl: ModalController) { }

  ngOnInit() {
    this.cargarRegistros();
  }

  async cargarRegistros(){
    const loading = await this.loadCtrl.create({ message: 'Cargando...'});
    loading.present();

    this.registros = this.rs.mostrarRegistro().pipe(
      tap((admins)=>{
        loading.dismiss();
         console.log(admins);
         return admins;
       })
     );
  }

  doRefresh(event) {
    this.cargarRegistros();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 0);
  }

}
