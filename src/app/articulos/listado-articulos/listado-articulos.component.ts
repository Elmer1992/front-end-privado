import { ArticulosService } from './../articulos.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticuloDTO } from '../articulos';


@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.css']
})
export class ListadoArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService) { }

  @Input()
  articulos!: ArticuloDTO[];

  @Output()
  borrado: EventEmitter<void> = new EventEmitter<void>();


  ngOnInit(): void {
    
  }

  borrar(articulosId: number): void {
    this.articulosService.borrar(articulosId)
    .subscribe(() => this.borrado.emit())
  }

}
