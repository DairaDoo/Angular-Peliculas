import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';
  apellido = 'De Jesús';
  edad = 100;
  pelicula = {
    titulo: "Spider-Man",
    fecha_lanzamiento: new Date()
  }

  saludar(nombre: string): string {
    return `Saludos ${nombre}`
  }
}
