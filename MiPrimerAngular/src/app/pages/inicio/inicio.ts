import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  BIENVENIDOS = 'Hola Daniel';
  estudiantes = [
    'Cuadernos', 'gorras', 'gafas'
  ]
}