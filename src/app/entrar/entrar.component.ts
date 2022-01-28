import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userloginDTO: UserLoginDTO = new UserLoginDTO()

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar() {
    this.auth.entrar(this.userloginDTO).subscribe((resp:UserLoginDTO) => {
      this.userloginDTO = resp

      environment.token = this.userloginDTO.token
      environment.nome = this.userloginDTO.nome
      environment.foto = this.userloginDTO.foto
      environment.id = this.userloginDTO.id

      this.router.navigate(['/inicio'])
    }, erro => {
      if(erro.status == 400){
        alert("Usuário ou senha incorretos")
      }
    })
  }

}
