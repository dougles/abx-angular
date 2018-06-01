import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'abx-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];

  constructor(private service: UserService, private router: Router) {}

  ngOnInit() {
    this.service.getUsers().subscribe((result: User[]) => {
      this.users = result;
    });
  }

  addUser() {
    this.router.navigate(['/add']);
  }
}
