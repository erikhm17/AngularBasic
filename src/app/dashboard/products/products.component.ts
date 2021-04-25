import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'image', 'button'];
  title = 'new';
  dataSource: any;
  saveBtn = true;

  public productFormGroup: FormGroup = this.formBuilder.group({
    name: [],
    description: [],
    image: [],
    price: []
  });

  constructor(private _productService: ProductService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {

  }

  edit(element: any) {

  }

  delete(element: any) {

  }

  create() {

  }

  getModelFromForm(): Product {
    let product: Product = new Product();
    product.name = this.productFormGroup.get('name')?.value;
    product.description = this.productFormGroup.get('description')?.value;
    product.price = this.productFormGroup.get('price')?.value;
    return product;
  }
}
