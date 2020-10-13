import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieDetailComponent} from './pages/movie-detail/movie-detail.component';
import {HomeComponent} from './pages/home/home.component';

const routes: Routes = [
  { path: 'detail/:id', component: MovieDetailComponent},
  { path: 'home', component: HomeComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

