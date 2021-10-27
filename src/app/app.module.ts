import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TasksComponent } from './components/tasks/tasks.component';
import { NavComponent } from './components/nav/nav.component';
import { BuscarTasksComponent } from './components/buscar-tasks/buscar-tasks.component';
import { ActualizarTasksComponent } from './components/actualizar-tasks/actualizar-tasks.component';
import { EliminarTasksComponent } from './components/eliminar-tasks/eliminar-tasks.component';
import { RegistrarTasksComponent } from './components/registrar-tasks/registrar-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NavComponent,
    BuscarTasksComponent,
    ActualizarTasksComponent,
    EliminarTasksComponent,
    RegistrarTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
