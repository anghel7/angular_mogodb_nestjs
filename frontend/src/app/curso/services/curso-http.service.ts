import { Injectable } from '@angular/core';
import { Curso } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CursoHttpService {

  listaCursos: Curso[] = [];

  constructor() { }

  test(): void {
    console.log('Testing CursohttpService');
  }
}
