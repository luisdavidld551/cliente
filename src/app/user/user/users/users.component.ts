import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(resp => {
      this.users = resp;
      console.log(resp);
    });
  }
  editTasks(req:any){
    console.log(req);
  }
 deleteTasks(id:number){
    console.log(id);
  }

}
