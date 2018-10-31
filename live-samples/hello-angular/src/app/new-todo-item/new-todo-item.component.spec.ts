import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTodoItemComponent } from './new-todo-item.component';

describe('NewTodoItemComponent', () => {
  let component: NewTodoItemComponent;
  let fixture: ComponentFixture<NewTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
