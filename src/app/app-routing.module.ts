import { NgModule } from '@angular/core';
import { ProductManagementComponent } from './product/product-management/product-management.component';
import { CategoryManagementComponent } from './category/category-management/category-management.component';
import { MainDashbaordComponent } from './scm-main/main-dashbaord/main-dashbaord.component';
import { PageNotFoundComponent } from './scm-main/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'product-list', component: ProductManagementComponent },
  { path: 'category-list', component: CategoryManagementComponent },
  { path: 'total-summary', component: MainDashbaordComponent },
  { path: '', redirectTo: 'total-summary', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
