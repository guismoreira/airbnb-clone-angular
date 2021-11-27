import { Component, OnInit , OnChanges} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/user.service';


@Component({
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.scss']
})
export class ImovelComponent implements OnInit {
  imovel : any = {
    wifi: false,
    tv: false,
    cozinha:false,
    cpf: "xxx.xxx.xxx-xx",
    descricao: "",
    preco: 0.0,
      rua: "Logradouro", 
      uf: "UF",  
  } 

  constructor(private router : Router, private service : UsuarioService, 
    private snackBar: MatSnackBar) { }

  OnChanges():void{

  }
  ngOnInit(): void {
  }

  postImovel(): void {
    this.service.postImovel(this.imovel).subscribe( () =>{ 
      this.service.showMessage("Cadastro Realizado Com Sucesso")  
      this.router.navigate([''])} )

  }

  navFromIndex(){ //apenas rota de teste será deletada
    this.service.showMessage("Operação Cancelada!")
    this.router.navigate(['']);
  }

}
