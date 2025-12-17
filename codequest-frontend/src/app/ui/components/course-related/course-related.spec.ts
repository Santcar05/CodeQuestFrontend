import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRelated } from './course-related';

describe('CourseRelated', () => {
  let component: CourseRelated;
  let fixture: ComponentFixture<CourseRelated>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRelated]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseRelated);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
