import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {DocumentChangeAction} from '@angular/fire/firestore/interfaces';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }
}


