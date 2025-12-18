import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningCoursePage } from './learning-course-page';

describe('LearningCoursePage', () => {
  let component: LearningCoursePage;
  let fixture: ComponentFixture<LearningCoursePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningCoursePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningCoursePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
