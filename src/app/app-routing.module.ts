import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-module/user-list/user-list.component';
import { UserAddComponent } from './user-module/user-add/user-add.component';
import { UserEditComponent } from './user-module/user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'edit-user/:id',
    component: UserEditComponent
  },
  {
    path: 'add',
    component: UserAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
