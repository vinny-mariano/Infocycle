import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { CestaService } from '../../Services/Cesta/cesta.service';

@Component({
  selector: 'app-processadores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './processadores.html',
  styleUrl: './processadores.css',
})
export class Processadores {
  // Injeção do serviço global de estado
  private cestaService = inject(CestaService);

  // Catálogo de processadores recertificados
  listaProcessadores: Produto[] = [
    {
      codigo: 401,
      nome: 'Processador Intel Core i5 9ª Ger. Recertificado',
      descritivo: 'Testado, com pasta térmica renovada, alta eficiência para upgrades corporativos.',
      valor: 450.00,
      valorPromo: 389.90,
      quantidade: 14,
      destaque: 1,
      keywords: 'processador, intel, i5, recertificado'
    },
    {
      codigo: 402,
      nome: 'Processador AMD Ryzen 5 3600 Recertificado',
      descritivo: 'Excelente desempenho multitarefa, revisado e com garantia de funcionamento.',
      valor: 620.00,
      valorPromo: 549.90,
      quantidade: 9,
      destaque: 1,
      keywords: 'processador, amd, ryzen, 3600'
    }
  ];

  adicionarProduto(produto: Produto) {
    this.cestaService.adicionarItem({ produto, quantidade: 1 });
  }
}