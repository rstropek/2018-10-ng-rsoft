import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveModelBrowserComponent } from './reactive-model-browser.component';

describe('ReactiveModelBrowserComponent', () => {
  let component: ReactiveModelBrowserComponent;
  let fixture: ComponentFixture<ReactiveModelBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveModelBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveModelBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
