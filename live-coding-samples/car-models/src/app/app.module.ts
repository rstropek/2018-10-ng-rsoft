import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatTableModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {ModelBrowserComponent} from './model-browser/model-browser.component';
import {ReactiveCustomerFormComponent} from './reactive-customer-form/reactive-customer-form.component';
import {ReactiveModelBrowserComponent} from './reactive-model-browser/reactive-model-browser.component';

@NgModule({
  declarations: [
    AppComponent, ModelBrowserComponent, ReactiveModelBrowserComponent,
    CustomerFormComponent, ReactiveCustomerFormComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule,
    ReactiveFormsModule, BrowserAnimationsModule, MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
