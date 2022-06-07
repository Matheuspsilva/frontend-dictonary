import { HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) {

  }

  login(usuario){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).token.split(' ')[1];

      localStorage.setItem("token", token);

      //console.info("Token: " + localStorage.getItem("token"));
    },
    error => {
      console.error("Erro ao fazer login");
      alert("Erro ao fazer login");
    }
    );
  }

}
