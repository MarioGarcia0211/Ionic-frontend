import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TuristaService {

  apiUrlUserTuris = environment.url+'pruebaturis';

  constructor(private http: HttpClient) { }


  mostrarUsuarioTuris(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrlUserTuris);
  }

  agregarUsuarioTuris(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlUserTuris, element);
  }

  editarUsuarioTuris(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlUserTuris+'/'+id, element);
  }

  eliminarUsuarioTuris(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlUserTuris+'/'+id);
  }
}
