import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRequirements } from './course-requirements';

describe('CourseRequirements', () => {
  let component: CourseRequirements;
  let fixture: ComponentFixture<CourseRequirements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseRequirements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseRequirements);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
