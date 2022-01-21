import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../model/user';
import { userloginDTO } from '../model/userloginDTO';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  entrar(userloginDTO: userloginDTO): Observable<userloginDTO> {
    return this.http.post<userloginDTO>('http://localhost:8080/usuarios/logar', userloginDTO)
  }

  cadastrar(user: user): Observable<user> {
    return this.http.post<user>('http://localhost:8080/usuarios/cadastrar', user)
  }
}
