import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { categoriaCreacionDTO } from '../categoria';

@Component({
  selector: 'app-formulario-categoria',
  templateUrl: './formulario-categoria.component.html',
  styleUrls: ['./formulario-categoria.component.css']
})
export class FormularioCategoriaComponent implements OnInit {

  constructor( private formBuilder: FormBuilder) { }

  form!: FormGroup;
  @Input()
  modelo!: categoriaCreacionDTO;

  @Output()
  onSubmit: EventEmitter<categoriaCreacionDTO> = new EventEmitter<categoriaCreacionDTO>();


  ngOnInit(): void {
   this.form = this.formBuilder.group({
     nombre: ['', {
       validators: [Validators.required, Validators.minLength(3)]
     }]
   });
   if (this.modelo !== undefined){
     this.form.patchValue(this.modelo);
   }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo?.hasError('required')){
      return 'El campo nombre es requerido';
    }
    if(campo?.hasError('minlength')){
      return 'La longitud minima es de 3 caracteres'
    }
    return'';

  }

}
