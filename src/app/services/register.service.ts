import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  apiUrlRegister = environment.url+'ingresos';
  apiUrlRegisterFijo = environment.url+'misingresos';

  constructor(private http: HttpClient) { }

  mostrarRegistro(): Observable<Register[]>{
    return this.http.get<Register[]>(this.apiUrlRegister);
  }

  agregarRegistro(element: Register): Observable<Register>{
    return this.http.post<Register>(this.apiUrlRegister, element);
  }

  mostrarRegistroIDFijo(): Observable<Register[]>{
    return this.http.get<Register[]>(this.apiUrlRegisterFijo);
  }



}
