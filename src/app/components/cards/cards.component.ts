import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() title: string;
  @Input() imageURL: string;
  @Input() id: number;
  list: any = [];


  constructor(private movieService: MoviesService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails(): void {
    this.movieService.getDetails(this.id).subscribe(resp => {
      this.list = resp;
      console.log(this.list);
    });
  }

  getDetail(): any {

    this.router.navigate(['/detail', this.id]);

  }
}
