
import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component ({
    selector: 'app-product',
    // se nombra el archivo que vamos a llamar.
    templateUrl: './product.component.html'
})
export class ProductComponent {

    @Input() product: Product;
      // El eventemitter debe tener un valor incial 
    @Output() productClicked: EventEmitter <any> = new EventEmitter();

// constructor 

constructor() {
    console.log('constructor');

}

    // crear metodo que reacciona al click

    AddCart() {
        console.log('Justo donde invoca el metodo añadir al carrito');
        // llamamos al output, y al darle emit ingresamos el valor que queramos de acuerdo con el tipo que escogimos al hacer el Outpu
        this.productClicked.emit(this.product.id);
    }



}