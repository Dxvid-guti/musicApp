import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  songList: any[] = [
    { numero: 1, nombre: 'CUANDO BAJE EL SOL', icono: 'ellipsis-horizontal-outline', imagen: './../../assets/saturno.jpg' },
    { numero: 2, nombre: 'BESO', icono: 'ellipsis-horizontal-outline', imagen: './../../assets/beso.jpg' },
    { numero: 3, nombre: 'LOVE', icono: 'ellipsis-horizontal-outline', imagen: './../../assets/love.jpg' },
    { numero: 4, nombre: 'Sola (Remix)', icono: 'ellipsis-horizontal-outline', imagen: './../../assets/sola.jpg' },
    { numero: 5, nombre: 'Tokyo', icono: 'ellipsis-horizontal-outline', imagen: './../../assets/tokyo.jpg' },
    { numero: 6, nombre: 'Obsesionado', icono: 'ellipsis-horizontal-outline', imagen: './../../assets/obsesionado.jpg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
