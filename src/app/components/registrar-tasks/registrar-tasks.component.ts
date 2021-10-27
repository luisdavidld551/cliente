import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-tasks',
  templateUrl: './registrar-tasks.component.html',
  styleUrls: ['./registrar-tasks.component.css']
})
export class RegistrarTasksComponent implements OnInit {

  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;

  typeAler:string ="success"; 
  staticAlertClosed = true;
  successMessage = '';
  id:number = 0;

  constructor(private taskService:TaskService, private registrarFT:FormBuilder) { }

  registrarFTB = this.registrarFT.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  registrarTask(){
    this.taskService.registrar(this.registrarFTB.value ).subscribe(
      res => {
        console.log('HTTP response', res);
        this.successMessage ='Task con el Id: ' + res.id + " fue registrado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler ="warning";
        this.successMessage ='No se pudo registrado el Task';
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

      this.registrarClose();
  }

  registrarClose(){
    this.registrarFTB.setValue({
      nombre: '',
      descripcion: '',
      estado: ''
    });
  }

  changeSuccessMessage() { 
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }

}
