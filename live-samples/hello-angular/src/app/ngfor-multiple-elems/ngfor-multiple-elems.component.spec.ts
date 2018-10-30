import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforMultipleElemsComponent } from './ngfor-multiple-elems.component';

describe('NgforMultipleElemsComponent', () => {
  let component: NgforMultipleElemsComponent;
  let fixture: ComponentFixture<NgforMultipleElemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforMultipleElemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforMultipleElemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
