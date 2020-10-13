import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'pruebaTecnica';
  list: any = [];
  boolean = false;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  }

  loadSearch(term: string): void {
      this.moviesService.search(term).subscribe((response: any) => {
        this.list.push(...response);
        console.log(this.list);
      });
  }

}
