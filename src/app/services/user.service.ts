import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrlUser = environment.url+'usuario';

  constructor(private http: HttpClient) { }

  mostrarUsuario(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrlUser);
  }

  agregarUsuario(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlUser, element);
  }

  editarUsuario(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlUser+'/'+id, element);
  }

  eliminarUsuario(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlUser+'/'+id);
  }
}
