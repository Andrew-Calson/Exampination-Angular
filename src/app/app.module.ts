import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeTopPartComponent } from './home/home-top-part/home-top-part.component';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { HomePictureDescriptionComponent } from './home/home-main/home-picture-description/home-picture-description.component';
import { HomeDownloadComponent } from './home/home-download/home-download.component';
import { HomeTestimonialComponent } from './home/home-testimonial/home-testimonial.component';
import { HomeContactComponent } from './home/home-contact/home-contact.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeTopPartComponent,
    HomeMainComponent,
    HomePictureDescriptionComponent,
    HomeDownloadComponent,
    HomeTestimonialComponent,
    HomeContactComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
