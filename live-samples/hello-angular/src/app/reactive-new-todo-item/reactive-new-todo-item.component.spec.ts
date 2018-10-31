import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveNewTodoItemComponent } from './reactive-new-todo-item.component';

describe('ReactiveNewTodoItemComponent', () => {
  let component: ReactiveNewTodoItemComponent;
  let fixture: ComponentFixture<ReactiveNewTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveNewTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveNewTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
