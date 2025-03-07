import { DatePipe, NgFor, NgOptimizedImage, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

// Los Pipes convierten data de un formato a otro
// En este caso se utilizan con la fecha usando DatePipe

@Component({
  selector: 'app-root',
  imports: [DatePipe, UpperCasePipe, CurrencyPipe,  NgFor, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-peliculas';
  apellido = 'De Jesús';
  edad = 100;
  peliculas = [{
    titulo: 'Inside Out 2',
    fecha_lanzamiento: new Date(),
    precio: 1400.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
  },
  {
    titulo: 'Moana 2',
    fecha_lanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
  },
  {
    titulo: 'Bad Boys: Ride or Die',
    fecha_lanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
  },
  {
    titulo: 'Deadpool & Wolverine',
    fecha_lanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
  },
  {
    titulo: 'Oppenheimer',
    fecha_lanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
  },
  {
    titulo: 'The Flash',
    fecha_lanzamiento: new Date('2016-05-03'),
    precio: 300.99,
    poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
  }];


  saludar(nombre: string): string {
    return `Saludos ${nombre}`
  }
}
