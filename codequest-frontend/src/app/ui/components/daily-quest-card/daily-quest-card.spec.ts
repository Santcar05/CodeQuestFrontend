import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyQuestCard } from './daily-quest-card';

describe('DailyQuestCard', () => {
  let component: DailyQuestCard;
  let fixture: ComponentFixture<DailyQuestCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyQuestCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyQuestCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
