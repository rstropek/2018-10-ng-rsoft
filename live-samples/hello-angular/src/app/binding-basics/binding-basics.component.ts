import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-binding-basics',
  templateUrl: './binding-basics.component.html',
  styleUrls: ['./binding-basics.component.css']
})
export class BindingBasicsComponent implements OnInit {
  constructor() {
    // setInterval(() => this.title += '!', 1000);
  }

  public title = 'hello-angular';
  public firstName = 'James';
  public lastName = 'Bond';
  public todos = ['Shopping', 'Homework', 'Exercise'];
  public newTodoItem: string;

  ngOnInit() {}

  public is007() {
    return this.firstName === 'James' && this.lastName === 'Bond';
  }

  public getTitle() {
    const result = `${this.title}!!!`;
    return result;
  }

  public addSomethingToTitle() {
    this.title += '!';
  }

  public addTodo() {
    this.todos.push(this.newTodoItem);
  }

  public deleteItem(index: any) {
    this.todos.splice(index, 1);
  }
}
