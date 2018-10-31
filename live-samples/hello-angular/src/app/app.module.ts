import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingBasicsComponent } from './binding-basics/binding-basics.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgforMultipleElemsComponent } from './ngfor-multiple-elems/ngfor-multiple-elems.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { ReactiveNewTodoItemComponent } from './reactive-new-todo-item/reactive-new-todo-item.component';
import { AddingComponent } from './adding/adding.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingBasicsComponent,
    TodoListComponent,
    NgforMultipleElemsComponent,
    UserSettingsComponent,
    NewTodoItemComponent,
    ReactiveNewTodoItemComponent,
    AddingComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
