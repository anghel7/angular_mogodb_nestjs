import { Injectable } from '@angular/core';
import { Curso } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoHttpService {

  listaCursos: Curso[] = [];

  constructor() { }

  test(): void {
    console.log('Testing CursohttpService');
  }

  getAllCursos(): Observable<Curso[]> {
    let observableLista: Observable<Curso[]> = Observable.create(
      (observer) => {
        observer.next(this.listaCursos);
        observer.complete();
      }
    );

    return observableLista;

  }
}
