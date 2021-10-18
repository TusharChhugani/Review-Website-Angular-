import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { SignUpComponent } from './user/sign-up/sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
  
    SignInComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
   
    BrowserAnimationsModule,
  ],
  providers: [],
    
    
     
 
  bootstrap: [AppComponent]
})
export class AppModule { }
