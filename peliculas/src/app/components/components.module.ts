import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PipesModule } from '../pipes/pipes.module';
import { PosterComponent } from './poster/poster.component';
import { ParesPeliculasComponent } from './pares-peliculas/pares-peliculas.component';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    PeliculasComponent,
    PosterComponent,
    ParesPeliculasComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    PeliculasComponent,
    PosterComponent,
    ParesPeliculasComponent,
    DetalleComponent
  ]
})
export class ComponentsModule { }
