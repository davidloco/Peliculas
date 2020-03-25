import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit() {
    this.peliculasService.getPropiedadesPeli().subscribe(resp => {
      console.log('peliculas', resp);
      this.peliculas.push(...resp.results);
    });
  }

}
