import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-item-curso',
  templateUrl: './item-curso.component.html',
  styleUrls: ['./item-curso.component.css']
})
export class ItemCursoComponent implements OnInit {

  @Input()
  cursoItem: Curso;

  @Output()
  nombreEmmitter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  enviarNombre(nombreCurso: string): void {
    console.log('trandondo de enviar: ', nombreCurso);
    this.nombreEmmitter.emit(nombreCurso);
  }
}
