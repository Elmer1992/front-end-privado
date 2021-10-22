import { FiltroArticulosComponent } from './articulos/filtro-articulos/filtro-articulos.component';
import { EditarArticulosComponent } from './articulos/editar-articulos/editar-articulos.component';
import { EditarCategoriasComponent } from './categorias/editar-categorias/editar-categorias.component';
import { EditarEdipreDComponent } from './edipreD/editar-edipre-d/editar-edipre-d.component';
import { EditarPodCastComponent } from './podCast/editar-pod-cast/editar-pod-cast.component';
import { CrearArticulosComponent } from './articulos/crear-articulos/crear-articulos.component';
import { CrearEdipreDComponent } from './edipreD/crear-edipre-d/crear-edipre-d.component';
import { IndiceEdipreDComponent } from './edipreD/indice-edipre-d/indice-edipre-d.component';
import { CrearPodCastComponent } from './podCast/crear-pod-cast/crear-pod-cast.component';
import { IndicePodCastComponent } from './podCast/indice-pod-cast/indice-pod-cast.component';
import { CrearCategoriasComponent } from './categorias/crear-categorias/crear-categorias.component';
import { IndiceCategoriasComponent } from './categorias/indice-categorias/indice-categorias.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleArticulosComponent } from './articulos/detalle-articulos/detalle-articulos.component';
import { EsAdminGuard } from './es-admin.guard';
import { LoginComponent } from './seguridad/login/login.component';
import { RegistroComponent } from './seguridad/registro/registro.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},

  {path: 'categorias', component: IndiceCategoriasComponent, canActivate: [EsAdminGuard]},
  {path: 'categorias/crear', component: CrearCategoriasComponent, canActivate: [EsAdminGuard]},
  {path: 'categorias/editar/:id', component: EditarCategoriasComponent, canActivate: [EsAdminGuard]},


  {path: 'podCast', component: IndicePodCastComponent, canActivate: [EsAdminGuard]},
  {path: 'podCast/crear', component: CrearPodCastComponent, canActivate: [EsAdminGuard]},
  {path: 'podCast/editar/:id', component: EditarPodCastComponent, canActivate: [EsAdminGuard]},

  {path: 'edipreD', component: IndiceEdipreDComponent, canActivate: [EsAdminGuard]},
  {path: 'edipreD/crear', component: CrearEdipreDComponent, canActivate: [EsAdminGuard]},
  {path: 'edipreD/editar/:id', component: EditarEdipreDComponent, canActivate: [EsAdminGuard]},

  {path: 'articulos', component: CrearArticulosComponent, canActivate: [EsAdminGuard]},
  {path: 'articulos/editar/:id', component: EditarArticulosComponent, canActivate: [EsAdminGuard]},
  {path: 'articulos/buscar', component: FiltroArticulosComponent},
  {path: 'articulos/:id', component: DetalleArticulosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
