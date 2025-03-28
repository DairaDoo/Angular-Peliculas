import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-crear-generos',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
})
export class CrearGenerosComponent {
  private router = inject(Router);
  private formbuilder = inject(FormBuilder);

  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required] }],
  });

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return "El campo nombre es requerido."
    }

    return "";
  }

  guardarCambios() {
    // ... simulamos guardar los cambios
    // this.router.navigate(['/generos']);
    console.log(this.form.value);
  }
}
