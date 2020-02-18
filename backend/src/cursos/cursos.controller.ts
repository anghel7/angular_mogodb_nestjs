import { Controller, Post, Put, Delete, Get, Body, Param } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { Observable } from 'rxjs';
import { CursosService } from './cursos.service';
import { Curso } from './interfaces/curso.interface';

@Controller('cursos')
export class CursosController {

  constructor(private readonly cursosService: CursosService) { }

  @Post()
  createCurso(@Body() createCursoDTO: CreateCursoDto): Observable<Curso> {
    return this.cursosService.createCurso(createCursoDTO);
  }

  @Put()
  updateCurso(@Param('id') id: string, @Body() updateCursoDTO: UpdateCursoDto): string {
    return "updateCurso Works";
  }

  @Delete(':id')
  deleteCurso(@Param('id') id: string): string {
    return "deleteCurso Works";
  }

  @Get()
  getAllCursos(): Observable<Curso[]> {
    return this.cursosService.getAllCursos();
  }

  @Get(':id')
  getCursoById(@Param('id') id: string): string {
    return "getCursoByIdf Works";
  }

}
