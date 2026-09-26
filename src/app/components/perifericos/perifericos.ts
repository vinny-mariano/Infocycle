import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../model/produto';
import { CestaService } from '../../Services/Cesta/cesta.service';

@Component({
  selector: 'app-perifericos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perifericos.html',
  styleUrl: './perifericos.css',
})
export class Perifericos {
  // 💉 Injeção do serviço global de estado
  private cestaService = inject(CestaService);

  // 📦 Catálogo de periféricos recertificados alinhados ao Infocycle
  listaPerifericos: Produto[] = [
    {
      codigo: 301,
      nome: 'Kit Teclado e Mouse sem Fio Recertificado',
      descritivo: 'Ergonômico, testado, higienizado e com receptor USB de alta estabilidade.',
      valor: 180.00,
      valorPromo: 149.90,
      quantidade: 15,
      destaque: 1,
      keywords: 'teclado, mouse, sem fio, perifericos, recertificado'
    },
    {
      codigo: 302,
      nome: 'Headset Gamer Corporativo Recertificado',
      descritivo: 'Com microfone com cancelamento de ruído e áudio estéreo de alta definição.',
      valor: 220.00,
      valorPromo: 189.90,
      quantidade: 10,
      destaque: 1,
      keywords: 'headset, fone, microfone, perifericos'
    }
  ];

  // 🛒 Método para despachar o periférico selecionado para a cesta
  adicionarProduto(produto: Produto) {
    this.cestaService.adicionarItem({ produto, quantidade: 1 });
  }
}