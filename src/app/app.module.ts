import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { ProductComponent } from './componets/product.componets';
import { CartComponent } from './cart/cart.component';
import { ExponencialPipe } from './exponencial.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponencialPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
