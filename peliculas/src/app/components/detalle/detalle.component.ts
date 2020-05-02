import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle={};
  actores: Cast[] = [];
  leerMas = 150;

  slideActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  constructor(private moviesService: PeliculasService, private modal: ModalController) { }

  ngOnInit() {
    console.log('id', this.id);
    this.moviesService.getPeliculaDetalle(this.id).subscribe(
      resp => {
        console.log(resp);
        this.pelicula = resp;
      }
    )
    this.moviesService.getActoresDetalle(this.id).subscribe(
      resp => {
        console.log(resp);
        this.actores = resp.cast;
      }
    )
  }

  regresar(){
    this.modal.dismiss();
  }

}
