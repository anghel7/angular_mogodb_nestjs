import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { ItemCursoComponent } from './components/item-curso/item-curso.component';
import { MaterialModule } from '../material.module';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HiglightDirective } from './directives/higlight.directive';


@NgModule({
  declarations: [
    ListaCursoComponent,
    ItemCursoComponent,
    VerCursoComponent,
    CrearCursoComponent,
    EditarCursoComponent,
    HiglightDirective
  ],
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CursoModule { }
