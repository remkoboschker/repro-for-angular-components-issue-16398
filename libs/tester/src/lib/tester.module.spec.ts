import { async, TestBed } from '@angular/core/testing';
import { TesterModule } from './tester.module';

describe('TesterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TesterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(TesterModule).toBeDefined();
  });
});
