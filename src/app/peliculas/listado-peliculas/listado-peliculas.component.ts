import { Component, Input, OnInit } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-listado-peliculas',
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  // añadimos el input para recibir este parametro siempre al llamar el componente
  @Input({required: true})
    peliculas! : any[];


}
