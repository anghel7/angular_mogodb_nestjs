import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ListaEStudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';


@NgModule({
  declarations: [ListaEStudiantesComponent],
  imports: [
    CommonModule,
    FormsModule,
    EstudianteRoutingModule
  ]
})
export class EstudianteModule { }
