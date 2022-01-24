import { Component, OnInit } from '@angular/core';
import { MovieService } from './../movie.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  //movies = [
  //  {id: 1, titulo: 'Invocação do Mal'}
  //];

  movies = Array<any>();

  constructor(private movieService:  MovieService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.movieService.listar().subscribe(dados => this.movies = dados);
  }

}
