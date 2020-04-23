import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: Pelicula[] = [];
  populares: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) { }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.peliculasService.getPopulares().subscribe(resp => {
      const arrtemp = [...this.populares, ...resp.results];
      this.populares = arrtemp;
    });
  }

  ngOnInit() {
    this.peliculasService.getPropiedadesPeli().subscribe(resp => {
      this.peliculas.push(...resp.results);
    });

    this.getPopulares();

  }


}
