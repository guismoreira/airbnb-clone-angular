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
    isWifi: false,
    isTV: false,
    isKitchen:false,
    cpf: "xxx.xxx.xxx-xx",
    description: "",
    available_dates: "",
    price: 0.0,
      street: "Logradouro",
      uf: "UF",
      city: "UF",
  }]


  constructor(private service: UsuarioService ,private router : Router) { }

  ngOnInit(): void {

   this.service.getImoveis().subscribe((imovel) =>(
     this.imoveis = imovel));
  }
navForFormImovel(){
  this.router.navigate(['form/imovel']);
}



}
