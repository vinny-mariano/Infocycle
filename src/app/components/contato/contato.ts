import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css',
})
export class Contato {
  // Signals para gerenciar o estado reativo dos campos e feedback visual
  nome = signal('');
  email = signal('');
  mensagem = signal('');
  enviado = signal(false);

  // Método para processar o envio do formulário de forma controlada
  enviarMensagem(event: Event) {
    event.preventDefault();
    if (this.nome() && this.email() && this.mensagem()) {
      this.enviado.set(true);
      // Aqui integrariamos com um serviço de API backend (Node.js/Express)
    }
  }
}