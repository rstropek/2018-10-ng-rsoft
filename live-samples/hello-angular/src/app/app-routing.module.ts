import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingBasicsComponent } from './binding-basics/binding-basics.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgforMultipleElemsComponent } from './ngfor-multiple-elems/ngfor-multiple-elems.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { ReactiveNewTodoItemComponent } from './reactive-new-todo-item/reactive-new-todo-item.component';

const routes: Routes = [
  { path: 'binding-basics', component: BindingBasicsComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'multiple-elems', component: NgforMultipleElemsComponent },
  { path: 'user-settings', component: UserSettingsComponent },
  { path: 'new-todo-item', component: NewTodoItemComponent },
  { path: 'reactive-new-todo-item', component: ReactiveNewTodoItemComponent },
  { path: '', pathMatch: 'full', redirectTo: 'new-todo-item' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
