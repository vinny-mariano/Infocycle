import { ItemCesta } from './item-cesta';

export interface Cesta {
  itens: ItemCesta[];
  valorTotal: number;
}