import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  cursoSeleccionado: string = '';

  listaCursos: Curso[] = [
    {
      nombre: 'Angular',
      descripcion: 'Angular es un framework ........',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      nombre: 'VueJs',
      descripcion: 'VueJs es un framework ........',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    },
    {
      nombre: 'React',
      descripcion: 'React es un framework ........',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  recibirNombre(nombreCurso: string): void {
    console.log('Recibiendo datos del componente hijo: ', nombreCurso);
    this.cursoSeleccionado = nombreCurso;
  }

}
