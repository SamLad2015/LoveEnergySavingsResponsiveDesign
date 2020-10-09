import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './sections/banner/banner.component';
import { ContentComponent } from './sections/content/content.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NavMenuComponent } from './sections/header/nav-menu/nav-menu.component';
import {HeaderComponent} from './sections/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    NavMenuComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
