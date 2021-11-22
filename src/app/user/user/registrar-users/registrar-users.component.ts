import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbAlert} from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../services/users.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-users',
  templateUrl: './registrar-users.component.html',
  styleUrls: ['./registrar-users.component.css']
})
export class RegistrarUsersComponent implements OnInit {


  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;

  typeAler:string ="success"; 
  staticAlertClosed = true;
  successMessage = '';
  //id:number = 0;
  valorId:any =[];

  constructor(private usersService:UsersService, private registrarFT:FormBuilder) { }

  registrarFTB = this.registrarFT.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    estado: ['', Validators.required],
    role_id: ['', Validators.required]
  });

  ngOnInit(): void {
  }

  addUser(){
    this.usersService.registrarUser(this.registrarFTB.value ).subscribe(
      res => {
        this.valorId = res;
        //console.log('HTTP response', res);
        this.successMessage ='Usuario con el Id: ' + this.valorId.user.id + " fue registrado";
        this.changeSuccessMessage();
      },
      err => {
        this.typeAler ="warning";
        this.successMessage ='No se pudo registrado el Usuario';
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.'));

      this.registrarClose();
  }

  registrarClose(){
    this.registrarFTB.setValue({
      name: '',
      email: '',
      password: '',
      estado: '',
      role_id: ''
    });
  }

  changeSuccessMessage() { 
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }

}
