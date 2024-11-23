import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
  public products: any;
  public dataSource: any;
  public displayedColumns = [ 'name', 'price','quantity','actions'];
  constructor(private productsService:ProductsService,private router:Router) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts(): void {
    this.productsService.getProducts().subscribe({
      next: (data) => {

        this.products = data._embedded?.products as Product[];
        console.log(this.products)
        this.dataSource = new MatTableDataSource(this.products);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  editProduct(id:number) {
    this.router.navigateByUrl(`/admin/edit-product/${id}`)
  }

  deleteProduct(id:number) {
    // this.productsService.deleteProduct(id).subscribe({
    //   next: data => {
    //     console.log(data);
    //     this.getProducts();
    //   },
    //   error: err => {
    //     console.log("Error: ",err);
    //   }
    // })
  }
}
