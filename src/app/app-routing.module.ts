import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {DashboardElementsComponent} from './components/dashboard-elements/dashboard-elements.component';
import {CategoryManagementComponent} from './components/category-management/category-management.component';
import {ItemRequestFormComponent} from './components/item-request-form/item-request-form.component';
import {SupplierQuotationComponent} from './components/supplier-quotation/supplier-quotation.component';
import {PoManagementComponent} from './components/po-management/po-management.component';
import {SuppliersManagementComponent} from './components/suppliers-management/suppliers-management.component';
import {ItemSearchComponent} from './components/item-search/item-search.component';

const routes: Routes = [
  {path: '', component: DashboardElementsComponent},
  {path: 'category-management', component: CategoryManagementComponent},
  {path: 'item-request-form', component: ItemRequestFormComponent},
  {path: 'supplier-quotation', component: SupplierQuotationComponent},
  {path: 'po-management', component: PoManagementComponent},
  {path: 'suppliers-management', component: SuppliersManagementComponent},
  {path: 'item-search', component: ItemSearchComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
