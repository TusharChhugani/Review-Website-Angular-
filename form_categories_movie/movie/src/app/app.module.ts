import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
   
  ],
  exports: [
    MovieComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
