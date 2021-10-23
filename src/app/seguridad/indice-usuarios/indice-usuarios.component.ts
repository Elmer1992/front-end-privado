import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import Swal from 'sweetalert2';
import { SeguridadService } from '../seguridad.service';
import { PageEvent } from '@angular/material/paginator';
import { HttpResponse } from '@angular/common/http';
import { usuarioDTO } from '../seguridad';

@Component({
  selector: 'app-indice-usuarios',
  templateUrl: './indice-usuarios.component.html',
  styleUrls: ['./indice-usuarios.component.css']
})
export class IndiceUsuariosComponent implements OnInit {

  constructor(private seguridadService: SeguridadService) { }

  @ViewChild('table')
  table!: MatTable<any>;

  usuarios!: usuarioDTO[] | null;
  columnasAMostrar = ['nombre', 'acciones'];
  cantidadTotalRegistros:any;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar:any){
    this.seguridadService.obtenerUsuarios(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<usuarioDTO[]>) => {
      this.usuarios = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  hacerAdmin(usuarioId: string){
    console.log(usuarioId);
    this.seguridadService.hacerAdmin(usuarioId)
    .subscribe(() => Swal.fire('Exitoso', 'La operación se ha realizado', 'success'));
  }

  removerAdmin(usuarioId: string){
    this.seguridadService.removerAdmin(usuarioId)
    .subscribe(() => Swal.fire('Exitoso', 'La operación se ha realizado', 'success'));
  }


}
