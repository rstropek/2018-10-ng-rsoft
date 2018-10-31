import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo-list/todo-item';
import { HttpClient } from '@angular/common/http';
import { TodoAccessLayerService } from '../todo-access-layer.service';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {

  public todoItem: TodoItem = {
    id: 0,
    description: 'Homework',
    assignedTo: 'Adam',
    done: false
  };

  constructor(private todoService: TodoAccessLayerService) { }

  ngOnInit() {
  }

  save() {
    this.todoService.addTodoItem(this.todoItem).subscribe();
  }
}
