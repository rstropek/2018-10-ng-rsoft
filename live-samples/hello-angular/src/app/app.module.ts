import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingBasicsComponent } from './binding-basics/binding-basics.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgforMultipleElemsComponent } from './ngfor-multiple-elems/ngfor-multiple-elems.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingBasicsComponent,
    TodoListComponent,
    NgforMultipleElemsComponent,
    UserSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
