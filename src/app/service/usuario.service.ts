import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getUsuarioList(): Observable<any>{
    return this.http.get<any>(AppConstants.baseUrl + "users");
  }

  deletarUsuario(id: Number): Observable<any>{
    return this.http.delete<any>(AppConstants.baseUrl + "user/" + id);
  }

}
