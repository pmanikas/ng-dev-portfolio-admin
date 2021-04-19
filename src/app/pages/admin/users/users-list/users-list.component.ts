import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from './../../../../models/user.model';
import { AlertService } from "./../../../../services/alert.service";

@Component({
  selector: 'app-users',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  public users: User[] = [];

  constructor(
    private usersService: UsersService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  private getAll():void {
    this.usersService.getAll()
      .subscribe(users => {
        this.users = users;
      })
  }

  public deleteHandler(user: User):void {
    if(!confirm(`Are you sure you want to remove user ${user.username}?`)) return;
    this.usersService.remove(user._id)
      .subscribe((_res: any) => {
        this.deleteLocally(user._id);
        this.alertService.success(`User ${user.username} has been successfully removed`);
      })
  }

  private deleteLocally(id: any): void {
    const users = this.users.filter(user => user._id !== id);
    this.users = users;
  }

}
