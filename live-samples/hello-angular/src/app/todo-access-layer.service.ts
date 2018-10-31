import {Injectable} from '@angular/core';
import {TodoItem} from './todo-list/todo-item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class TodoAccessLayerService {
  constructor(private httpClient: HttpClient) {}

  public loadTodoList(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>('http://localhost:8080/api/todos');
  }

  public deleteTodoItem(todoItemId: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:8080/api/todos/${todoItemId}`);
  }

  public addTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>('http://localhost:8080/api/todos', todoItem);
  }

  public loadTodoListPromise(): Promise<TodoItem[]> {
    return new Promise<TodoItem[]>((resolve, reject) => {
      // Simulate web api
      setTimeout(() => {
        resolve([{id: 1, description: 'Homework', assignedTo: 'Alice', done: false}]);

        // if error: reject('something bad happened...');
      }, 10);
    });
  }
}
