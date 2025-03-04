import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { CurrencyPipe } from '@angular/common';

// Los Pipes convierten data de un formato a otro
// En este caso se utilizan con la fecha usando DatePipe

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';
  apellido = 'De Jesús';
  edad = 100;
  pelicula = {
    titulo: "Spider-Man",
    fecha_lanzamiento: new Date(),
    precio: 1400.99,
  }

  saludar(nombre: string): string {
    return `Saludos ${nombre}`
  }
}
