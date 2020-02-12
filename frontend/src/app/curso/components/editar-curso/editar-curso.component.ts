import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CursoHttpService } from '../../services/curso-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private cursoHttpService: CursoHttpService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
      descripcion: new FormControl(''),
      imgUrl: new FormControl(''),
    });
  }

  ngOnInit() {
    this.cursoHttpService.test();
  }

  editarCurso(): void {
  }

  get nombre(): FormControl {
    return this.form.get('nombre') as FormControl;
  }
}
