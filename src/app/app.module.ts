import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';
import { CategoryModule} from './category/category.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    // Angular Modules
    BrowserModule, FormsModule,
    // App Modules
    ProductModule, CategoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
