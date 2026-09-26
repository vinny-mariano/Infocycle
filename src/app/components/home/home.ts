import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // 🏷️ Lista de promoções em destaque para o ecossistema Infocycle
  readonly promocoes = [
    { titulo: 'Notebook Lenovo ThinkPad i5', desconto: '20% OFF', preco: 'R$ 1.699,90', link: '/vitrine' },
    { titulo: 'Monitor Dell 24" Full HD IPS', desconto: '15% OFF', preco: 'R$ 499,90', link: '/vitrine' },
    { titulo: 'Kit SSD 240GB + Memória 8GB', desconto: 'Frete Grátis', preco: 'R$ 280,00', link: '/vitrine' }
  ];
}