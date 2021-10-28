import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarTasksComponent } from './components/actualizar-tasks/actualizar-tasks.component';
import { BuscarTasksComponent } from './components/buscar-tasks/buscar-tasks.component';
import { EliminarTasksComponent } from './components/eliminar-tasks/eliminar-tasks.component';
import { RegistrarTasksComponent } from './components/registrar-tasks/registrar-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [{
  path:'',
  component: TasksComponent
},
{
  path:'Buscar',
  component: BuscarTasksComponent
},
{
  path:'Actualizar',
  component: ActualizarTasksComponent
},
{
  path:'Registrar',
  component: RegistrarTasksComponent
},
{
  path:'Eliminar',
  component: EliminarTasksComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
