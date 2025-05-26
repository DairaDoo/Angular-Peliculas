import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './generos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GenerosService {

  private http = inject(HttpClient);

  constructor() {

   }

   public obtenerTodos(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>("https://localhost:7076/api/Generos")
   }
}
