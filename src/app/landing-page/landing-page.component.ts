import { ArticulosService } from './../articulos/articulos.service';
import { Component, OnInit } from '@angular/core';
import { ArticuloDTO } from '../articulos/articulos';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
constructor (private articulosService:ArticulosService){}
  
ngOnInit(): void {

  this.cargarDatos();
   
  }
  articulosarticulosPaga!: ArticuloDTO[];
  articulosarticulosGratis!: ArticuloDTO[];
   
  cargarDatos(){
    this.articulosService.obtenerLandingPage().subscribe(landingPage => {
      this.articulosarticulosGratis = landingPage.articulosGratis;
      this.articulosarticulosPaga = landingPage.articulosPaga;
    });
     
  }

  borrado(){
    this.cargarDatos();
  }


}
