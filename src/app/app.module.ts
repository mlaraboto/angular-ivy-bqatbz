import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ScrollingModule],
  declarations: [AppComponent, NoticiasComponent, HeaderComponent, FooterComponent,],
  bootstrap: [AppComponent]
})
export class AppModule {}
