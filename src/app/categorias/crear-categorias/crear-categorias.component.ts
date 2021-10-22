import { CategoriasService } from './../categorias.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { categoriaCreacionDTO } from '../categoria';

@Component({
  selector: 'app-crear-categorias',
  templateUrl: './crear-categorias.component.html',
  styleUrls: ['./crear-categorias.component.css']
})
export class CrearCategoriasComponent  {

  constructor(private router: Router, private categoriasService:CategoriasService) { }

  guardarCambios(categoria: categoriaCreacionDTO){
    this.categoriasService.crear(categoria).subscribe(() => {
    this.router.navigate(['/categorias']);
  }, error => console.error(error));
  }

}
 