import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedChallenge } from './recommended-challenge';

describe('RecommendedChallenge', () => {
  let component: RecommendedChallenge;
  let fixture: ComponentFixture<RecommendedChallenge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedChallenge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedChallenge);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
