import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PipesModule } from '../pipes/pipes.module';
import { PosterComponent } from './poster/poster.component';



@NgModule({
  declarations: [
    PeliculaComponent,
    PeliculasComponent,
    PosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    PeliculasComponent,
    PosterComponent
  ]
})
export class ComponentsModule { }
