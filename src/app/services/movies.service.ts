import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseURL = environment.apiURL;


  constructor(private http: HttpClient) {
  }

  search(term): Observable<any> {
    return this.http.get(this.baseURL + '/search/shows?q=' + term);
  }

  getDetails(id: number): Observable<any> {
    return this.http.get(this.baseURL + 'shows/' + id);
  }

}
