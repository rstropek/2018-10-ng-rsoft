import { TestBed } from '@angular/core/testing';

import { TodoAccessLayerService } from './todo-access-layer.service';

describe('TodoAccessLayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoAccessLayerService = TestBed.get(TodoAccessLayerService);
    expect(service).toBeTruthy();
  });
});
