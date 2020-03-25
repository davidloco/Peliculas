import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultObject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  getPropiedadesPeli() {
    return this.http.get<ResultObject>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-01&primary_release_date.lte=2020-04-01&api_key=2d6627fdf9e2244cb0a11492f4b8c0e8&language=es&include_image_language=es`);
  }
}
