import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEStudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';


const routes: Routes = [
  {
    path: 'listaestudiantes',
    component: ListaEStudiantesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
