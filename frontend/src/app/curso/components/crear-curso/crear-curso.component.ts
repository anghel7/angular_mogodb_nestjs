import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      descripcion: new FormControl(''),
      imgUrl: new FormControl(''),
    });
  }

  ngOnInit() {
  }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

}
