import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productlist/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
productItem=new IProduct(null,null,null,null,null,null,null,null)

  constructor(private producService: ProductService) { }

  ngOnInit() {
  }
Addproduct()
{
  this.producService.newProduct(this.productItem);
  alert("Success");
}
}
