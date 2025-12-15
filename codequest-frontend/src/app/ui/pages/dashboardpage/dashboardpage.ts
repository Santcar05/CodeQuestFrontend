import { Component } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { Header } from '../../components/header/header';
import { Button } from '../../shared/button/button';
import { RecommendedChallenge } from '../../components/recommended-challenge/recommended-challenge';
import { MinimalizedCourseCard } from '../../components/minimalized-course-card/minimalized-course-card';
import { ProgressBar } from '../../shared/progress-bar/progress-bar';
import { CommonModule } from '@angular/common';
import { DailyQuestCard } from '../../components/daily-quest-card/daily-quest-card';

@Component({
  selector: 'app-dashboardpage',
  imports: [RecommendedChallenge, MinimalizedCourseCard, ProgressBar, CommonModule, DailyQuestCard],
  templateUrl: './dashboardpage.html',
  styleUrl: './dashboardpage.css',
})
export class Dashboardpage {
  // Pagination
  page = 1;
  pageSize = 4;

  level = 5;
  streak = 14;

  currentXP = 1250;
  maxXP = 2000;

  courses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  get xpPercent(): number {
    return (this.currentXP / this.maxXP) * 100;
  }

  /*
  Pagination methods
   */
  get totalPages(): number {
    return Math.ceil(this.courses.length / this.pageSize);
  }

  get paginatedCourses() {
    const start = (this.page - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.courses.slice(start, end);
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }
}
