import { Router } from '@angular/router';
import { AarchivadosService } from './../aarchivados.service';
import { aarchivadosCreacionDTO } from './../aarchivados';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-aarchivados',
  templateUrl: './crear-aarchivados.component.html',
  styleUrls: ['./crear-aarchivados.component.css']
})
export class CrearAarchivadosComponent implements OnInit {

  constructor(private aarchivadosservice: AarchivadosService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarCambios(aarchivados: aarchivadosCreacionDTO)
  {
    this.aarchivadosservice.crear(aarchivados)
    .subscribe(() => {
      this.router.navigate(['/aarchivados']);
    }, error => console.error(error))

  }

}
