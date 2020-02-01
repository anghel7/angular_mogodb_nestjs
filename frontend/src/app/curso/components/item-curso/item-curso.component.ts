import { Component, OnInit, Input } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-item-curso',
  templateUrl: './item-curso.component.html',
  styleUrls: ['./item-curso.component.css']
})
export class ItemCursoComponent implements OnInit {

  @Input()
  curso: Curso;

  constructor() { }

  ngOnInit() {
  }

}
