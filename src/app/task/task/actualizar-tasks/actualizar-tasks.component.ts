import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-tasks',
  templateUrl: './actualizar-tasks.component.html',
  styleUrls: ['./actualizar-tasks.component.css']
})
export class ActualizarTasksComponent implements OnInit {

  @ViewChild('contenido') contenido!: TemplateRef<any>;
  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;

  typeAler:string ="warning"; 
  staticAlertClosed = true;
  successMessage = '';
  id:number = 0;
  taks2: any = [];

  constructor(private config: NgbModalConfig, private modal:NgbModal, private taskService:TaskService, private actualizarFT:FormBuilder) { }

  actualizarFTB = this.actualizarFT.group({
    id: [{value: '', disabled: true}, Validators.required],
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  actualizarB(){
    this.taskService.getTaskId(this.id).subscribe((resp:any) => {
      this.taks2 = resp;
      this.actualizarFTB.setValue({
        id:this.taks2.id,
        nombre: this.taks2.nombre,
        descripcion: this.taks2.descripcion,
        estado: this.taks2.estado
      });
      this.typeAler ="success";
      this.openSM();      
    },err => {
      this.typeAler ="warning";
      this.successMessage ='No hay Task con el Id: ' + this.id;
      this.changeSuccessMessage();
    },
    () => console.log('HTTP request completed.')
    );
  }

  openSM(){
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenido,{size:'lg'});
  }

  actualizarClose(){
    this.actualizarFTB.patchValue({
      id: '',
      nombre: '',
      descripcion: '',
      estado: ''
    });
    this.modal.dismissAll();
  }

  actualizarTask(){
    this.taskService.actualizar(this.taks2.id,this.actualizarFTB.value ).subscribe(
      res => {
        console.log('HTTP response', res);
        this.successMessage ='Task con el Id: ' + this.id+ " fue actualizado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler ="warning";
        this.successMessage ='No se pudo actualizar el Task con el Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

      this.actualizarClose();
  }

  changeSuccessMessage() { 
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }

}
