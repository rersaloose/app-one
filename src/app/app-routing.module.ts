import { ArticlesComponent } from './home/home-page/components/Articles/Articles.component';
import { BlogComponent } from './Admin/controlPanal/Components/blog/blog.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Admin/controlPanal/Components/product/product.component';
import { ControlComponent } from './Admin/controlPanal/control/control.component';
import { LoginComponent } from './Admin/login/login/login.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { UsersComponent } from './Admin/controlPanal/Components/users/users.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'control',
    component: ControlComponent,
    children: [
      { path: "user", component: UsersComponent },
      { path: "products", component: ProductComponent },
      { path: "blog", component: BlogComponent }

    ]


  },
  { path: "Articles", component: ArticlesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
