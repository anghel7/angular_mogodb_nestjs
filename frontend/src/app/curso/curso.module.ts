import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { ItemCursoComponent } from './components/item-curso/item-curso.component';


@NgModule({
  declarations: [ListaCursoComponent, ItemCursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule
  ]
})
export class CursoModule { }
