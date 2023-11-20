import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})

export class SearchPage implements OnInit {

  songList: any[] = [
    { numero: 1, nombre: 'Cancion 1', icono: 'play', imagen: './../../assets/antesAmeri.jpeg' },
    { numero: 2, nombre: 'Cancion 2', icono: 'play', imagen: './../../assets/antesAmeri.jpeg' },
    { numero: 3, nombre: 'Canción 3', icono: 'play', imagen: './../../assets/antesAmeri.jpeg' },
    // Agrega más elementos según sea necesario
  ];

  constructor() { }

  ngOnInit() {
  }

}
