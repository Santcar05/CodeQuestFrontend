import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'app-recommended-challenge',
  imports: [FormsModule, Button],
  templateUrl: './recommended-challenge.html',
  styleUrl: './recommended-challenge.css',
})
export class RecommendedChallenge {
  @Input() tag = 'AI RECOMMENDED CHALLENGE';
  @Input() title = 'Algorithm Mastery: Binary Search Tree';
  @Input() description =
    'Based on your recent performance in "Linear Data Structures", this challenge will help you master tree traversal algorithms.';

  @Input() level = 'Intermediate';
  @Input() duration = '~45 mins';
  @Input() xp = 500;

  // Puede ser URL externa o asset local
  @Input() image = '/images/challenges/code-preview.png';
}
