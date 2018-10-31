import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddingComponent} from './adding.component';
import { FormsModule } from '@angular/forms';

describe('Learning Jasmine', () => {
  describe('deep dive', () => {
    it('can add two numbers', () => {
      const p1 = 1;
      const p2 = 2;

      // execute
      const result = p1 + p2;

      // validate
      expect(result).toBe(3);
    });

    it('can multiplicate two number', () => {
      expect(2 * 2).not.toBeGreaterThan(9);
    });
  });
});

describe('AddingComponent', () => {
  let component: AddingComponent;
  let fixture: ComponentFixture<AddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddingComponent],
      imports: [FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill result with correct value', () => {
    component.parameter1 = 2;
    component.parameter2 = 2;
    component.calculate();
    expect(component.result).toBe(4);
  });

  it('should fill result with correct value with calculator strategy', () => {
    const mockCalculator: { add: jasmine.Spy } = jasmine.createSpyObj('AddCalculator', ['add']);
    mockCalculator.add.and.returnValue(4);

    component.parameter1 = 2;
    component.parameter2 = 2;
    component.calculate(mockCalculator);
    expect(component.result).toBe(4);
    expect(mockCalculator.add).toHaveBeenCalled();
  });
});
