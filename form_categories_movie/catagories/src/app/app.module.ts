import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoeriesComponent } from './categoeries/categoeries.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoeriesComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   

  ],
  exports: [CategoeriesComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
