import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  bajar(product) {
    product.comprado = !product.comprado;
  }

  constructor( public db: AngularFireDatabase) { }

  altaproducto(product, nombreProducto: string, descripcionProducto: string) {
    this.bajar(product);
    this.db.object('products/product/' + nombreProducto.toString()).update({descripcion: descripcionProducto});
    console.log('Producto insertado');
  }

  bajaproducto(product, nombreProducto: string) {
    this.bajar(product);
    this.db.object('products/product/' + nombreProducto).remove();
    console.log('Producto eliminado');
  }
}
