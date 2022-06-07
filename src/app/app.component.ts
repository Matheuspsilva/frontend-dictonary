import { Component } from '@angular/core';
import { LoginServiceService } from './service/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-dictonary';

  usuario = {
    login: '',
    password: ''
  };

  constructor(private loginService: LoginServiceService){

  }

  public login(){
    this.loginService.login(this.usuario);
  }
}
