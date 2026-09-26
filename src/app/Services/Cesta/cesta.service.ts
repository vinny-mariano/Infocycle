import { Injectable, signal, computed } from '@angular/core';
import { ItemCesta } from '../../model/item-cesta';

@Injectable({
  providedIn: 'root'
})
export class CestaService {
  private itensSignal = signal<ItemCesta[]>([]);
  
  // 📊 Estado somente leitura para os componentes
  readonly itens = this.itensSignal.asReadonly();

  // 💰 Propriedade computada para o valor total
  readonly totalGeral = computed(() =>
    this.itensSignal().reduce((acc, item) => acc + (item.produto.valor * item.quantidade), 0)
  );

  // 🛒 Método para adicionar ou incrementar itens na cesta
  adicionarItem(novoItem: ItemCesta) {
    this.itensSignal.update(itensAtuais => {
      const index = itensAtuais.findIndex(i => i.produto.codigo === novoItem.produto.codigo);
      
      if (index > -1) {
        // Se o produto já existe, criamos uma cópia e somamos a quantidade
        const copia = [...itensAtuais];
        copia[index] = {
          ...copia[index],
          quantidade: copia[index].quantidade + novoItem.quantidade
        };
        return copia;
      }
      
      // Se não existe, adicionamos o novo item ao array
      return [...itensAtuais, novoItem];
    });
  }
}
