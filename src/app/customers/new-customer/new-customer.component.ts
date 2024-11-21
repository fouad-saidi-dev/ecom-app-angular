import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersService} from "../../services/customers.service";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit{
  public customerForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,private customerService:CustomersService) {
  }
  ngOnInit(): void {
     this.customerForm=this.formBuilder.group({
       name:this.formBuilder.control('',Validators.required),
       email:this.formBuilder.control('',[Validators.required,Validators.email])
     })
  }

  async AddCustomer() {
     let customer = this.customerForm.value;
     console.log("Customer Data: ",customer);
     this.customerService.createCustomer(customer).subscribe({
       next: (data) => {
         console.log(data);
       },
       error: (err) => {
         console.log(err);
       }
     })
  }

  onCancel() {

  }
}
