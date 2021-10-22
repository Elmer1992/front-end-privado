import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { categoriaDTO } from '../categoria';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-indice-categorias',
  templateUrl: './indice-categorias.component.html',
  styleUrls: ['./indice-categorias.component.css']
})
export class IndiceCategoriasComponent implements OnInit {

  constructor(private categoriasService : CategoriasService) { }


  categorias!: categoriaDTO[] | null;
  columnasAMostrar = ['id', 'nombre', 'acciones'];
  cantidadTotalRegistros:any;
  paginaActual = 1;
  cantidadRegistrosaMostrar = 10;

  ngOnInit(): void{
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosaMostrar);
    
  }

/*   cargarRegistros(pagina: number, cantidadElementosAMostrar: any){

    this.categoriasService.obtenerTodos(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<categoriaDTO[]>) => {this.categorias = respuesta.body;
      console.log(respuesta.headers.get("cantidadTotalRegistros"));
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  } */

  cargarRegistros(pagina: number, cantidadElementosAMostrar: any){
    this.categoriasService.obtenerPaginados(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<categoriaDTO[]>) => {
      this.categorias = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent)
  {
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosaMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosaMostrar);
  }

  borrar(id: number){
    this.categoriasService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosaMostrar);
    }, error => console.error(error));
  }
}
