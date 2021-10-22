import { categoriaDTO } from './../categoria';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { categoriaCreacionDTO } from '../categoria';
import { CategoriasService } from '../categorias.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.component.html',
  styleUrls: ['./editar-categorias.component.css']
})
export class EditarCategoriasComponent implements OnInit {

  constructor(private router: Router, private categoriasService: CategoriasService,
    private activatedRoute: ActivatedRoute) { }

  modelo!: categoriaDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.categoriasService.obtenerPorId(params.id)
      .subscribe(categoria => {
        this.modelo = categoria;
      }, () => this.router.navigate(['/categorias']) )
    })
  }
  guardarCambios(categoria: categoriaCreacionDTO){
    this.categoriasService.editar(this.modelo.id, categoria)
    .subscribe(() => {
      this.router.navigate(['/categorias'])
    },error => console.error(error))
    
  }
}
