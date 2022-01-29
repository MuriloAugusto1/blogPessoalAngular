import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLoginDTO } from '../model/UserLoginDTO';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  entrar(userloginDTO: UserLoginDTO): Observable<UserLoginDTO> {
    return this.http.post<UserLoginDTO>('http://localhost:8080/usuarios/logar', userloginDTO)
  }

  cadastrar(user: UsuarioModel): Observable<UsuarioModel> {
    return this.http.post<UsuarioModel>('http://localhost:8080/usuarios/cadastrar', user)
  }

  getByIdUser(id: number): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel> (`http://localhost:8080/usuarios/id/${id}`)
  }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }
}
