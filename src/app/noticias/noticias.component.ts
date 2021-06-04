import { Component, OnInit } from '@angular/core';
import datosNoticia from '../data/noticias.json';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  Noticias: any = datosNoticia;
}
