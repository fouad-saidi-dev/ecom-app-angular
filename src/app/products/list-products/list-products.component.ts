import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {ProductsService} from "../../services/products.service";
import {Product} from "../../models/product.model";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{
  public products: any;
  public dataSource: any;
  public displayedColumns = [ 'name', 'price','quantity','actions'];
  constructor(private productsService:ProductsService,
              private router:Router,
              private dialog:MatDialog) {
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
     this.dialog.open(ConfirmDialogComponent,{
       data: {
         title: 'Delete Product',
         message: 'Are you sure you want to delete this product?'
       },
     }).afterClosed().subscribe(result => {
       if(result){
         this.productsService.deleteProduct(id).subscribe({
           next: () => {
             this.getProducts();
           },
           error: (err) => {
             console.log(err);
           }
         })
       }
     });
  }
}
