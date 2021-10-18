import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { MovieComponent } from './movie/movie.component';
import { AnimeComponent } from './anime/anime.component';
import { TvshowsComponent } from './tvshows/tvshows.component';
import { GamesComponent } from './games/games.component';
import { DocumentaryComponent } from './documentary/documentary.component';
import { SingleComponent } from './single/single.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewsComponent,
    ContactComponent,
    NewsComponent,
    MovieComponent,
    AnimeComponent,
    TvshowsComponent,
    GamesComponent,
    DocumentaryComponent,
    SingleComponent,
    UserComponent,
    LoginComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
