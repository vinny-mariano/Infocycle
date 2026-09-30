import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { CestaService } from '../../services/cesta/cesta.service';

@Component({
  selector: 'app-monitores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitores.html',
  styleUrl: './monitores.css',
})
export class Monitores {
  //  Injeção de dependência do serviço centralizado de estado
  private cestaService = inject(CestaService);

  //  Catálogo especializado de monitores recertificados
  listaMonitores: Produto[] = [
    {
      codigo: 101,
      nome: 'Monitor Dell 24" Full HD Recertificado',
      descritivo: 'Painel IPS, ajuste de altura, revisado com garantia de 1 ano.',
      valor: 650.00,
      valorPromo: 549.90,
      quantidade: 12,
      destaque: 1,
      keywords: 'monitor, dell, ips, fullhd, recertificado',
      categoria: 'promocoes'
    },
    {
      codigo: 102,
      nome: 'Monitor Samsung 27" Curvo Recertificado',
      descritivo: 'Resolução Full HD, 75Hz, ideal para produtividade e multitarefas.',
      valor: 980.00,
      valorPromo: 849.90,
      quantidade: 6,
      destaque: 1,
      keywords: 'monitor, samsung, curvo, 27 polegadas',
      categoria: 'promocoes'
    },
    {
      codigo: 103,
      nome: 'Monitor LG 22" Full HD Office',
      descritivo: 'Entradas HDMI e VGA, perfeito para ambientes corporativos.',
      valor: 450.00,
      valorPromo: 399.90,
      quantidade: 20,
      destaque: 0,
      keywords: 'monitor, lg, 22 polegadas, escritório',
      categoria: 'promocoes'
    }
  ];

  // Método que despacha o produto selecionado para o estado global da cesta
  adicionarProduto(produto: Produto) {
    this.cestaService.adicionarItem({ produto, quantidade: 1 });
  }
}