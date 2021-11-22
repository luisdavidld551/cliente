import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit,OnDestroy {

  taks: any = [];

  constructor(private taskService:TaskService) { }

  private subscriptionTask: Subscription | undefined;

  ngOnDestroy(): void {
    this.subscriptionTask?.unsubscribe();
  }

  ngOnInit(): void {
    this.taskService.getTask().subscribe(resp => {
      this.taks = resp;
      //console.log(this.taks);
    });
  }
  /*editTasks(req:any){
    console.log(req);
  }
 deleteTasks(id:number){
    console.log(id);
  }*/

}
