import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imoveis : any = [{
    wifi: false,
    tv: false,
    cozinha:false,
    cpf: "xxx.xxx.xxx-xx",
    descricao: "",
    preco: 0.0,
      rua: "Logradouro", 
      uf: "UF",  
  },
  {
    wifi: false,
    tv: false,
    cozinha:false,
    cpf: "xxx.xxx.xxx-xx",
    descricao: "",
    preco: 0.0,
      rua: "Logradouro", 
      uf: "UF",  
  } ]


  constructor(private service: UsuarioService ,private router : Router) { }

  ngOnInit(): void {

   // this.service.getImoveis().subscribe((imovel) =>(
     // this.imoveis = imovel));

  }
navForFormImovel(){
  this.router.navigate(['form/imovel']);
}

 

}
