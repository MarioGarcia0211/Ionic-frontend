import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-crear-admin',
  templateUrl: './crear-admin.page.html',
  styleUrls: ['./crear-admin.page.scss'],
})
export class CrearAdminPage implements OnInit {

  @Input() admin: User;
  @Input() profile: Profile;

  isEditMode = false;

  form: FormGroup;

  constructor(private ps: ProfileService, private loadingCtrl: LoadingController, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.initCreateAddUserForm();

    if(this.admin){
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
      name: this.admin.name,
      lastname: this.admin.lastname,
      identification: this.admin.identification,
      email: this.admin.email,
      password: this.admin.password
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
      responser = this.ps.editarAdmin(this.admin.id, this.form.value);
    }
    else{
      responser = this.ps.agregarAdmin(this.form.value);
    }

    responser.pipe(take(1)).subscribe((admins) => {
      this.form.reset();
      loading.dismiss();


      if(this.isEditMode){
        this.closeModal(admins);
      }
    });
  }
}
