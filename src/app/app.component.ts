import { DatePipe, NgFor, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

// Los Pipes convierten data de un formato a otro
// En este caso se utilizan con la fecha usando DatePipe

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe,  NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';
  apellido = 'De Jesús';
  edad = 100;
  peliculas = [
    {
      titulo: "Spider-Man",
      fecha_lanzamiento: new Date(),
      precio: 1400.99,
    },
    {
      titulo: "Moana",
      fecha_lanzamiento: new Date("2016-05-03"),
      precio: 300.09,
    }
  ]

  saludar(nombre: string): string {
    return `Saludos ${nombre}`
  }
}
