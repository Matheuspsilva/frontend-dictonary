import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios: Observable<User[]>;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {

    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuarios = data;
    });
  }

  deletarUsuario(id: Number){
    this.usuarioService.deletarUsuario(id).subscribe(data => {
      console.log("Retorno do método delete: " + data)
      this.usuarioService.getUsuarioList().subscribe(data => {
        this.usuarios = data;
      });
    })
  }

}
