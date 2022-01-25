import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movieUrl = "http://127.0.0.1:8000/api/movies";

  constructor(private http : HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.movieUrl}`);
  }

}
