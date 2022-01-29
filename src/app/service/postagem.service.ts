import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { PostagemModel } from '../model/PostagemModel';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllPostagens(): Observable<PostagemModel[]> {
    return this.http.get<PostagemModel[]>('http://localhost:8080/postagens', this.token)
  }

  getByIdPostagem(id: number): Observable<PostagemModel> {
    return this.http.get<PostagemModel>(`http://localhost:8080/postagens/${id}`, this.token)
  }

  postPostagem(postagem: PostagemModel): Observable<PostagemModel>{
    return this.http.post<PostagemModel>('http://localhost:8080/postagens/save', postagem, this.token)
  }

  putPostagem(postagem: PostagemModel): Observable<PostagemModel>{
    return this.http.put<PostagemModel>('http://localhost:8080/postagens/update', postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`http://localhost:8080/postagens/remove/${id}`, this.token)
  }
  
}
