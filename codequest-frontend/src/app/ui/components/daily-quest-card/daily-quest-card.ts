import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DailyQuests } from '../../../domain/models/ui/DailyQuest';

@Component({
  selector: 'app-daily-quest-card',
  imports: [CommonModule],
  templateUrl: './daily-quest-card.html',
  styleUrl: './daily-quest-card.css',
})
export class DailyQuestCard {
  @Input() quests: DailyQuests[] = [];
}
