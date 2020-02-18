import { Injectable } from '@nestjs/common';
import { Curso } from './interfaces/curso.interface';
import { Observable, of } from 'rxjs';
import { CreateCursoDto } from './dto/create-curso.dto';

@Injectable()
export class CursosService {
  listaCursos: Curso[] = [];
  index: number = 1;

  createCurso(createCursoDto: CreateCursoDto): Observable<Curso> {
    let response: Curso = {
      id: this.index + '',
      nombre: createCursoDto.nombre,
      descripcion: createCursoDto.descripcion,
      imgUrl: createCursoDto.imgUrl
    }
    this.index++;
    this.listaCursos.push(response);
    return of(response);
  }

  getAllCursos(): Observable<Curso[]> {
    return of(this.listaCursos);
  }

}
