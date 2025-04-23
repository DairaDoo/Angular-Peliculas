import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioActoresComponent } from "../../actores/formulario-actores/formulario-actores.component";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { ActorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Drama'},
    {llave: 2, valor: 'Acción'},
    {llave: 3, valor: 'Comedia'}

  ]

  cinesSeleccionados: SelectorMultipleDTO[] = [];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave: 1, valor: 'Agora Mall'},
    {llave: 2, valor: 'Blue Mall'},
    {llave: 3, valor: 'Acropolis'}

  ]

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('Creando película', pelicula)
  }

}
