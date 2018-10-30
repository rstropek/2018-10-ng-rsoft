import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingBasicsComponent } from './binding-basics.component';

describe('BindingBasicsComponent', () => {
  let component: BindingBasicsComponent;
  let fixture: ComponentFixture<BindingBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
