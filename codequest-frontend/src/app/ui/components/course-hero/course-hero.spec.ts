import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHero } from './course-hero';

describe('CourseHero', () => {
  let component: CourseHero;
  let fixture: ComponentFixture<CourseHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
