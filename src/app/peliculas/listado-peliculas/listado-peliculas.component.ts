import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  // añadimos el input para recibir este parametro siempre al llamar el componente
  @Input({required: true})
    peliculas! : any[];

  agregarPelicula() {
    this.peliculas.push({
      titulo: 'Inception',
      fecha_lanzamiento: new Date('2012-07-03'),
      precio: 500,
      // poster: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg'
    })
  }

  removerPelicula(pelicula: any) {
    const indice = this.peliculas.findIndex((peliculaActual: any) => peliculaActual.titulo === pelicula.titulo);
    this.peliculas.splice(indice, 1);
  }

}
