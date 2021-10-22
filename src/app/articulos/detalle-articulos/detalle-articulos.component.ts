import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../articulos.service';
import { Component, OnInit } from '@angular/core';
import { ArticuloDTO } from '../articulos';

@Component({
  selector: 'app-detalle-articulos',
  templateUrl: './detalle-articulos.component.html',
  styleUrls: ['./detalle-articulos.component.css']
})
export class DetalleArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService,
    private activatedRoute: ActivatedRoute) { }

    articulo!: ArticuloDTO;
    fechaLanzamiento!: Date;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.articulosService.obtenerPorId(params.id).subscribe(articulo => {
        console.log(articulo);
        this.articulo = articulo;
        this.fechaLanzamiento = new Date(this.articulo.fechaLanzamiento);
      })
    })

  }

}
