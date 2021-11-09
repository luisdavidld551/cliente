import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-eliminar-tasks',
  templateUrl: './eliminar-tasks.component.html',
  styleUrls: ['./eliminar-tasks.component.css']
})
export class EliminarTasksComponent implements OnInit {

  @ViewChild('contenido') contenido!: TemplateRef<any>;
  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;

  typeAler:string ="warning"; 
  staticAlertClosed = true;
  successMessage = '';
  id:number = 0;
  taks2: any = [];

  constructor(private config: NgbModalConfig, private modal:NgbModal, private taskService:TaskService) { }

  ngOnInit(): void {
  }

  eliminarB(){
    this.taskService.getTaskId(this.id).subscribe((resp:any) => {
    this.taks2 = resp;
    this.typeAler ="success";
    this.openSM();

  },err => {
    this.typeAler ="warning";
    this.successMessage ='No hay Task con este Id: ' + this.id;
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

  eliminarTask(){
    this.taskService.eliminar(this.taks2.id).subscribe(
      res => {
        console.log('HTTP response', res);
        this.successMessage ='Task con este Id: ' + this.id+ " fue eliminado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler ="warning";
        this.successMessage ='No se pudo eliminar el Task con este Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

      this.eliminarClose();
  }

  eliminarClose(){
    this.modal.dismissAll();
  }
  
  changeSuccessMessage() { 
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }
}
