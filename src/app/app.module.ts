import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './Admin/controlPanal/Components/blog/blog.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HeaderComponent } from './home/home-page/components/header/header.component';
import { HeroSectionComponent } from './home/home-page/components/hero-section/hero-section.component';
import { ProjectsCardComponent } from './home/home-page/components/projects-card/projects-card.component';
import { AboutComponent } from './home/home-page/components/about/about.component';
import { FooterComponent } from './home/home-page/components/footer/footer.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { LoginComponent } from './Admin/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlComponent } from './Admin/controlPanal/control/control.component';
import { HeaderTwoComponent } from './Admin/controlPanal/shared/header-two/header-two.component';
import { FooterTwoComponent } from './Admin/controlPanal/shared/footer-two/footer-two.component';
import { SidbarTwoComponent } from './Admin/controlPanal/shared/sidbar-two/sidbar-two.component';
import { SlidSectionComponent } from './home/home-page/components/slider-section/slider-section.component';
import { UsersComponent } from './Admin/controlPanal/Components/users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './Admin/controlPanal/Components/product/product.component';
import { ArticleComponent } from './home/home-page/components/article/article.component';
import { ProductDetailsComponent } from './Admin/controlPanal/Components/product-details/product-details.component';


@NgModule({
  declarations: [

    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HeroSectionComponent,
    ProjectsCardComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    ControlComponent,
    HeaderTwoComponent,
    FooterTwoComponent,
    SidbarTwoComponent,
    SlidSectionComponent,
    UsersComponent,
    ProductComponent,
    BlogComponent,
    ArticleComponent,
    ProductDetailsComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
     NgImageSliderModule,
     ReactiveFormsModule,
     CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
