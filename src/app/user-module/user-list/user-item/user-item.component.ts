import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'abx-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input()
  user: User;
  constructor(private router: Router) {}

  ngOnInit() {}

  editUser(user: User): void {
    this.router.navigate(['/edit-user', user.id]);
  }

  deleteUser(): void {

  }
}
