import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {

  users: any = [];

  constructor(private userService:UsersService) { }

  private subscriptionUser: Subscription | undefined;

  ngOnDestroy(): void {
    this.subscriptionUser?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptionUser = this.userService.getUser().subscribe(resp => {
      this.users = resp;
      //console.log(resp);
    });
  }
  /*editTasks(req:any){
    console.log(req);
  }
 deleteTasks(id:number){
    console.log(id);
  }*/

}
