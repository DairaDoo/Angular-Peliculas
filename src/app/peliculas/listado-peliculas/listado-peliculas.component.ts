import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {

  }

  // añadimos el input para recibir este parametro siempre al llamar el componente
  @Input({required: true})
    peliculas! : any[];
}
