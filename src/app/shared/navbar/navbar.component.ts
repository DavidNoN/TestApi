import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() termOut: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  search(term: string): void {
    this.termOut.emit(term);
  }

}
