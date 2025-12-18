import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { LearningMethod } from '../../../domain/models/lesson/LearningMethod';

@Component({
  selector: 'app-learning-methodologies',
  templateUrl: './learning-methodologies.html',
  styleUrls: ['./learning-methodologies.css'],
  imports: [CommonModule],
})
export class LearningMethodologiesComponent {
  @Output() methodChange = new EventEmitter<LearningMethod>();

  methods = [
    { id: 'visual', label: 'Visual', icon: '👁️' },
    { id: 'auditivo', label: 'Auditivo', icon: '🎧' },
    { id: 'lectura', label: 'Lectura', icon: '📘' },
    { id: 'practica', label: 'Práctica', icon: '</>' },
    { id: 'ia', label: 'IA Guiada', icon: '✨', recommended: true },
  ];

  selectedMethod: LearningMethod = this.methods[0];

  selectMethod(method: LearningMethod) {
    this.selectedMethod = method;
    this.methodChange.emit(method);
  }
}
