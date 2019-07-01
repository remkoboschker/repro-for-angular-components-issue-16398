import { async, TestBed } from '@angular/core/testing';
import { ConsumerModule } from './consumer.module';

describe('ConsumerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ConsumerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ConsumerModule).toBeDefined();
  });
});
