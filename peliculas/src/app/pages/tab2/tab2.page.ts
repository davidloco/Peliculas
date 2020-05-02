import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { DetalleComponent } from 'src/app/components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = '';
  buscando = false;
  peliculas: Pelicula[] = [];

  constructor(private moviesService: PeliculasService, private modalCtrl: ModalController) { }

  buscar(event) {
    const valor: string = event.detail.value;

    if (valor.length === 0) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    this.buscando = true;

    this.moviesService.buscarPeliculas(valor).subscribe(
      resp => {
        console.log(resp);
        this.peliculas = resp[`results`];
        this.buscando = false;
    });

  }
  async verDetalle(id: String) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }

}
