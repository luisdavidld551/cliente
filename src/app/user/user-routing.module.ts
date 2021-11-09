import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './user/users/users.component';
import { RegistrarUsersComponent } from './user/registrar-users/registrar-users.component';
import { EliminarUsersComponent } from './user/eliminar-users/eliminar-users.component';
import { ActualizarUsersComponent } from './user/actualizar-users/actualizar-users.component';
import { BuscarUsersComponent } from './user/buscar-users/buscar-users.component';


const routes: Routes = [
  {
  path:'usuarios', component: UsersComponent},
  {
    path:'usuarios/Buscar',  component: BuscarUsersComponent},
  {
    path:'usuarios/Actualizar',  component: ActualizarUsersComponent},
  {
    path:'usuarios/Registrar',  component: RegistrarUsersComponent},
  {
    path:'usuarios/Eliminar',  component: EliminarUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
