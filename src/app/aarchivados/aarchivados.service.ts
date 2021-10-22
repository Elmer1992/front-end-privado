import { aarchivadosCreacionDTO } from './aarchivados';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class AarchivadosService {

  constructor(private http: HttpClient) {
  }

  private apiURL = environment.apiURL + 'Aarchivados';

  public crear(aarchivados: aarchivadosCreacionDTO){

    const formData = this.construirFormData(aarchivados);

    return this.http.post(this.apiURL, formData);
  }

  private construirFormData(aarchivados: aarchivadosCreacionDTO): FormData{
    const formData = new FormData();
    formData.append('contenido', aarchivados.contenido);
    formData.append('etiquetas', aarchivados.etiquetas);
    formData.append('titulo', aarchivados.titulo);
    if(aarchivados.fechaLanzamiento){
      formData.append('fechaLanzamiento', formatearFecha(aarchivados.fechaLanzamiento));
    }
    if (aarchivados.poster){
      formData.append('poster', aarchivados.poster)
    }
    
    return formData;

  }
}
