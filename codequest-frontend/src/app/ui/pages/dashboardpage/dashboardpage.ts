import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Button } from '../../shared/button/button';
import { RecommendedChallenge } from '../../components/recommended-challenge/recommended-challenge';

@Component({
  selector: 'app-dashboardpage',
  imports: [Button, RecommendedChallenge],
  templateUrl: './dashboardpage.html',
  styleUrl: './dashboardpage.css',
})
export class Dashboardpage {
  level = 5;
  streak = 14;

  currentXP = 1250;
  maxXP = 2000;

  get xpPercent(): number {
    return (this.currentXP / this.maxXP) * 100;
  }
}
