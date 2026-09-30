import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  email = signal('');
  senha = signal('');

  fazerLogin() {
    if (this.email() && this.senha()) {
      console.log('Login efetuado com sucesso para:', this.email());
      // Aqui você pode adicionar o redirecionamento ou controle de sessão do projeto
    }
  }
}