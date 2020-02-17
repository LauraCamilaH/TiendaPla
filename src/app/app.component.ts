import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaPlatzi';

  // array
  items = [ 'laura', 'maria', 'nicolas'];
  // metodo agregar 
  additems() {
    this.items.push ('nuevo item');
  }
  // metodo eliminar
   deleteItems(index: number) {
     this.items.splice(index, 1);
   }
}
