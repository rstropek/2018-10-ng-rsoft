import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBrowserComponent } from './model-browser.component';

describe('ModelBrowserComponent', () => {
  let component: ModelBrowserComponent;
  let fixture: ComponentFixture<ModelBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
