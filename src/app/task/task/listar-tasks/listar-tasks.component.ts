import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Taks } from '../../models/taks';


@Component({
  selector: 'app-listar-tasks',
  templateUrl: './listar-tasks.component.html',
  styleUrls: ['./listar-tasks.component.css']
})
export class ListarTasksComponent implements OnInit {

  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;
  @ViewChild('contenidoFinalizar') contenidoFinalizar!: TemplateRef<any>;
  taks: any = [];
  typeAler: string = "warning";
  toggoleShowHide: string = "none";
  staticAlertClosed = true;
  successMessage = '';
  id_task: number = 0;

  constructor(private config: NgbModalConfig,
    private modal: NgbModal,
    private actualizarFT: FormBuilder,
    private taskService: TaskService) { }

  addUserId = this.actualizarFT.group({
    estado: ['', Validators.required]
  });

  ngOnInit(): void {
    this.getShow();
  }

  getShow() {
    this.taskService.getTaskUserId().subscribe(
      res => {
        this.taks = res;
        //console.log(this.taks);
      },
      err => {
        this.typeAler = "warning";
        //console.log(err);
        this.toggoleShowHide = "none";
        //this.taks = [];
        this.successMessage = 'Usted no tiene ningun Task asignado';
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.')
    );
  }

  changeSuccessMessage() {
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }

  finalizarTasks(id: number) {
    this.id_task = id;
    this.typeAler = "success";
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenidoFinalizar, { size: 'lg' });
  }

  finalizarTask() {
    this.addUserId.setValue({
      estado: 'Finalizado',
    });

    this.taskService.actualizar(this.id_task, this.addUserId.value).subscribe(
      res => {
        console.log('HTTP response', res);
        this.getShow();
        this.successMessage = 'Task con el Id: ' + this.id_task + " fue finalizado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler = "warning";
        this.successMessage = 'No se pudo finalizar el Tasks con el Id: ' + this.id_task;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

    this.addUserId.patchValue({
      estado: ''
    });


    this.modal.dismissAll();

  }

}
