import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { UsersService } from '../../../user/services/users.service';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-buscar-tasks',
  templateUrl: './buscar-tasks.component.html',
  styleUrls: ['./buscar-tasks.component.css']
})
export class BuscarTasksComponent implements OnInit {

  @ViewChild('contenidoAsignar') contenidoAsignar!: TemplateRef<any>;
  @ViewChild('contenidoEliminar') contenidoEliminar!: TemplateRef<any>;
  @ViewChild('contenidoActualizar') contenidoActualizar!: TemplateRef<any>;
  @ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert;

  typeAler: string = "warning";
  toggoleShowHide: string = "none";
  staticAlertClosed = true;
  successMessage = '';
  userMessage = '';
  id: number = 0;
  user_idAsignar: number = 0;
  taks: any = [];
  user: any = [];

  constructor(private usersService: UsersService,
    private config: NgbModalConfig,
    private modal: NgbModal,
    private actualizarFT: FormBuilder,
    private taskService: TaskService,
    private _snackBar: MatSnackBar) { }

  actualizarFTB = this.actualizarFT.group({
    id: [{ value: '', disabled: true }, Validators.required],
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    estado: [{ value: '', disabled: true }, Validators.required]
  });

  addUserId = this.actualizarFT.group({
    estado: ['', Validators.required],
    user_id: ['', Validators.required],
  });

  ngOnInit(): void { }

  getShow() {
    this.taskService.getTaskId(this.id).subscribe(
      res => {
        this.taks = res;
        this.toggoleShowHide = "block";
      },
      err => {
        this.typeAler = "warning";
        this.toggoleShowHide = "none";
        this.successMessage = 'No hay Task con el Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.')
    );
  }

  changeSuccessMessage() {
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }

  addTask() {
    this.typeAler = "success";
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenidoAsignar, { size: 'lg' });
  }

  getUser() {
    this.usersService.getUserId(this.user_idAsignar).subscribe(
      res => {
        this.user = res;
      },
      err => {
        this.userMessage = 'Usuario no existe';
      },
      () => console.log('HTTP request completed.')
    );
  }

  asignarTask() {

    if (this.user != []) {
      this.addUserId.setValue({estado: 'En ejecución', user_id: this.user.id});

      this.taskService.actualizar(this.taks.id, this.addUserId.value).subscribe(
        res => {
          console.log('HTTP response', res);
          this.getShow();
          this.successMessage = 'Usuario con el Id: ' + this.user_idAsignar + " fue agregado";
          this.changeSuccessMessage();
        },
        err => {
          this.typeAler = "warning";
          this.successMessage = 'No se pudo agregar el Usuario con el Id: ' + this.user_idAsignar;
          this.changeSuccessMessage();
        },
        () => console.log('HTTP request completed.'));

    } else {
      this.typeAler = "warning";
      this.successMessage = 'No se ha buscado ningun Usuario';
      this.changeSuccessMessage();
    }
    this.modalClose();
  }

  editTask() {
    this.typeAler = "success";

    this.actualizarFTB.setValue({
      id: this.taks.id,
      nombre: this.taks.nombre,
      descripcion: this.taks.descripcion,
      estado: this.taks.estado
    });

    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenidoActualizar, { size: 'lg' });
  }

  actualizarTask() {

    this.taskService.actualizar(this.taks.id, this.actualizarFTB.value).subscribe(
      res => {
        console.log('HTTP response', res);
        this.getShow();
        this.successMessage = 'Task con el Id: ' + this.id + " fue actualizado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler = "warning";
        this.successMessage = 'No se pudo actualizar el Task con el Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

    this.modalClose();
  }

  deleteTask() {
    this.typeAler = "success";
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenidoEliminar, { size: 'lg' });
  }

  eliminarTask() {
    this.taskService.eliminar(this.taks.id).subscribe(
      res => {
        this.successMessage = 'Task con el Id: ' + this.taks.id + " fue eliminado";
        this.changeSuccessMessage();
        this.toggoleShowHide = "none";
        this.taks = [];
      },
      err => {
        this.typeAler = "warning";
        this.successMessage = 'No se pudo eliminar el Task con el Id: ' + this.taks.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));
    this._snackBar.open("Probando snackbar en parzibyte.me");
    this.modalClose();
  }

  modalClose() {
    this.actualizarFTB.patchValue({
      id: '',
      nombre: '',
      descripcion: '',
      estado: ''
    });

    this.addUserId.patchValue({
      user_id: '',
      estado: ''
    });

    this.user = [];
    this.modal.dismissAll();
  }

}
