import { ControlComponent } from './Admin/controlPanal/control/control.component';
import { LoginComponent } from './Admin/login/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './Admin/controlPanal/Components/users/users.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'control',
    component: ControlComponent,
    children:[
      {path:"user", component:UsersComponent}
    ]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
