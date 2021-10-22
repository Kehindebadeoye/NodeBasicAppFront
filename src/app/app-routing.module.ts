import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { ViewUserComponent } from './component/view-user/view-user.component';

const routes: Routes = [
  {path: 'view' , component:ViewUserComponent},
  {path: 'create' , component:CreateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
