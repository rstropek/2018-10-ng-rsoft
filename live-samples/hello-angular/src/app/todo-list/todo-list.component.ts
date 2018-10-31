import {Component, OnInit} from '@angular/core';

import {TodoAccessLayerService} from '../todo-access-layer.service';
import { TodoItem } from './todo-item';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';
import { UserSettingsService } from '../user-settings.service';
import { Observable } from 'rxjs';
import { take} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList: Observable<TodoItem[]>;

  constructor(public todoDal: TodoAccessLayerService, public userSettings: UserSettingsService) {}

  async ngOnInit() {
    // this.todoDal.loadTodoList(result => this.todoList = result);

    this.refresh();
  }

  private refresh() {
    this.todoList = this.todoDal.loadTodoList();
  }

  async delete(todoId: number) {
    // this.todoDal.deleteTodoItem(todoId).subscribe(() => this.refresh());
    try {
      await this.todoDal.deleteTodoItem(todoId).pipe(take(1)).toPromise();
      this.refresh();
    } catch (ex) {
      console.error(ex);
    }
  }
}
