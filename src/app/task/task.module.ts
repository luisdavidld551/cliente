import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TaskRoutingModule } from './task-routing.module';
import { BuscarTasksComponent } from './task/buscar-tasks/buscar-tasks.component';
import { RegistrarTasksComponent } from './task/registrar-tasks/registrar-tasks.component';
import { TasksComponent } from './task/tasks/tasks.component';
import { ListarTasksComponent } from './task/listar-tasks/listar-tasks.component';


@NgModule({
  declarations: [
    TasksComponent,
    BuscarTasksComponent,
    RegistrarTasksComponent,
    ListarTasksComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class TaskModule { }
