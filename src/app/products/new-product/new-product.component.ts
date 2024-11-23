import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersService} from "../../services/customers.service";
import {Customer} from "../../models/customer.model";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent implements OnInit{
  public productForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private productsService:ProductsService) {
  }
  ngOnInit(): void {
    this.productForm=this.formBuilder.group({
      name:this.formBuilder.control('',Validators.required),
      price:this.formBuilder.control('',[Validators.required]),
      quantity:this.formBuilder.control('',[Validators.required])
    })
  }

  async AddProduct() {
    let product:Product = this.productForm.value;
    console.log("Product Data: ",product);
    this.productsService.createProduct(product).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log("Error: ",err);
      }
    })
  }

  onCancel() {
     this.productForm.reset();
  }
}
