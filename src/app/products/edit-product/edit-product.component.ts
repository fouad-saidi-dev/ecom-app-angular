import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent implements OnInit{
  public editProductForm!:FormGroup;
  public productId!:number
  constructor(private formBuilder:FormBuilder,private productsService:ProductsService,private route:ActivatedRoute) {
  }
  ngOnInit(): void {

    this.productId=this.route.snapshot.params['id'];

    console.log("Product Id: ",this.productId)
    this.productsService.getProduct(this.productId).subscribe({
      next: (product:Product) => {
        console.log("Product: ",product)
        this.editProductForm=this.formBuilder.group({
          id: this.formBuilder.control(product.id),
          name: this.formBuilder.control(product.name),
          price: this.formBuilder.control(product.price),
          quantity: this.formBuilder.control(product.quantity)
        })
      },
      error: err => {
        console.log("Error: ",err);
      }
    })
  }

  async EditProduct() {
    let product:Product = this.editProductForm.value;
    console.log("Product Data: ",product);
    this.productsService.updateProduct(product).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log("Error: ",err);
      }
    })
  }

  onCancel() {

  }
}
