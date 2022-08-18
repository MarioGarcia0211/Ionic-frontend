import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-crear-turis',
  templateUrl: './crear-turis.page.html',
  styleUrls: ['./crear-turis.page.scss'],
})
export class CrearTurisPage implements OnInit {

  @Input() turis: User;

  isEditMode = false;

  form: FormGroup;

  constructor(private ps: ProfileService, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.initCreateAddUserForm();

    if(this.turis){
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
      name: this.turis.name,
      lastname: this.turis.lastname,
      identification: this.turis.identification,
      email: this.turis.email,
      password: this.turis.password
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
      responser = this.ps.editarTurista(this.turis.id, this.form.value);
    }
    else{
      responser = this.ps.agregarTurista(this.form.value);
    }

    responser.pipe(take(1)).subscribe((turis) => {
      this.form.reset();
      loading.dismiss();


      if(this.isEditMode){
        this.closeModal(turis);
      }
    });

  }

}
