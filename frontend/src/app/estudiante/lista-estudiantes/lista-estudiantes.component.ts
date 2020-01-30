import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEStudiantesComponent implements OnInit {

  titulo: string = 'Lista de estudiantes.';
  curso: string = 'Base de datos';
  urlGoogle: string = 'https://www.google.com/';
  urlImgGoogle: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
  nameButton: string = 'cambiar imagen';
  x: string = '>>>>>';
  constructor() { }

  ngOnInit() {
  }

  cambiarUrlImagen(): void {
    this.urlImgGoogle = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjBZ78scBh0Tk8z1vzAXEiMoen6nActZxsSaHFp3gwkGz5jC9&s';
    this.nameButton = 'duckduckbrowser';
  }

}
