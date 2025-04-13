import { Component } from '@angular/core';
import { PeliculaCreacionDTO } from '../peliculas';
import { FormularioActoresComponent } from "../../actores/formulario-actores/formulario-actores.component";
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

@Component({
  selector: 'app-crear-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('Creando película', pelicula)
  }

}
