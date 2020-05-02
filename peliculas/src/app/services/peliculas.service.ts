import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultObject, PeliculaDetalle, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const URL = environment.url;
const apiKey = environment.apiKey;
const hoy = new Date();
const ultimoDiaMes = new Date(hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate();
const mesActual = hoy.getMonth() + 1;

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private popularesPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    console.log(query);
    return this.http.get<T>(query);
  }

  getPropiedadesPeli() {
    let mesTexto;
    if (mesActual < 10) mesTexto = '0' + mesActual; else mesTexto = mesActual;
    const inicio = `${hoy.getFullYear()}-${mesTexto}-01`;
    const fin = `${hoy.getFullYear()}-${mesTexto}-${ultimoDiaMes}`;
    return this.ejecutarQuery<ResultObject>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc${this.popularesPage}`;
    return this.ejecutarQuery<ResultObject>(query);
  }

  getPeliculaDetalle(id: string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`);
  }

  getActoresDetalle(id: string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`);
  }
}
