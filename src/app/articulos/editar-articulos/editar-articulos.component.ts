import { ActivatedRoute, Router } from '@angular/router';
import { ArticulosService } from './../articulos.service';
import { Component, OnInit } from '@angular/core';
import { ArticuloCreacionDTO, ArticuloDTO } from '../articulos';
import { MultipleselectorMOdel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';

@Component({
  selector: 'app-editar-articulos',
  templateUrl: './editar-articulos.component.html',
  styleUrls: ['./editar-articulos.component.css']
})
export class EditarArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  modelo!: ArticuloDTO; 
  categoriasNoSeleccionadas!: MultipleselectorMOdel[];
  categoriasSeleccionadas!: MultipleselectorMOdel[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.articulosService.putGet(params.id)
      .subscribe(articuloPutGet => {
        this.modelo = articuloPutGet.articulo;

        this.categoriasNoSeleccionadas = articuloPutGet.categoriasNoSeleccionadas.map(categoria => {
          return <MultipleselectorMOdel>{llave: categoria.id, valor: categoria.nombre}
        });

        this.categoriasSeleccionadas = articuloPutGet.categoriasSeleccionadas.map(categoria => {
          return <MultipleselectorMOdel>{llave: categoria.id, valor: categoria.nombre}
        });

      });
    }, error => console.error(error));
  }

  guardarCambios(articulo: ArticuloCreacionDTO){
    console.log(articulo);
    this.articulosService.editar(this.modelo.id, articulo)
    .subscribe(() => this.router.navigate(['/articulos/' + this.modelo.id]))
    
    
  }
}

