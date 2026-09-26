import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Produto } from '../../model/produto';
import { CestaService } from '../../Services/Cesta/cesta.service';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  private cestaService = inject(CestaService);
  private router = inject(Router);

  lista: Produto[] = [
    {
      codigo: 1,
      nome: 'Monitor Dell 24" Recertificado Full HD',
      descritivo: 'Monitor corporativo revisado com garantia, painel IPS e ajuste de altura.',
      valor: 599.90,
      valorPromo: 499.90,
      quantidade: 15,
      destaque: 1,
      keywords: 'monitor, dell, ips, recertificado, escritório'
    },
    {
      codigo: 2,
      nome: 'Notebook Lenovo ThinkPad i5 8ª Ger. Recertificado',
      descritivo: 'Equipamento robusto de vitrine, 8GB RAM, SSD 256GB NVMe, revisado e higienizado.',
      valor: 1899.90,
      valorPromo: 1699.90,
      quantidade: 8,
      destaque: 1,
      keywords: 'notebook, thinkpad, lenovo, i5, recertificado'
    }
  ];

  verDetalhes(obj: Produto) {
    localStorage.setItem('produtoDetalhe', JSON.stringify(obj));
    this.router.navigate(['/detalhe']);
  }

  adicionarProduto(produto: Produto) {
    this.cestaService.adicionarItem({ produto, quantidade: 1 });
  }
}


  