import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Produto } from '../../model/produto';
import { CestaService } from '../../Services/Cesta/cesta.service';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalhe.html',
  styleUrl: './detalhe.css',
})
export class Detalhe implements OnInit {
  obj: Produto = {} as Produto;
  private cestaService = inject(CestaService);

  // Executado após o componente ser carregado
  ngOnInit(): void {
    const json = localStorage.getItem('produtoDetalhe');
    if (json) {
      this.obj = JSON.parse(json);
    }
  }

  adicionarCesta() {
    this.cestaService.adicionarItem({ produto: this.obj, quantidade: 1 });
  }
}