import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  taks: any = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(resp => {
      this.taks = resp;
    });
  }
  editTasks(req:any){
    console.log(req);
  }
 deleteTasks(id:number){
    console.log(id);
  }

}
