/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { Profile } from 'src/app/models/profile';
import { Register } from 'src/app/models/register';
import { RegisterService } from 'src/app/services/register.service';
import { ProfileService } from 'src/app/services/profile.service';
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { LoadingController } from '@ionic/angular';
import { TaquilleroService } from 'src/app/services/taquillero.service';
import { TuristaService } from 'src/app/services/turista.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.page.html',
  styleUrls: ['./crear-reserva.page.scss'],
})
export class CrearReservaPage implements OnInit {

  public turistas: Observable<User[]>;
  public taquilleros: Observable<User[]>;
  public taquillero: User[] = [];
  public registros: Register[] = [];

  selectedVal = this.taquillero[0];

  modes = ['date', 'date-time', 'month', 'month-year', 'time', 'time-date', 'year'];
  selectMode = 'date';
  showPicker = false;
  min = new Date();

  dateValue = format(new Date(), 'yyyy-MM-dd');
  formattedString = '';


  form: FormGroup;
  constructor(public ps: ProfileService, public ts: TaquilleroService, public tus: TuristaService, public rs: RegisterService, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.mostrar();
    this.initCreateAddRegisterForm();
  }

  initCreateAddRegisterForm(){
    this.form = new FormGroup({
      date: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      fkprofiletaqui: new FormControl('', [Validators.required]),
      fkprofileturis: new FormControl('', [Validators.required])
    });
  }

  mostrar(){
    // this.turistas = this.ps.mostrarTurista().pipe(
    //   tap((admins)=>{
    //       console.log(admins);
    //      return admins;
    //    })
    //   );

    //   this.taquilleros = this.ps.mostrarTaquillero().pipe(
    //     tap((admins)=>{
    //         console.log(admins);
    //        return admins;
    //      })
    //     );
    this.turistas = this.tus.mostrarUsuarioTuris().pipe(
      tap((admins)=>{
          console.log(admins);
         return admins;
       })
      );

      this.taquilleros = this.ts.mostrarUsuarioTaqui().pipe(
        tap((admins)=>{
            console.log(admins);
           return admins;
         })
        );
  }

  async crear(){
    // const loading = await this.loadingCtrl.create({ message: 'Cargando...'});
    // loading.present();

    console.log(this.form.value);

    this.rs.agregarRegistro(this.form.value).pipe(take(1)).subscribe((regis) =>{
      console.log(regis);
       this.form.reset();
    //   loading.dismiss();
    });
  }


  // setDay(){
  //   this.formattedString = format(parseISO(format(new Date(), 'yyyy-MM-dd') + 'T09:00:00.000Z'), 'MMMM d, yyyy', {locale: es});
  // }

  dateChanged(value){
    this.dateValue = value;
    this.formattedString = format(parseISO(value), 'MMMM d, yyyy', {locale: es});
    this.showPicker = false;
  }

}
