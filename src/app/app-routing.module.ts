import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { MovieComponent } from './movie/movie.component';
import { AnimeComponent } from './anime/anime.component';
import { GamesComponent } from './games/games.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { SingleComponent } from './single/single.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch:'full'
  },
  {
    path: 'reviews', component: ReviewsComponent
  },
  {
    path: 'news', component: NewsComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'movie', component: MovieComponent
  },
  {
    path: 'anime', component: AnimeComponent
  },
  {
    path: 'games', component: GamesComponent
  },
  {
    path: 'documentary', component: DocumentaryComponent
  },
  {
    path: 'tvshows', component: TvshowsComponent
  },
  {
    path: 'single', component: SingleComponent
  },
  {
    path: 'single', component: SingleComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'team', component: TeamComponent
  }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
