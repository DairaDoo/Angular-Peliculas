import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { primeraLetraMayuscula } from '../../compartidos/funciones/validaciones';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';

@Component({
  selector: 'app-crear-generos',
  imports: [FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
})
export class CrearGenerosComponent {
  private router = inject(Router);

  guardarCambios(genero: GeneroCreacionDTO) {
    // ... simulamos guardar los cambios
    // this.router.navigate(['/generos']);
    console.log('Creando el genero: ', genero);

  }
}
