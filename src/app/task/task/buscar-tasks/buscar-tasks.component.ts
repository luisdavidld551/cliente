import { Component, OnInit,ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-buscar-tasks',
  templateUrl: './buscar-tasks.component.html',
  styleUrls: ['./buscar-tasks.component.css']
})
export class BuscarTasksComponent implements OnInit {

  @ViewChild('staticAlert', {static: false}) staticAlert!: NgbAlert;

  toggoleShowHide:string ="none"; 
  staticAlertClosed = true;
  successMessage = '';
  id:number = 0;
  taks3: any = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }

  getShow(){
    this.taskService.getTaskId(this.id).subscribe(
      res => {
        this.toggoleShowHide = "block";
        this.taks3 = res;
      },
      err => {
        console.log(err);
        this.toggoleShowHide = "none";
        this.taks3 = [];
        this.successMessage ='No hay Task con el Id: ' + this.id;
        this.changeSuccessMessage();
      },
      () => console.log('HTTP request completed.')
    );
  }

  changeSuccessMessage() { 
    this.staticAlertClosed = false;
    setTimeout(() => this.staticAlert.close(), 5000);
  }

}
