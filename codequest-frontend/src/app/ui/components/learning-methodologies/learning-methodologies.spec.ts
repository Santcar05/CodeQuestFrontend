import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningMethodologies } from './learning-methodologies';

describe('LearningMethodologies', () => {
  let component: LearningMethodologies;
  let fixture: ComponentFixture<LearningMethodologies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningMethodologies]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningMethodologies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
