import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarTasksComponent } from './task/actualizar-tasks/actualizar-tasks.component';
import { BuscarTasksComponent } from './task/buscar-tasks/buscar-tasks.component';
import { EliminarTasksComponent } from './task/eliminar-tasks/eliminar-tasks.component';
import { RegistrarTasksComponent } from './task/registrar-tasks/registrar-tasks.component';
import { TasksComponent } from './task/tasks/tasks.component';

const routes: Routes = [
{
  path:'tasks', component: TasksComponent},
{
  path:'tasks/Buscar',  component: BuscarTasksComponent},
{
  path:'tasks/Actualizar',  component: ActualizarTasksComponent},
{
  path:'tasks/Registrar',  component: RegistrarTasksComponent},
{
  path:'tasks/Eliminar',  component: EliminarTasksComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
