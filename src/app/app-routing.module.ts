import { ControlComponent } from './Admin/controlPanal/control/control.component';
import { LoginComponent } from './Admin/login/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:HomePageComponent},
{  path:"login",component:LoginComponent},
{
  path:"control",component:ControlComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
