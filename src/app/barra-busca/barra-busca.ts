import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-busca.html',
  styleUrl: './barra-busca.css',
})
export class BarraBusca {
  termoBusca = signal('');

  salvarBusca(valor: string) {
    this.termoBusca.set(valor);
    localStorage.setItem('termoBusca', valor);
  }
}