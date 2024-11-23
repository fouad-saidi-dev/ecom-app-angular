import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CustomersService} from "../../services/customers.service";
import {Customer} from "../../models/customer.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrl: './edit-customer.component.css'
})
export class EditCustomerComponent implements OnInit{
  public editCustomerForm!:FormGroup;
  public customerId!:number
  constructor(private formBuilder:FormBuilder,private customerService:CustomersService,private route:ActivatedRoute) {
  }
  ngOnInit(): void {

    this.customerId=this.route.snapshot.params['id'];

    console.log("Customer Id: ",this.customerId)
    this.customerService.getCustomer(this.customerId).subscribe({
      next: (customer:Customer) => {
        console.log("Customer: ",customer)
        console.log("Customer Name: ",customer.name)
        this.editCustomerForm=this.formBuilder.group({
          id: [customer.id],
          name: [customer.name, Validators.required], // Check here
          email: [customer.email, [Validators.required, Validators.email]]
        })
      },
      error: err => {
        console.log("Error: ",err);
      }
    })
  }

  async EditCustomer() {
    let customer:Customer = this.editCustomerForm.value;
    let id:number=customer.id
    console.log("Customer Data: ",customer);
    this.customerService.updateCustomer(id,customer).subscribe({
      next: data => {
        console.log(data);
      },
      error: err => {
        console.log("Error: ",err);
      }
    })
  }

  onCancel() {
    this.editCustomerForm.reset()
  }
}
