import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { ArticuloCreacionDTO, ArticuloDTO, ArticuloPostGet, ArticuloPutGet, LandingPageDTO } from './articulos';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'articulos';

  public obtenerLandingPage(): Observable<LandingPageDTO>{
    return this.http.get<LandingPageDTO>(this.apiURL);
  }

  public obtenerPorId(id: number): Observable<ArticuloDTO>{
    return this.http.get<ArticuloDTO>(`${this.apiURL}/${id}`);
  }

  public postGet(): Observable<ArticuloPostGet>{
    return this.http.get<ArticuloPostGet>(`${this.apiURL}/postget`);
  }

  public putGet(id: number): Observable<ArticuloPutGet>{
    return this.http.get<ArticuloPutGet>(`${this.apiURL}/putget/${id}`);
  }


  public filtrar(valores: any): Observable<any>{
    const params = new HttpParams({fromObject: valores});
    return this.http.get<ArticuloDTO[]>(`${this.apiURL}/filtrar`,
    {params, observe: 'response'});
  }


  public crear(articulo: ArticuloCreacionDTO): Observable<number>{
    const formData = this.ConstruirFormData(articulo);
    return this.http.post<number>(this.apiURL, formData);
  }

  public editar(id: number, articulo: ArticuloCreacionDTO){
    const formData = this.ConstruirFormData(articulo);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  private ConstruirFormData(articulo: ArticuloCreacionDTO): FormData{
    const formData = new FormData();

    formData.append('titulo', articulo.titulo);
    formData.append('contenido', articulo.contenido);
    formData.append('etiquetas', articulo.etiquetas);
    formData.append('articulosGratis', String(articulo.articulosGratis));
    formData.append('articulosPaga', String(articulo.articulosPaga));


    if (articulo.fechaLanzamiento){
      formData.append('fechaLanzamiento', formatearFecha(articulo.fechaLanzamiento));
    }

    if (articulo.poster){
    formData.append('poster', articulo.poster);
    }
    
  
    formData.append('categoriasIds', JSON.stringify(articulo.categoriasIds));
  
  
    return formData;
  }

}
