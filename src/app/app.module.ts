import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { CategoryModule } from './category/category.module'
import { BuyServiceService } from './services/buy-service.service'


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CategoryModule
  ],
  providers: [BuyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
