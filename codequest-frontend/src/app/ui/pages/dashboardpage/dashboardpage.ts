import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Button } from '../../shared/button/button';
import { RecommendedChallenge } from '../../components/recommended-challenge/recommended-challenge';
import { MinimalizedCourseCard } from '../../components/minimalized-course-card/minimalized-course-card';
import { ProgressBar } from '../../shared/progress-bar/progress-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboardpage',
  imports: [RecommendedChallenge, MinimalizedCourseCard, ProgressBar, CommonModule],
  templateUrl: './dashboardpage.html',
  styleUrl: './dashboardpage.css',
})
export class Dashboardpage {
  level = 5;
  streak = 14;

  currentXP = 1250;
  maxXP = 2000;

  courses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  get xpPercent(): number {
    return (this.currentXP / this.maxXP) * 100;
  }
}
