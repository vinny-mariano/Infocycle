import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cliente } from '../../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css'
})
export class Cadastro {
  mensagem: String = "";
  obj:Cliente = new Cliente();

  carregar(){
    this.mensagem = "Cadastro atualizado com sucesso!";
    let json = JSON.stringify(this.obj);
    localStorage.setItem("cadastro", json); 
  }

  ngOnInit(){
    this.carregar();
  } 

  gravar(){
    this.mensagem = "";
    let json = localStorage.getItem("cadastro");
    if(json != null){
    }
  }
  
  mudarSenha(){};

}