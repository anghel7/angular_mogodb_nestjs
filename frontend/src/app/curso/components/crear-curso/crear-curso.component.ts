import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { CursoHttpService } from '../../services/curso-http.service';

@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  form: FormGroup;



  constructor(private fb: FormBuilder,
    private cursoHttpService: CursoHttpService) {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      descripcion: new FormControl(''),
      imgUrl: new FormControl(''),
    });
  }

  ngOnInit() {
    this.cursoHttpService.test();
  }

  crearCurso(): void {
    this.cursoHttpService.createCruso(this.form.value)
      .subscribe(
        (result) => {
          console.log('CURSO CREADO: ', result);
        },
        (error) => {
          console.log('ERROR: ', error);
        }
      );
  }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }

}
