import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {DocumentChangeAction} from '@angular/fire/firestore/interfaces';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private angularService: AngularFirestore) {
  }

  public getProducts(): Observable<any> {
    return this.angularService.collection('products').snapshotChanges();
  }

  public createProducts(data: Product) {
    return this.angularService.collection('products').add(Object.assign({}, data));
  }

  public updateProduct(id: string, data: Product) {
    return this.angularService.collection('products').doc(id).set(Object.assign({}, data));
  }

  public deleteProduct(productId: string) {
    return this.angularService.collection('products').doc(productId).delete();
  }
}


