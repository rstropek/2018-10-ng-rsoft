import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-reactive-new-todo-item',
  templateUrl: './reactive-new-todo-item.component.html',
  styleUrls: ['./reactive-new-todo-item.component.css']
})
export class ReactiveNewTodoItemComponent implements OnInit {
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: ['Homework', [Validators.required, Validators.minLength(5)]],
      assignedTo: ['Adam', [Validators.required]],
      done: [false]
    });

    this.form.controls.description.valueChanges
      .pipe(debounceTime(500))
      .subscribe(x => console.log(x));

  }

  save() {
    console.dir(this.form.value);
  }

}
