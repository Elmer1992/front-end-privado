import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from './../articulos.service';
import { Component, OnInit } from '@angular/core';
import { ArticuloDTO } from '../articulos';
import { RatingService } from 'src/app/rating/rating.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-articulos',
  templateUrl: './detalle-articulos.component.html',
  styleUrls: ['./detalle-articulos.component.css']
})
export class DetalleArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService,
    private activatedRoute: ActivatedRoute,
    private ratingService: RatingService) { }

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

  rated(puntuacion: number){
    this.ratingService.rate(this.articulo.id, puntuacion)
    .subscribe(() => {
      Swal.fire("Exitoso", "Su voto ha sido recibido", 'success');
    })
  }

}
