import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ImovelComponent } from './registro/imovel/imovel.component';
import { LoginComponent } from './registro/login/login.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  {
    path: "",
    component : HomeComponent

  },
  {
    path: "form/imovel",
    component : ImovelComponent

  },
  {
    path: "login",
    component : LoginComponent

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
