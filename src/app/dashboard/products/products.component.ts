import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  isEditable:boolean = false;
  id:string = '';

  public productFormGroup: FormGroup = this.formBuilder.group({
    name: [],
    description: [],
    price: [],
    image: []
  });

  constructor(private _productService: ProductService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    // rxjs
    this._productService.getProducts().subscribe((result) => {
      console.log('El resultado del firebase es ', result);
      this.dataSource = result.map((doc: any) => {
        return {
          id: doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        };
      });
    });
  }

  // tabla
  edit(element: any) {
    this.isEditable = true;
    this.productFormGroup.controls['name'].setValue(element.name);
    this.productFormGroup.controls['description'].setValue(element.description);
    this.productFormGroup.controls['price'].setValue(element.price);
    this.id = element.id;
  }
  updateRecord(){

    let product = this.getModelFromForm();

    this._productService.updateProduct(this.id,product).then(value => {
      console.log("editado correctamente", value)
      this.isEditable = false;
      this.id = '';
      this.productFormGroup.reset();
    })


  }
  delete(element: any) {
    this._productService.deleteProduct(element.id).then(value => {
      console.log('eliminado correctamente');
    });
  }

  create() {
    let product = this.getModelFromForm();
    this._productService.createProducts(product).then(value=>{
      console.log("created success", value);
      this.productFormGroup.reset();
    })
  }

  /**
   * Input: FormType
   * Output: Model
   * */
  getModelFromForm(): Product {
    let product: Product = new Product();
    product.name = this.productFormGroup.get('name')?.value;
    product.description = this.productFormGroup.get('description')?.value;
    product.price = this.productFormGroup.get('price')?.value;
    return product;
  }
}
