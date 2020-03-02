import { Injectable } from '@nestjs/common';
import { Curso } from './interfaces/curso.interface';
import { Observable, of } from 'rxjs';
import { map, mergeAll } from 'rxjs/operators';
import { CreateCursoDto } from './dto/create-curso.dto';
/* Import for Mongoose */
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateCursoDto } from './dto/update-curso.dto';

@Injectable()
export class CursosService {

  constructor(@InjectModel('Curso') private readonly cursoModel: Model<Curso>) { }

  listaCursos: Curso[] = [];
  index: number = 1;

  createCurso(createCursoDto: CreateCursoDto): Observable<Curso> {
    const createdCurso = new this.cursoModel(createCursoDto);
    return of(createdCurso.save())
      .pipe(mergeAll(), map(result => {
        const a = result as any;
        const resulMapped: Curso = {
          id: a._id,
          nombre: a.nombre,
          descripcion: a.descripcion,
          imgUrl: a.imgUrl
        };
        return resulMapped;
      }));
  }

  getAllCursos(): Observable<Curso[]> {
    return of(this.cursoModel.find());
  }

  updateCursoById(id: string, updateCursoDto: UpdateCursoDto): Observable<Curso> {
    return of(this.cursoModel.findByIdAndUpdate(id, updateCursoDto, { new: true }));
  }

}
