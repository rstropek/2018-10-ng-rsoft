import {Injectable} from '@angular/core';
import {TodoItem} from './todo-list/todo-item';

@Injectable({providedIn: 'root'})
export class TodoAccessLayerService {
  constructor() {}

  public loadTodoList(resultAvailableCallback: (result: TodoItem[]) => void):
      void {
    // Simulate web api
    setTimeout(() => {
      resultAvailableCallback(
          [{description: 'Homework', assignedTo: 'Alice', done: false}]);
    }, 10);
  }

  public loadTodoListPromise(): Promise<TodoItem[]> {
    return new Promise<TodoItem[]>((resolve, reject) => {
      // Simulate web api
      setTimeout(() => {
        resolve([{description: 'Homework', assignedTo: 'Alice', done: false}]);

        // if error: reject('something bad happened...');
      }, 10);
    });
  }
}
