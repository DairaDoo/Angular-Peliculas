import { Component, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ActorAutoCompleteDTO } from '../actores';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actores: ActorAutoCompleteDTO[] = [
    {
      id: 1,
      nombre: 'Tom Cruise',
      personaje: '',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/330px-Tom_Cruise_by_Gage_Skidmore_2.jpg'
    },
    {
      id: 2,
      nombre: 'Ben Stiller',
      personaje: '',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ben_Stiller_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg/500px-Ben_Stiller_at_the_2024_Toronto_International_Film_Festival_%28cropped%29.jpg'
    },
    {
      id: 3,
      nombre: 'Rosa Salazar',
      personaje: '',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rosa_WIKI.jpg/330px-Rosa_WIKI.jpg'
    },
  ]

  actoresSeleccionados: ActorAutoCompleteDTO[] = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<ActorAutoCompleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent) {
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if (this.table != undefined) {
      this.table.renderRows();
    }

  }

  eliminar(actor: ActorAutoCompleteDTO) {
    const indice = this.actoresSeleccionados.findIndex((a: ActorAutoCompleteDTO) => a.id === actor.id);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

}
