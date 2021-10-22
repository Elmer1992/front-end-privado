import { ArticulosService } from './../articulos.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { categoriaDTO } from './../../categorias/categoria';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ArticuloDTO } from '../articulos';
import { PageEvent } from '@angular/material/paginator';
///


///
@Component({
  selector: 'app-filtro-articulos',
  templateUrl: './filtro-articulos.component.html',
  styleUrls: ['./filtro-articulos.component.css']
})
export class FiltroArticulosComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute,
    private categoriasService: CategoriasService,
    private articulosService: ArticulosService) { }

  form!: FormGroup
  categorias: categoriaDTO[] = [];
  paginaActual = 1;
  cantidadElementosAMostrar = 10;
  cantidadElementos: any;
  articulos!: ArticuloDTO[];

  formularioOriginal = 
  {
    titulo: '',
    categoriasId: 0,
    articulosGratis: false,
    articulosPaga: false,
  };

  ngOnInit(): void {

    this.categoriasService.obtenerTodos()
    .subscribe(categorias => {
      this.categorias = categorias;

      this.form = this.formBuilder.group(this.formularioOriginal);
      this.leerValoresURL();
      this.buscarArticulos(this.form.value);
  
  
      this.form.valueChanges
      .subscribe(valores => {
        this.buscarArticulos(valores);
        this.escribirParametrosBusquedaEnURL();

    })



    
      
    })

  }

  private leerValoresURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var objeto: any = {};

      if (params.titulo){
        objeto.titulo = params.titulo;
      }

      if (params.categoriasId){
        objeto.categoriasId = Number(params.categoriasId);
      }

      if (params.articulosGratis){
        objeto.articulosGratis = params.articulosGratis;
      }

      if (params.articulosPaga){
        objeto.articulosPaga = params.articulosPaga;
      }

      this.form.patchValue(objeto);

    });
  }

  private escribirParametrosBusquedaEnURL(){
    var queryStrings = [];
    var valoresFormulario = this.form.value;

    if(valoresFormulario.titulo){
      queryStrings.push(`titulo=${valoresFormulario.titulo}`);
    }

    if(valoresFormulario.categoriasId != '0'){
      queryStrings.push(`categoriasId=${valoresFormulario.categoriasId}`);
    }

    if(valoresFormulario.articulosGratis){
      queryStrings.push(`articulosGratis=${valoresFormulario.articulosGratis}`);
    }

    if(valoresFormulario.articulosPaga){
      queryStrings.push(`articulosPaga=${valoresFormulario.articulosPaga}`);
    }
    this.location.replaceState('articulos/buscar', queryStrings.join('&'));
  }

  buscarArticulos(valores: any){
    valores.pagina = this.paginaActual;
    valores.recordsPorPagina = this.cantidadElementosAMostrar;
   this.articulosService.filtrar(valores).subscribe(response => {
     this.articulos = response.body;
     this.escribirParametrosBusquedaEnURL();
     this.cantidadElementos = response.headers.get('cantidadTotalRegistros');
   })
  }

  limpiar(){
    this.form.patchValue(this.formularioOriginal);
  }

  paginatorUpdate(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadElementosAMostrar = datos.pageSize;
    this.buscarArticulos(this.form.value);
  }

}
