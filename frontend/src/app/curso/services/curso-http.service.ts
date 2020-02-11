import { Injectable } from '@angular/core';
import { Curso } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoHttpService {

  listaCursos: Curso[] = [];

  constructor() {
    this.fillCursos();
  }

  test(): void {
    console.log('Testing CursohttpService');
  }

  getAllCursos(): Observable<Curso[]> {
    const observableLista: Observable<Curso[]> = Observable.create(
      (observer) => {
        setTimeout(() => {
          observer.next(this.listaCursos);
          observer.complete();
        }, 1000);
      }
    );
    return observableLista;
  }

  createCruso(curso: Curso): Observable<Curso> {
    const observableCrear: Observable<Curso> = Observable.create(
      (observer) => {
        if (!curso) {
          observer.error(new Error('NO SE ACEPTAN VALORES INDEFINIDOS'));
        } else {
          this.listaCursos.push(curso);
          observer.next(curso);
        }
        observer.complete();
      }
    );
    return observableCrear;
  }

  private fillCursos(): void {
    this.listaCursos.push({
      nombre: 'Angular',
      descripcion: 'Angular es un framework ........',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    });

    this.listaCursos.push({
      nombre: 'VueJs',
      descripcion: 'VueJs es un framework ........',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    });

    this.listaCursos.push({
      nombre: 'React',
      descripcion: 'React es un framework ........',
      imgUrl: 'https://angular.io/assets/images/logos/angular/angular.svg'
    });
  }
}
