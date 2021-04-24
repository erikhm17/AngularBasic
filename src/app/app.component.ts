import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hola mundo';

  constructor() {

  }

  ngOnInit(): void {
   console.log("App component creado")
  }
}
