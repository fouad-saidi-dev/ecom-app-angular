import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BillsService} from "../../services/bills.service";
import {Bill} from "../../models/bill.model";

@Component({
  selector: 'app-new-bill',
  templateUrl: './new-bill.component.html',
  styleUrl: './new-bill.component.css'
})
export class NewBillComponent implements OnInit{
  public billForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private billsService:BillsService) {
  }
  ngOnInit(): void {
    this.billForm=this.formBuilder.group({
      customerId:this.formBuilder.control('',Validators.required),
    })
  }

  async AddBill() {
    let bill:Bill = this.billForm.value;
    console.log("Bill Data: ",bill);
    this.billsService.createBill(bill).subscribe({
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
