import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLearning } from './course-learning';

describe('CourseLearning', () => {
  let component: CourseLearning;
  let fixture: ComponentFixture<CourseLearning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseLearning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseLearning);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
