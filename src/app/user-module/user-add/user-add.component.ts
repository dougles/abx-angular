import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'abx-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    age: 0,
    city: '',
    email: ''
  };
  constructor(private service: UserService, private router: Router) {}
  ngOnInit() {}

  addUser(user: User): void {
    this.service.addUser(user).subscribe(result => {
      this.router.navigate(['/users']);
    });
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
