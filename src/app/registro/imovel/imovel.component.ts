import { Component, OnInit , OnChanges} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/user.service';


@Component({
  templateUrl: './imovel.component.html',
  styleUrls: ['./imovel.component.scss']
})
export class ImovelComponent implements OnInit {
  imovel : any = {
    wifi: false,
    tv: true,
    cozinha:true,
    cpf: "xxx.xxx.xxx-xx",
    descricao: "",
    preco: 0.0,
      rua: "Logradouro", 
      uf: "UF",  
  } 

  constructor(private router : Router, private service : UsuarioService) { }

  OnChanges():void{

  }
  ngOnInit(): void {
  }

  postImovel(): void {
    this.service.postImovel(this.imovel).subscribe( () =>{   
      this.router.navigate([''])} )

  }

  navFromIndex(){
    this.router.navigate(['']);
  }

}
