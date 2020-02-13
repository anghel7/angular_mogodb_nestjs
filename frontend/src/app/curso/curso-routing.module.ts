import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';
import { CrearCursoComponent } from './components/crear-curso/crear-curso.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaCursoComponent
  },
  {
    path: 'editar',
    component: EditarCursoComponent
  },
  {
    path: 'ver/:id',
    component: VerCursoComponent
  },
  {
    path: 'crear',
    component: CrearCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
