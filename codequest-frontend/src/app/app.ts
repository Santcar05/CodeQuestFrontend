import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './ui/components/header/header';
import { Sidebar } from './ui/components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('codequest-frontend');
}
