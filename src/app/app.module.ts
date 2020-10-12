import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './sections/banner/banner.component';
import { ContentComponent } from './sections/content/content.component';
import { FooterComponent } from './sections/footer/footer.component';
import { NavMenuComponent } from './sections/header/nav-menu/nav-menu.component';
import {HeaderComponent} from './sections/header/header.component';
import { RequestQuoteComponent } from './sections/banner/request-quote/request-quote.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SwitchReasonsComponent } from './sections/content/switch-reasons/switch-reasons.component';
import { WaterSuppliersComponent } from './sections/content/water-suppliers/water-suppliers.component';
import { OtherReasonsTabsComponent } from './sections/content/other-reasons-tabs/other-reasons-tabs.component';
import { AccordionListComponent} from './common/accordion-list/accordion-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
    NavMenuComponent,
    HeaderComponent,
    RequestQuoteComponent,
    SwitchReasonsComponent,
    WaterSuppliersComponent,
    OtherReasonsTabsComponent,
    AccordionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
