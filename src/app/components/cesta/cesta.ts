import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CestaService } from '../../services/cesta/cesta.service';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cesta.html',
  styleUrls: ['./cesta.css']
})
export class Cesta {
  // Injeção direta do serviço global de estado
  protected cestaService = inject(CestaService);
}