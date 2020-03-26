import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultObject } from '../interfaces/interfaces';
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

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = URL + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }

  getPropiedadesPeli() {
    let mesTexto;
    if(mesActual < 10)mesTexto = '0' + mesActual;else mesTexto = mesActual;
    const inicio = `${hoy.getFullYear()}-${mesTexto}-01`;
    const fin = `${hoy.getFullYear()}-${mesTexto}-${ultimoDiaMes}`;
    return this.ejecutarQuery<ResultObject>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`);
  }

  getPopulares(){
    const query = `/discover/movie?sort_by=popularity.desc`;
    return this.ejecutarQuery<ResultObject>(query);
  }
}
