import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Vitrine } from './components/vitrine/vitrine';
import { Login } from './components/login/login';   
import { Cadastro } from './components/cadastro/cadastro';
import { Notebooks } from './components/notebooks/notebooks';
import { Monitores } from './components/monitores/monitores';
import { Processadores } from './components/processadores/processadores';
import { Perifericos } from './components/perifericos/perifericos';
import { Sobre } from './components/sobre/sobre';
import { Contato } from './components/contato/contato';
import { Cesta } from './components/cesta/cesta';
import { Detalhe } from './components/detalhe/detalhe';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'vitrine',
    component: Vitrine
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'cadastro',
    component: Cadastro
  },
  {
    path: 'notebooks',
    component: Notebooks
  },
  {
    path: 'monitores',
    component: Monitores
  },
  {
    path: 'processadores',
    component: Processadores
  },
  {
    path: 'perifericos',
    component: Perifericos
  },
  {
    path: 'sobre',
    component: Sobre
  },
  { 
    path: 'contato',
    component: Contato
  },
  { 
    path: 'cesta',
    component: Cesta
  },
  {
    path: 'detalhe',
    component: Detalhe
  }

];

