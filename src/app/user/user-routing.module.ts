import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './user/users/users.component';
import { RegistrarUsersComponent } from './user/registrar-users/registrar-users.component';
import { BuscarUsersComponent } from './user/buscar-users/buscar-users.component';


const routes: Routes = [
  {
  path:'usuarios', component: UsersComponent},
  {
    path:'usuarios/Buscar',  component: BuscarUsersComponent},
  {
    path:'usuarios/Registrar',  component: RegistrarUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
