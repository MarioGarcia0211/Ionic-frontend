/* eslint-disable max-len */
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';
import { TaquilleroService } from 'src/app/services/taquillero.service';

@Component({
  selector: 'app-crear-taquillero',
  templateUrl: './crear-taquillero.page.html',
  styleUrls: ['./crear-taquillero.page.scss'],
})
export class CrearTaquilleroPage implements OnInit {

  @Input() taqui: User;

  isEditMode = false;

  form: FormGroup;

  constructor(private ps: ProfileService, private ts: TaquilleroService, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.initCreateAddUserForm();

    if(this.taqui){
      this.isEditMode = true;
      this.setFormValues();
    }
  }


  initCreateAddUserForm(){
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      identification: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
  }

  setFormValues(){
    this.form.setValue({
      name: this.taqui.name,
      lastname: this.taqui.lastname,
      identification: this.taqui.identification,
      email: this.taqui.email,
      password: this.taqui.password
    });

    this.form.updateValueAndValidity();
  }

  closeModal(data = null){
    this.modalCtrl.dismiss(data);
  }

  async crear(){
    const loading = await this.loadingCtrl.create({ message: 'Cargando...'});
    loading.present();

    let responser: Observable<User>;

    if(this.isEditMode){
      responser = this.ps.editarTaquillero(this.taqui.id, this.form.value);
    }
    else{
      responser = this.ps.agregarTaquillero(this.form.value);
    }

    responser.pipe(take(1)).subscribe((taquis) => {
      this.form.reset();
      loading.dismiss();


      if(this.isEditMode){
        this.closeModal(taquis);
      }
    });

  }
}
