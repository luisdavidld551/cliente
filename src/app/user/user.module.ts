import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './user/users/users.component';
import { RegistrarUsersComponent } from './user/registrar-users/registrar-users.component';
import { BuscarUsersComponent } from './user/buscar-users/buscar-users.component';


@NgModule({
  declarations: [
    UsersComponent,
    RegistrarUsersComponent,
    BuscarUsersComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class UserModule { }
