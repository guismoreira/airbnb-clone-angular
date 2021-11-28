import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

usuarioPostUrl = 'http://localhost:8080/api/v1/createUser'

usuarioLoginUrl = 'https://airbnb-clone-spring.herokuapp.com/api/v1/loginUser'

//mudar a rota para a rota de POST do back de inserção de imovel
imovelPostUrl = 'http://localhost:8080/api/v1/createOffer'

////mudar a rota para a rota de GET do back para listar imoveis
imovelGetUrl = 'http://localhost:8080/api/v1/listAllOffer'


  constructor(private http: HttpClient, private snackBar : MatSnackBar ) { }

  showMessage(msg : string): void{
    this.snackBar.open(msg, "X",  {
      duration: 3000,
      horizontalPosition: "center",
      verticalPosition: "top"
  });
  }

  postImovel(imovel : any ) : Observable<any>{
    return this.http.post<any>(this.imovelPostUrl, imovel);
  }

  getImoveis(): Observable<any[]> {
    return this.http.get<any[]>(this.imovelGetUrl);
  }

  postLogin(usuario : any ) : Observable<any>{
    return this.http.post<any>(this.usuarioLoginUrl, usuario);
  }

  postCreate(usuario : any ) : Observable<any>{
    return this.http.post<any>(this.usuarioPostUrl, usuario);
  }

}
