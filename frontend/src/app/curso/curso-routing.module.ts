import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaCursoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
