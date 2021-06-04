import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { ScrollingModule } from '@angular/cdk';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NoticiasComponent,ScrollingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
