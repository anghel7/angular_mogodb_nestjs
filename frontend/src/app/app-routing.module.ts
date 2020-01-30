import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'estudiantes-adm',
    loadChildren: () => import('./estudiante/estudiante.module')
      .then(m => m.EstudianteModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./curso/curso.module')
      .then(m => m.CursoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
