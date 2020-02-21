
import {
    Component, 
    Input, 
    Output, 
    EventEmitter,
    OnChanges, 
    SimpleChanges, 
    OnInit, 
    DoCheck, 
    OnDestroy} from '@angular/core';
import { Product } from '../product.model';
//decorador

@Component ({
    selector: 'app-product',
    // se nombra el archivo que vamos a llamar.
    templateUrl: './product.component.html',
    // estilos se hace referencia al archivo
    styleUrls: ['./product.component.scss'],

})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy{

    @Input() product: Product;
      // El eventemitter debe tener un valor incial 
    @Output() productClicked: EventEmitter <any> = new EventEmitter();

// constructor 

today = new Date();

constructor() {
    console.log('1. constructor');

        }

ngOnChanges(changes: SimpleChanges){
            console.log('2. ngOnchanges');
          console.log(changes);
        }

ngOnInit (){
console.log ('3. ngOnInit'); 
}

ngDoCheck(){
    console.log('4. ngDoCheck');
}
ngOnDestroy(){
    console.log('5. Eliminado ngOnDestroy');
}

    // crear metodo que reacciona al click

    AddCart() {
        console.log('Justo donde invoca el metodo añadir al carrito');
        // llamamos al output, y al darle emit ingresamos el valor que queramos de acuerdo con el tipo que escogimos al hacer el Outpu
        this.productClicked.emit(this.product.id);
    }



}