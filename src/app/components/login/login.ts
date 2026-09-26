import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // 🔐 Signals para armazenar e gerenciar o estado reativo das credenciais
  email = signal('');
  senha = signal('');

  entrar() {
    const usuarioEmail = this.email();
    const usuarioSenha = this.senha();
    
    // 🚀 Lógica de autenticação para o Infocycle
    console.log('Autenticando usuário:', usuarioEmail);
  }
}