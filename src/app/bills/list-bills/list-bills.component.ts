import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {BillsService} from "../../services/bills.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductItemDialogComponent} from "../../components/product-item-dialog/product-item-dialog.component";

@Component({
  selector: 'app-list-bills',
  templateUrl: './list-bills.component.html',
  styleUrl: './list-bills.component.css'
})
export class ListBillsComponent implements OnInit{
  public bills: any;
  public dataSource: any;
  public displayedColumns = ['id', 'billingDate','actions'];
  constructor(private billsService:BillsService,private dialog:MatDialog) {
  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  ngOnInit(): void {
    this.getBills()
  }

  public getBills(): void {
    this.billsService.getBills().subscribe({
      next: (data) => {

        this.bills = data;
        console.log(this.bills)
        this.dataSource = new MatTableDataSource(this.bills);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  public displayProductItems(productItems: any[]): void {
    this.dialog.open(ProductItemDialogComponent, {
      width: '500px',
      data: { productItems }
    });
  }
}
