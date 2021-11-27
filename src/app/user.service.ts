import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

usuarioUrl = 'http://localhost:8080/api/v1/createUser'

//mudar a rota para a rota de POST do back de inserção de imovel
imovelPostUrl = 'http://localhost:8080/api/v1/createUser' 
  constructor(private http: HttpClient) { }

  postImovel(imovel : any ) : Observable<any>{
    return this.http.post<any>(this.imovelPostUrl, imovel);
  }

  listar() {
    return this.http.get<any[]>(`${this.usuarioUrl}`);
  }




}
