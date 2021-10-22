import { MultipleselectorMOdel } from './../../utilidades/selector-multiple/MultipleSelectorModel';
import { ArticulosService } from './../articulos.service';
import { Component, OnInit } from '@angular/core';
import { ArticuloCreacionDTO } from '../articulos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-articulos',
  templateUrl: './crear-articulos.component.html',
  styleUrls: ['./crear-articulos.component.css']
})
export class CrearArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService,
    private router: Router) { }


  categoriasNoSeleccionadas!: MultipleselectorMOdel[];

  ngOnInit(): void {
    this.articulosService.postGet()
    .subscribe(resultado => {
      this.categoriasNoSeleccionadas = resultado.categorias.map(categoria => {
        return <MultipleselectorMOdel>{llave: categoria.id, valor: categoria.nombre}
      });
    }, error => console.error(error));
  }

  guardarCambios(articulo: ArticuloCreacionDTO){
    console.log(articulo);
  this.articulosService.crear(articulo)
  .subscribe((id: number) => this.router.navigate(['/articulos' + id])); 
  }

}
