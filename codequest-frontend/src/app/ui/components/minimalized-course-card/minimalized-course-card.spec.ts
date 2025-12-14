import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalizedCourseCard } from './minimalized-course-card';

describe('MinimalizedCourseCard', () => {
  let component: MinimalizedCourseCard;
  let fixture: ComponentFixture<MinimalizedCourseCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinimalizedCourseCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinimalizedCourseCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
