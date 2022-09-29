import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
