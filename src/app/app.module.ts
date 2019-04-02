import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardElementsComponent } from './components/dashboard-elements/dashboard-elements.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SideMenuComponent } from './components/layout/side-menu/side-menu.component';
import { CategoryManagementComponent } from './components/category-management/category-management.component';
import { ItemRequestFormComponent } from './components/item-request-form/item-request-form.component';
import { SupplierQuotationComponent } from './components/supplier-quotation/supplier-quotation.component';
import { PoManagementComponent } from './components/po-management/po-management.component';
import { SuppliersManagementComponent } from './components/suppliers-management/suppliers-management.component';
import { ItemSearchComponent } from './components/item-search/item-search.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardElementsComponent,
    HeaderComponent,
    SideMenuComponent,
    CategoryManagementComponent,
    ItemRequestFormComponent,
    SupplierQuotationComponent,
    PoManagementComponent,
    SuppliersManagementComponent,
    ItemSearchComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule

  ],
  exports: [],
  providers: [
    Title
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
