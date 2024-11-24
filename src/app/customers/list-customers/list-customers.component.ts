import {Component, OnInit, ViewChild} from '@angular/core';
import {CustomersService} from "../../services/customers.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {Customer} from "../../models/customer.model";
import {Router} from "@angular/router";
import {ConfirmDialogComponent} from "../../components/confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrl: './list-customers.component.css'
})
export class ListCustomersComponent implements OnInit {
  public customers: any;
  public dataSource: any;
  public displayedColumns = ['id', 'name', 'email','actions'];
  constructor(private customersService:CustomersService,
              private router:Router,
              private dialog:MatDialog) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getCustomers()
  }

  public getCustomers(): void {
    this.customersService.getCustomers().subscribe({
      next: (data) => {

        this.customers = data._embedded?.customers as Customer[];
        console.log(this.customers)
        this.dataSource = new MatTableDataSource(this.customers);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteCustomer(id:number) {
     this.dialog.open(ConfirmDialogComponent,{
       data: {
         title: 'Delete Customer',
         message: 'Are you sure you want to delete this customer?'
       },
     }).afterClosed().subscribe(result => {
       if(result){
         this.customersService.deleteCustomer(id).subscribe({
           next: () => {
             this.getCustomers();
           },
           error: (err) => {
             console.log(err);
           }
         });
       }
     })
  }

  editCustomer(id:number) {
    this.router.navigateByUrl(`/admin/edit-customer/${id}`)
  }
}
