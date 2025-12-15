import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-quest-card',
  imports: [CommonModule],
  templateUrl: './daily-quest-card.html',
  styleUrl: './daily-quest-card.css',
})
export class DailyQuestCard {
  quests = [
    {
      title: 'Quest 1',
      description: 'Description 1',
      completed: false,
    },
    {
      title: 'Quest 2',
      description: 'Description 2',
      completed: false,
    },
    {
      title: 'Quest 3',
      description: 'Description 3',
      completed: true,
    },
  ];
}
