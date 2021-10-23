import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoArticulosComponent } from './articulos/listado-articulos/listado-articulos.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceCategoriasComponent } from './categorias/indice-categorias/indice-categorias.component';
import { CrearCategoriasComponent } from './categorias/crear-categorias/crear-categorias.component';
import { CrearPodCastComponent } from './podCast/crear-pod-cast/crear-pod-cast.component';
import { CrearArticulosComponent } from './articulos/crear-articulos/crear-articulos.component';
import { CrearEdipreDComponent } from './edipreD/crear-edipre-d/crear-edipre-d.component';
import { IndicePodCastComponent } from './podCast/indice-pod-cast/indice-pod-cast.component';
import { IndiceEdipreDComponent } from './edipreD/indice-edipre-d/indice-edipre-d.component';
import { EditarPodCastComponent } from './podCast/editar-pod-cast/editar-pod-cast.component';
import { EditarCategoriasComponent } from './categorias/editar-categorias/editar-categorias.component';
import { EditarEdipreDComponent } from './edipreD/editar-edipre-d/editar-edipre-d.component';
import { EditarArticulosComponent } from './articulos/editar-articulos/editar-articulos.component';

import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { FormularioCategoriaComponent } from './categorias/formulario-categoria/formulario-categoria.component';
import { FiltroArticulosComponent } from './articulos/filtro-articulos/filtro-articulos.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormularioArticuloComponent } from './articulos/formulario-articulo/formulario-articulo.component';
import { InputImgComponent } from './utilidades/input-img/input-img.component';
import { InputMarkdownComponent } from './utilidades/input-markdown/input-markdown.component';
import { MarkdownModule } from "ngx-markdown";
import { SelectorMultipleComponent } from './utilidades/selector-multiple/selector-multiple.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { FormularioAarchivadosComponent } from './aarchivados/formulario-aarchivados/formulario-aarchivados.component';
import { CrearAarchivadosComponent } from './aarchivados/crear-aarchivados/crear-aarchivados.component';
import { DetalleArticulosComponent } from './articulos/detalle-articulos/detalle-articulos.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';
import { FormularioAutenticacionComponent } from './seguridad/formulario-autenticacion/formulario-autenticacion.component';
import { MostrarErroresComponent } from './utilidades/mostrar-errores/mostrar-errores.component';
import { IndiceUsuariosComponent } from './seguridad/indice-usuarios/indice-usuarios.component';
import { SeguridadInterceptorService } from './seguridad/seguridad-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ListadoArticulosComponent,
    ListadoGenericoComponent,
    MenuComponent,
    RatingComponent,
    LandingPageComponent,
    IndiceCategoriasComponent,
    CrearCategoriasComponent,
    CrearPodCastComponent,
    CrearArticulosComponent,
    CrearEdipreDComponent,
    IndicePodCastComponent,
    IndiceEdipreDComponent,
    EditarPodCastComponent,
    EditarCategoriasComponent,
    EditarEdipreDComponent,
    EditarArticulosComponent,
    FormularioCategoriaComponent,
    FiltroArticulosComponent,
    FormularioArticuloComponent,
    InputImgComponent,
    InputMarkdownComponent,
    SelectorMultipleComponent,
    FormularioAarchivadosComponent,
    CrearAarchivadosComponent,
    DetalleArticulosComponent,
    AutorizadoComponent,
    LoginComponent,
    RegistroComponent,
    FormularioAutenticacionComponent,
    MostrarErroresComponent,
    IndiceUsuariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    HttpClientModule,
    
    
    MarkdownModule.forRoot(),
    SweetAlert2Module.forRoot() 
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SeguridadInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
