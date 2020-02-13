import { Injectable } from '@angular/core';
import { Curso } from '../models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CursoHttpService {

  constructor(private http: HttpClient) { }

  test(): void {
    console.log('Testing CursohttpService');
  }

  getAllCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${API_URL}/courses`);
  }

  createCruso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${API_URL}/courses`, curso);
  }

  getCursoById(id: string): Observable<Curso> {
    return this.http.get<Curso>(`${API_URL}/courses/${id}`);
  }
}