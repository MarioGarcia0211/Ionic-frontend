import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  apiUrlUserAdmin = environment.url+'pruebaadmin';

  constructor(private http: HttpClient) { }


  mostrarUsuarioAdmin(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrlUserAdmin);
  }

  agregarUsuarioAdmin(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlUserAdmin, element);
  }

  editarUsuarioAdmin(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlUserAdmin+'/'+id, element);
  }

  eliminarUsuarioAdmin(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlUserAdmin+'/'+id);
  }
}
