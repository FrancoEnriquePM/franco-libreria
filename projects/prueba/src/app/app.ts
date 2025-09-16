import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FrancoLibreria } from 'franco-libreria';

@Component({
  selector: 'app-root',
  imports: [ FrancoLibreria],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('prueba');
}
