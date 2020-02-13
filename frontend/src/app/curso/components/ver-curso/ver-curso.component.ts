import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CursoHttpService } from '../../services/curso-http.service';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {

  curso: Curso;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cursoHttpService: CursoHttpService) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(
        (paramMap: ParamMap) => {
          if (paramMap.get('id')) {
            this.recuperarCurso(paramMap.get('id'));
          }
        }
      );
  }

  private recuperarCurso(id: string): void {
    this.cursoHttpService.getCursoById(id)
      .subscribe(
        (result) => {
          this.curso = result;
        },
        (error) => {
          console.log('Error al recuperar Curso: ', error);
        }
      );
  }

}
