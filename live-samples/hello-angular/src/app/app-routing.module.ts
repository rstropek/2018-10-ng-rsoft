import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingBasicsComponent } from './binding-basics/binding-basics.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NgforMultipleElemsComponent } from './ngfor-multiple-elems/ngfor-multiple-elems.component';

const routes: Routes = [
  { path: 'binding-basics', component: BindingBasicsComponent },
  { path: 'todos', component: TodoListComponent },
  { path: 'multiple-elems', component: NgforMultipleElemsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'todos' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
