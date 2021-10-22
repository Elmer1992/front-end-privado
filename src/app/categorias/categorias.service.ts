import { environment } from './../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { categoriaCreacionDTO, categoriaDTO } from './categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'categorias';

  public obtenerPaginados(pagina: number, cantidadRegistrosaMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosaMostrar.toString());
    return this.http.get<categoriaDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerTodos(){
    return this.http.get<categoriaDTO[]>(`${this.apiURL}/todos`);
  }

  public obtenerPorId(id: number): Observable<categoriaDTO>{
    return this.http.get<categoriaDTO>(`${this.apiURL}/${id}`);
  }

  public crear(categoria: categoriaCreacionDTO){
    return this.http.post(this.apiURL, categoria!);
  }

  public editar(id: number, categoria: categoriaCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, categoria!);
  }

  public borrar(id: number){
    return this.http.delete(`${this.apiURL}/${id}`);
  }

}
