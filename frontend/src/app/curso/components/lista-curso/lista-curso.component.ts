import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-curso',
  templateUrl: './lista-curso.component.html',
  styleUrls: ['./lista-curso.component.css']
})
export class ListaCursoComponent implements OnInit {

  listaCursos: string[] = ['JavaScript', 'Laravel', 'Php', 'Angular', 'React'];

  constructor() { }

  ngOnInit() {
  }

}
