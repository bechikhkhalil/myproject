import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CreercompteComponent } from './creercompte/creercompte.component';


@NgModule({
  declarations: [
    AppComponent,
    CreercompteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Include FormsModule here
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
