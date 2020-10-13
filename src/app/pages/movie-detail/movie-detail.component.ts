import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  private sub: any;
  id: number;
  resp: any;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MoviesService) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params[`id`];
    });

    this.loadDetails();
  }

  loadDetails(): void {
    this.movieService.getDetails(this.id).subscribe((response: any) => {
      this.resp = response;
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/home');
  }


}
