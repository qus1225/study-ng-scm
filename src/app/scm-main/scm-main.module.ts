import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashbaordComponent } from './main-dashbaord/main-dashbaord.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';

const CORE_COMPONENTS = [
  NavbarComponent,
  SidebarComponent,
  FooterComponent,
  MainDashbaordComponent,
  PageNotFoundComponent
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: CORE_COMPONENTS,
  exports: CORE_COMPONENTS
})
export class ScmMainModule { }
