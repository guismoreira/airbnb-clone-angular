import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login : any = {
    email : 'email',
    password : 'password'
  }

  create : any = {
    email : 'email',
    password : 'password',
    name : 'name',
    cpf : 'cpf',
    phone : 'phone'
  }


  constructor(private router : Router, private service : UsuarioService,
    private snackBar: MatSnackBar) { }

  OnChanges():void{

  }
  ngOnInit(): void {
  }

  postLogin(): void {
    this.service.postLogin(this.login).subscribe( () =>{
      this.service.showMessage("Login Realizado Com Sucesso")
      this.router.navigate([''])} )

  }

  postCreate(): void {
    this.service.postCreate(this.create).subscribe( () =>{
      this.service.showMessage("Cadastro de Usuario Realizado Com Sucesso")
      this.router.navigate([''])} )

  }

  navFromIndex(){ //apenas rota de teste será deletada
    this.service.showMessage("Operação Cancelada!")
    this.router.navigate(['']);
  }

}
