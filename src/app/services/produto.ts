import { Injectable } from '@angular/core';
import { signal } from '@angular/core';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly listaProdutos = signal<Produto[]>([
    // PROMOÇÕES (6)
    {
      codigo: 1,
      nome: 'Notebook Gamer Acer Nitro',
      categoria: 'promocoes',
      descritivo: 'Processador i5, 16GB RAM, RTX 3050, SSD 512GB',
      valor: 4500.00,
      valorPromo: 4200.00,
      quantidade: 10,
      destaque: 1,
      keywords: 'notebook, gamer, acer, nitro, rtx',
      imagem: 'imagens/promocoes/promo-01.jpg'
    },
    {
      codigo: 2,
      nome: 'Monitor HQ 24" 75Hz',
      categoria: 'promocoes',
      descritivo: 'Painel IPS, Full HD, conexão HDMI e VGA',
      valor: 699.00,
      valorPromo: 549.00,
      quantidade: 15,
      destaque: 1,
      keywords: 'monitor, hq, 24 polegadas, ips',
      imagem: 'imagens/promocoes/promo-02.jpg'
    },
    {
      codigo: 3,
      nome: 'Processador Ryzen 5 5600',
      categoria: 'promocoes',
      descritivo: '6 Cores, 12 Threads, 3.5GHz (4.4GHz Turbo), Cooler Wraith Stealth',
      valor: 990.00,
      valorPromo: 820.00,
      quantidade: 8,
      destaque: 1,
      keywords: 'processador, amd, ryzen, zen3',
      imagem: 'imagens/promocoes/promo-03.jpg'
    },
    {
      codigo: 4,
      nome: 'Mouse Sem Fio Logitech',
      categoria: 'promocoes',
      descritivo: 'Sensor óptico de alta precisão, pilha com duração de 12 meses',
      valor: 110.00,
      valorPromo: 89.00,
      quantidade: 25,
      destaque: 0,
      keywords: 'mouse, sem fio, logitech, periferico',
      imagem: 'imagens/promocoes/promo-04.jpg'
    },
    {
      codigo: 5,
      nome: 'SSD NVMe 1TB Kingston',
      categoria: 'promocoes',
      descritivo: 'Leitura até 3500MB/s, formato M.2 2280',
      valor: 480.00,
      valorPromo: 390.00,
      quantidade: 20,
      destaque: 1,
      keywords: 'ssd, nvme, kingston, armazenamento',
      imagem: 'imagens/promocoes/promo-05.jpg'
    },
    {
      codigo: 6,
      nome: 'Teclado Mecânico RGB',
      categoria: 'promocoes',
      descritivo: 'Switch Blue, iluminação RGB com múltiplos modos, ABNT2',
      valor: 250.00,
      valorPromo: 199.00,
      quantidade: 12,
      destaque: 0,
      keywords: 'teclado, mecano, rgb, gamer',
      imagem: 'imagens/promocoes/promo-06.jpg'
    },

    // NOTEBOOKS (6)
    {
        codigo: 101,
        nome: 'Dell Inspiron 15',
        categoria: 'notebooks',
        descritivo: 'Intel Core i5, 8GB RAM, SSD 256GB, Tela 15.6" FHD',
        valor: 3100.00,
        quantidade: 7,
        destaque: 1,
        keywords: 'dell, inspiron, notebook, trabalho',
        imagem: 'imagens/notebooks/not-01.jpg',
        valorPromo: 0
    },
    {
        codigo: 102,
        nome: 'Lenovo Ideapad Gaming 3',
        categoria: 'notebooks',
        descritivo: 'Ryzen 7, 16GB RAM, GTX 1650, SSD 512GB',
        valor: 3899.00,
        quantidade: 5,
        destaque: 1,
        keywords: 'lenovo, gaming, notebook, ryzen',
        imagem: 'imagens/notebooks/not-02.jpg',
        valorPromo: 0
    },
    {
        codigo: 103,
        nome: 'MacBook Air M1',
        categoria: 'notebooks',
        descritivo: 'Chip M1 da Apple, 8GB RAM, SSD 256GB, Tela Retina 13.3"',
        valor: 5200.00,
        quantidade: 4,
        destaque: 1,
        keywords: 'macbook, apple, m1, notebook, premium',
        imagem: 'imagens/notebooks/not-03.jpg',
        valorPromo: 0
    },
    {
        codigo: 104,
        nome: 'Asus Vivobook 15',
        categoria: 'notebooks',
        descritivo: 'Intel Core i3, 8GB RAM, SSD 256GB, Design ultrafino',
        valor: 2600.00,
        quantidade: 9,
        destaque: 0,
        keywords: 'asus, vivobook, estudo, notebook',
        imagem: 'imagens/notebooks/not-04.jpg',
        valorPromo: 0
    },
    {
        codigo: 105,
        nome: 'Samsung Book i5',
        categoria: 'notebooks',
        descritivo: 'Intel Core i5 11ª Ger, 8GB RAM, SSD 256GB, Fácil upgrade',
        valor: 2800.00,
        quantidade: 11,
        destaque: 0,
        keywords: 'samsung, book, i5, notebook',
        imagem: 'imagens/notebooks/not-05.jpg',
        valorPromo: 0
    },
    {
        codigo: 106,
        nome: 'Acer Aspire 5',
        categoria: 'notebooks',
        descritivo: 'Ryzen 5, 12GB RAM, SSD 512GB, Prata',
        valor: 2450.00,
        quantidade: 6,
        destaque: 0,
        keywords: 'acer, aspire, ryzen, notebook',
        imagem: 'imagens/notebooks/not-06.jpg',
        valorPromo: 0
    },

    // MONITORES (6)
    {
        codigo: 201,
        nome: 'LG Ultrawide 29"',
        categoria: 'monitores',
        descritivo: 'Proporção 21:9, IPS, Full HD, HDR10',
        valor: 1100.00,
        quantidade: 8,
        destaque: 1,
        keywords: 'lg, ultrawide, monitor, ips, produtividade',
        imagem: 'imagens/monitores/mon-01.jpg',
        valorPromo: 0
    },
    {
        codigo: 202,
        nome: 'Samsung Odyssey 24" 144Hz',
        categoria: 'monitores',
        descritivo: 'Tempo de resposta 1ms, FreeSync Premium, Ajuste de altura',
        valor: 950.00,
        quantidade: 14,
        destaque: 1,
        keywords: 'samsung, odyssey, gamer, 144hz, monitor',
        imagem: 'imagens/monitores/mon-02.jpg',
        valorPromo: 0
    },
    {
        codigo: 203,
        nome: 'AOC Hero 27" 144Hz',
        categoria: 'monitores',
        descritivo: 'Painel IPS, G-Sync Compatible, Borda ultrafina',
        valor: 1250.00,
        quantidade: 9,
        destaque: 0,
        keywords: 'aoc, hero, 27 polegadas, gamer',
        imagem: 'imagens/monitores/mon-03.jpg',
        valorPromo: 0
    },
    {
        codigo: 204,
        nome: 'Dell 23.8" IPS',
        categoria: 'monitores',
        descritivo: 'ComfortView, Ajuste de inclinação, HDMI/DisplayPort',
        valor: 850.00,
        quantidade: 18,
        destaque: 0,
        keywords: 'dell, escritorio, monitor, ips',
        imagem: 'imagens/monitores/mon-04.jpg',
        valorPromo: 0
    },
    {
        codigo: 205,
        nome: 'Pichau Gaming 21.5"',
        categoria: 'monitores',
        descritivo: 'Full HD, 75Hz, tempo de resposta 5ms',
        valor: 480.00,
        quantidade: 22,
        destaque: 0,
        keywords: 'pichau, entrada, monitor, barato',
        imagem: 'imagens/monitores/mon-05.jpg',
        valorPromo: 0
    },
    {
        codigo: 206,
        nome: 'Asus TUF Gaming 27"',
        categoria: 'monitores',
        descritivo: '165Hz, 1ms, Curved 1500R, Extreme Low Motion Blur',
        valor: 1600.00,
        quantidade: 3,
        destaque: 1,
        keywords: 'asus, tuf, curvo, 165hz, monitor',
        imagem: 'imagens/monitores/mon-06.jpg',
        valorPromo: 0
    },

    // PROCESSADORES (6)
    {
        codigo: 301,
        nome: 'Intel Core i5-12400F',
        categoria: 'processadores',
        descritivo: '6 Cores, 12 Threads, LGA1700, sem vídeo integrado',
        valor: 890.00,
        quantidade: 13,
        destaque: 1,
        keywords: 'intel, i5, 12gen, processador',
        imagem: 'imagens/processadores/proc-01.jpg',
        valorPromo: 0
    },
    {
        codigo: 302,
        nome: 'AMD Ryzen 7 5700X',
        categoria: 'processadores',
        descritivo: '8 Cores, 16 Threads, AM4, ideal para render e jogos',
        valor: 1150.00,
        quantidade: 10,
        destaque: 1,
        keywords: 'amd, ryzen 7, am4, cpu',
        imagem: 'imagens/processadores/proc-02.jpg',
        valorPromo: 0
    },
    {
        codigo: 303,
        nome: 'Intel Core i7-13700K',
        categoria: 'processadores',
        descritivo: '16 Cores (8P + 8E), 24 Threads, até 5.4GHz',
        valor: 2400.00,
        quantidade: 4,
        destaque: 1,
        keywords: 'intel, i7, high-end, cpu, 13gen',
        imagem: 'imagens/processadores/proc-03.jpg',
        valorPromo: 0
    },
    {
        codigo: 304,
        nome: 'AMD Ryzen 9 5900X',
        categoria: 'processadores',
        descritivo: '12 Cores, 24 Threads, Cache 70MB, Socket AM4',
        valor: 2100.00,
        quantidade: 2,
        destaque: 0,
        keywords: 'amd, ryzen 9, workstation, cpu',
        imagem: 'imagens/processadores/proc-04.jpg',
        valorPromo: 0
    },
    {
        codigo: 305,
        nome: 'Intel Core i3-12100F',
        categoria: 'processadores',
        descritivo: '4 Cores, 8 Threads, excelente custo-benefício de entrada',
        valor: 520.00,
        quantidade: 16,
        destaque: 0,
        keywords: 'intel, i3, entrada, cpu',
        imagem: 'imagens/processadores/proc-05.jpg',
        valorPromo: 0
    },
    {
        codigo: 306,
        nome: 'AMD Ryzen 5 5500',
        categoria: 'processadores',
        descritivo: '6 Cores, 12 Threads, 3.6GHz Base, Socket AM4',
        valor: 620.00,
        quantidade: 19,
        destaque: 0,
        keywords: 'amd, ryzen 5, am4, cpu',
        imagem: 'imagens/processadores/proc-06.jpg',
        valorPromo: 0
    },

    // PERIFÉRICOS (6)
    {
        codigo: 401,
        nome: 'Headset HyperX Cloud II',
        categoria: 'perifericos',
        descritivo: 'Som Surround 7.1 Virtual, Estrutura em alumínio, P2 e USB',
        valor: 450.00,
        quantidade: 15,
        destaque: 1,
        keywords: 'headset, hyperx, cloud, audio',
        imagem: 'imagens/perifericos/peri-01.jpg',
        valorPromo: 0
    },
    {
        codigo: 402,
        nome: 'Mouse Redragon Cobra',
        categoria: 'perifericos',
        descritivo: '10000 DPI, Sensor Pixart 3325, Iluminação RGB Chroma',
        valor: 120.00,
        quantidade: 30,
        destaque: 0,
        keywords: 'redragon, cobra, mouse, rgb',
        imagem: 'imagens/perifericos/peri-02.jpg',
        valorPromo: 0
    },
    {
        codigo: 403,
        nome: 'Teclado Redragon Kumara',
        categoria: 'perifericos',
        descritivo: 'Mecânico TKL (sem numérico), Switch Outemu Brown',
        valor: 230.00,
        quantidade: 14,
        destaque: 1,
        keywords: 'teclado, tkl, redragon, kumara',
        imagem: 'imagens/perifericos/peri-03.jpg',
        valorPromo: 0
    },
    {
        codigo: 404,
        nome: 'Webcam Logitech C920',
        categoria: 'perifericos',
        descritivo: 'Full HD 1080p, Foco automático, Microfones estéreo',
        valor: 380.00,
        quantidade: 8,
        destaque: 0,
        keywords: 'webcam, logitech, stream, video',
        imagem: 'imagens/perifericos/peri-04.jpg',
        valorPromo: 0
    },
    {
        codigo: 405,
        nome: 'Mousepad Extra Grande 90x40',
        categoria: 'perifericos',
        descritivo: 'Superfície Speed, base emborrachada antiderrapante, bordas costuradas',
        valor: 75.00,
        quantidade: 40,
        destaque: 0,
        keywords: 'mousepad, xl, deskmat, periferico',
        imagem: 'imagens/perifericos/peri-05.jpg',
        valorPromo: 0
    },
    {
        codigo: 406,
        nome: 'Microfone Fifine K669B',
        categoria: 'perifericos',
        descritivo: 'Condensador USB, controle de ganho, corpo metálico',
        valor: 210.00,
        quantidade: 11,
        destaque: 1,
        keywords: 'microfone, fifine, usb, podcast',
        imagem: 'imagens/perifericos/peri-06.jpg',
        valorPromo: 0
    }
  ]);

  getProdutos() {
    return this.listaProdutos;
  }

  getProdutosPorCategoria(categoria: string) {
    return this.listaProdutos().filter(p => p.categoria === categoria);
  }

  getProdutosDestaque() {
    return this.listaProdutos().filter(p => p.destaque === 1);
  }
}