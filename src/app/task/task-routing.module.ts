import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarTasksComponent } from './task/buscar-tasks/buscar-tasks.component';
import { RegistrarTasksComponent } from './task/registrar-tasks/registrar-tasks.component';
import { ListarTasksComponent } from './task/listar-tasks/listar-tasks.component';
import { TasksComponent } from './task/tasks/tasks.component';

const routes: Routes = [
{
  path:'tasks', component: TasksComponent},
{
  path:'tasks/Buscar',  component: BuscarTasksComponent},
{
  path:'tasks/Registrar',  component: RegistrarTasksComponent},
  {
    path:'tasks/Listar',  component: ListarTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
