import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { CestaService } from '../../Services/Cesta/cesta.service';

@Component({
  selector: 'app-notebooks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notebooks.html',
  styleUrl: './notebooks.css',
})
export class Notebooks {
  private cestaService = inject(CestaService);

  listaNotebooks: Produto[] = [
    {
      codigo: 201,
      nome: 'Notebook Lenovo ThinkPad T480 i5 8ª Ger.',
      descritivo: '8GB RAM, SSD 256GB NVMe, tela 14" FHD, recertificado com garantia.',
      valor: 1899.90,
      valorPromo: 1699.90,
      quantidade: 8,
      destaque: 1,
      keywords: 'notebook, lenovo, thinkpad, i5, recertificado'
    },
    {
      codigo: 202,
      nome: 'Notebook Dell Latitude 5490 i7 8ª Ger.',
      descritivo: '16GB RAM, SSD 512GB NVMe, robusto para produtividade corporativa.',
      valor: 2499.90,
      valorPromo: 2199.90,
      quantidade: 5,
      destaque: 1,
      keywords: 'notebook, dell, latitude, i7, recertificado'
    }
  ];

  adicionarProduto(produto: Produto) {
    this.cestaService.adicionarItem({ produto, quantidade: 1 });
  }
}