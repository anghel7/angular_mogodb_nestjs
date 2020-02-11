import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models';
import { CursoHttpService } from '../../services/curso-http.service';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  cursoSeleccionado: string = '';

  listaCursos: Curso[] = [];

  constructor(private cursoHttpService: CursoHttpService) { }

  ngOnInit() {
    this.cursoHttpService.getAllCursos()
      .subscribe(
        // next
        (result) => {
          console.log('RESULT: ', result);
          this.listaCursos = result;
        },
        // error
        (error) => {
          console.log('Ocurrio un error al recuperar la lista de cursos', error);

        },
        // complete
        () => {
          console.log('El observable termino e ejecutarse.');

        }
      );
  }

  recibirNombre(nombreCurso: string): void {
    console.log('Recibiendo datos del componente hijo: ', nombreCurso);
    this.cursoSeleccionado = nombreCurso;
  }

}
