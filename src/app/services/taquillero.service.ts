import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TaquilleroService {

  apiUrlUserTaqui = environment.url+'pruebataqui';

  constructor(private http: HttpClient) { }


  mostrarUsuarioTaqui(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrlUserTaqui);
  }

  agregarUsuarioTaqui(element: User): Observable<User>{
    return this.http.post<User>(this.apiUrlUserTaqui, element);
  }

  editarUsuarioTaqui(id: number, element: User): Observable<User>{
    return this.http.put<User>(this.apiUrlUserTaqui+'/'+id, element);
  }

  eliminarUsuarioTaqui(id: number): Observable<User>{
    return this.http.delete<User>(this.apiUrlUserTaqui+'/'+id);
  }
}
