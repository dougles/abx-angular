import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'abx-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User = {
    id: 0,
    name: '',
    age: 0,
    city: '',
    email: ''
  };

  constructor(
    private service: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(p => {
      console.log(p.id);
      this.service.getUser(p.id).subscribe(result => {this.user = result; console.log(result);});
    });
  }

  editUser(user: User): void {
    this.service.editUser(user).subscribe(result => {
      console.log('Updated User');
      this.router.navigate(['/users']);
    });
  }
}
