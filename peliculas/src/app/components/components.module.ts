import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculasComponent } from './peliculas/peliculas.component';



@NgModule({
  declarations: [
    PeliculaComponent,
    PeliculasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PeliculasComponent
  ]
})
export class ComponentsModule { }
