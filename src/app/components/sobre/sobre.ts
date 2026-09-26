import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  // 🌿 Atributos institucionais do Infocycle
  readonly missao = 'Prolongar a vida útil de componentes de TI, promovendo a sustentabilidade e democratizando o acesso à tecnologia de alta performance.';
  readonly visao = 'Ser referência em economia circular de hardware recertificado, unindo eficiência econômica e responsabilidade ambiental.';
  readonly valores = ['Sustentabilidadade', 'Transparência', 'Qualidade Garantida', 'Inovação Acessível'];
}