import {Component, OnInit} from '@angular/core';

import {TodoAccessLayerService} from '../todo-access-layer.service';
import { TodoItem } from './todo-item';
import { getCanActivateChild } from '@angular/router/src/utils/preactivation';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList: Promise<TodoItem[]>;

  constructor(public todoDal: TodoAccessLayerService) {}

  async ngOnInit() {
    // this.todoDal.loadTodoList(result => this.todoList = result);

    this.todoList = this.todoDal.loadTodoListPromise();
  }
}