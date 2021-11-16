import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgbAlert, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-buscar-users',
  templateUrl: './buscar-users.component.html',
  styleUrls: ['./buscar-users.component.css']
})
export class BuscarUsersComponent implements OnInit {

  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;
  @ViewChild('contenidoEliminar') contenidoEliminar!: TemplateRef<any>;
  @ViewChild('contenidoActualizar') contenidoActualizar!: TemplateRef<any>;

  toggoleShowHide:string ="none";
  typeAler:string ="warning";
  staticAlertClosed = true;
  successMessage = '';
  id:number = 0;
  user: any = [];

  constructor(private usersService:UsersService,private config: NgbModalConfig, private modal:NgbModal, private actualizarFT:FormBuilder) {  }

  actualizarFTB = this.actualizarFT.group({
    id: [{value: '', disabled: true}, Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    //password: ['', Validators.required],
    estado: ['', Validators.required],
    rol_id: ['', Validators.required]
  });
  
  ngOnInit(): void {
  }

  getShow(){
    this.usersService.getUserId(this.id).subscribe(
      res => {
        this.toggoleShowHide = "block";
        this.user = res;
      },
      err => {
        this.typeAler ="warning";
        //console.log(err);
        this.toggoleShowHide = "none";
        this.user = [];
        this.successMessage ='No hay Usuario con el Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.')
    );
  }

  changeSuccessMessage() { 
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }
  editUser(){
    this.typeAler ="success";

    this.actualizarFTB.setValue({
      id:this.user.id,
      name: this.user.name,
      email: this.user.email,
      estado: this.user.estado,
      rol_id: this.user.rol_id
    });

    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenidoActualizar,{size:'lg'});  
  }

  actualizarTask(){

    this.usersService.actualizarUser(this.user.id,this.actualizarFTB.value ).subscribe(
      res => {
        console.log('HTTP response', res);
        this.getShow();
        this.successMessage ='Usuario con el Id: ' + this.id+ " fue actualizado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler ="warning";
        this.successMessage ='No se pudo actualizar el Usuario con el Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

      this.modalClose();
  }

  deleteUser(){
    this.typeAler ="success";
    this.config.backdrop = 'static';
    this.config.keyboard = false;
    this.modal.open(this.contenidoEliminar,{size:'lg'});
  }

  eliminarUser(){
    this.usersService.eliminarUser(this.user.id).subscribe(
      res => {
        //console.log('HTTP response', res);
        this.successMessage ='Usuario con el Id: ' + this.user.id+ " fue eliminado";
        this.changeSuccessMessage();
        this.toggoleShowHide = "none";
        this.user = [];
      },
      err => {
        this.typeAler ="warning";
        this.successMessage ='No se pudo eliminar el Usuario con el Id: ' + this.user.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

      this.modalClose();
  }

  modalClose(){
    this.actualizarFTB.patchValue({
      id: '',
      name: '',
      email: '',
      estado: '',
      rol_id: ''
    });
    this.modal.dismissAll();
  }
}
