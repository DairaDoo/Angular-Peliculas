import { inject, Injectable } from '@angular/core';
import { GeneroDTO } from './generos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GenerosService {

  private http = inject(HttpClient);
  private urlBase = environment.apiURL + "/generos";

  constructor() {

   }

   public obtenerTodos(): Observable<GeneroDTO[]>{
    return this.http.get<GeneroDTO[]>(this.urlBase)
   }
}
