import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Profile } from '../models/profile';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public perfiles$ = new Subject<Profile[]>();
  public perfil$ = new Subject<Profile>();

  public perfiles: Profile[];
  public perfil: Profile;


  apiUrlPerfil = environment.url+'perfil';

  apiUrlAdmin = environment.url+'administrador';

  apiUrlTaqui = environment.url+'taquillero';

  apiUrlTuris = environment.url+'turista';

  constructor(private http: HttpClient) { }

  mostrarPerfil(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.apiUrlPerfil);
  }

  agregarPerfil(element: Profile): Observable<Profile>{
    return this.http.post<Profile>(this.apiUrlPerfil, element);
  }

  editarPerfil(id: number, element: Profile): Observable<Profile>{
    return this.http.put<Profile>(this.apiUrlPerfil+'/'+id, element);
  }

  eliminarPerfil(id: number): Observable<Profile>{
    return this.http.delete<Profile>(this.apiUrlPerfil+'/'+id);
  }

  //--------------------------------------------------------------------------------

  //Administrador
  mostrarAdmin(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.apiUrlAdmin);
  }

  agregarAdmin(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlAdmin, element);
  }

  editarAdmin(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlAdmin+'/'+id, element);
  }

  eliminarAdmin(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlAdmin+'/'+id);
  }

  //--------------------------------------------------------------------------------

  //Taquillero
  mostrarTaquillero(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.apiUrlTaqui);
  }

  agregarTaquillero(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlTaqui, element);
  }

  editarTaquillero(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlTaqui+'/'+id, element);
  }

  eliminarTaquillero(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlTaqui+'/'+id);
  }

  //--------------------------------------------------------------------------------

  //Turista
  mostrarTurista(): Observable<Profile[]>{
    return this.http.get<Profile[]>(this.apiUrlTuris);
  }

  agregarTurista(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlTuris, element);
  }

  editarTurista(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlTuris+'/'+id, element);
  }

  eliminarTurista(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlTuris+'/'+id);
  }

}
