import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelBrowserComponent } from './model-browser/model-browser.component';
import { ReactiveModelBrowserComponent } from './reactive-model-browser/reactive-model-browser.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ReactiveCustomerFormComponent } from './reactive-customer-form/reactive-customer-form.component';

const routes: Routes = [
  { path: 'models', component: ModelBrowserComponent },
  { path: 'reactive-models', component: ReactiveModelBrowserComponent },
  { path: 'customer', component: CustomerFormComponent },
  { path: 'reactive-customer', component: ReactiveCustomerFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'reactive-customer' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
