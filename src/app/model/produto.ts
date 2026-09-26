export interface Produto {
  codigo: number;
  nome: string;
  descritivo: string;
  valor: number;
  valorPromo?: number; // "?" Propriedade opcional
  quantidade: number;
  destaque: number;
  keywords: string;
}