import { Component, OnInit } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-ver-curso',
  templateUrl: './ver-curso.component.html',
  styleUrls: ['./ver-curso.component.css']
})
export class VerCursoComponent implements OnInit {

  curso: Curso;

  constructor() { }

  ngOnInit() {
  }

}
