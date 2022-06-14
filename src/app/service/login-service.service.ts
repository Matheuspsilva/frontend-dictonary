import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) {

  }

  login(usuario){
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      //Retorno http
      var token = JSON.parse(JSON.stringify(data)).token.split(' ')[1];

      localStorage.setItem("token", token);

      console.info("Token: " + localStorage.getItem("token"));

      this.router.navigate(['palavras']);
    },
    error => {
      console.error(error);
      alert("Erro ao fazer login");
    }
    );
  }

}
