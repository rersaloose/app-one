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

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    HeroSectionComponent,
    ProjectsCardComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
