import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ArticuloCreacionDTO, ArticuloDTO } from '../articulos';
import { MultipleselectorMOdel } from 'src/app/utilidades/selector-multiple/MultipleSelectorModel';


@Component({
  selector: 'app-formulario-articulo',
  templateUrl: './formulario-articulo.component.html',
  styleUrls: ['./formulario-articulo.component.css'],
  
  
})
export class FormularioArticuloComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  modelo!: ArticuloDTO;

  @Output()
  OnSubmit: EventEmitter<ArticuloCreacionDTO> = new EventEmitter<
  ArticuloCreacionDTO
  >();



  @Input()
  categoriasNoSeleccionadas: MultipleselectorMOdel[] = [];

  @Input()
  categoriasSeleccionadas: MultipleselectorMOdel[] = [];

  imagenCambiada = false;


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      //titulo: [
        //'',
        //{
         // Validators: [Validators.required],
       // },
      //],
      titulo: '',
      contenido: '',
      poster: '',
      etiquetas: '',
      fechaLanzamiento: '',
      categoriasIds: '',
      articulosGratis: true,
      articulosPaga: ''

    });

    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }
  archivoSeleccionado(archivo: File) {
    this.form.get('poster')?.setValue(archivo);
    this.imagenCambiada = true;
  }

  changeMarkdown(texto: any){
    this.form.get('contenido')?.setValue(texto);
  }
  guardarCambios(){
    
    const categoriasIds = this.categoriasSeleccionadas.map(val => val.llave);
    this.form.get('categoriasIds')?.setValue(categoriasIds);
    
    if (!this.imagenCambiada){
      this.form.patchValue({'poster': null});
    }

    this.OnSubmit.emit(this.form.value);
    

  }

}
