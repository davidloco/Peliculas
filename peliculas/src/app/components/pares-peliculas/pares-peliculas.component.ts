import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pares-peliculas',
  templateUrl: './pares-peliculas.component.html',
  styleUrls: ['./pares-peliculas.component.scss'],
})
export class ParesPeliculasComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.2,
    freeMOde: true
  }

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  onClick() {
    this.cargarMas.emit();
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
