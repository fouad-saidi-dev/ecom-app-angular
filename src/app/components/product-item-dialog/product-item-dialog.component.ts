import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-product-item-dialog',
  templateUrl: './product-item-dialog.component.html',
  styleUrl: './product-item-dialog.component.css'
})
export class ProductItemDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
