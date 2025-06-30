import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PeliculasService } from '../peliculas.service';
@Component({
  selector: 'app-listado-peliculas',
  imports: [ListadoGenericoComponent, MatButtonModule, MatIconModule, RouterLink, SweetAlert2Module],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {

  // añadimos el input para recibir este parametro siempre al llamar el componente
  @Input({required: true})
    peliculas! : any[];

  peliculasService = inject(PeliculasService);

  @Output()
  borrado = new EventEmitter<void>();

  borrar(id: number) {
    this.peliculasService.borrar(id)
    .subscribe(() => this.borrado.emit())
  }
}
