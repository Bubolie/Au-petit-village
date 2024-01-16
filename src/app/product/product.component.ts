import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  productName: string = '';
  products: any;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductsService
    ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productName = params.get('name') || '';
      this.productDetails();
    });
  }

  productDetails() {
      this.products = this.productService.products.find(product => product.name === this.productName)
      if(!this.products) {
        if (!this.productDetails) {
          console.error('Produit non trouvé pour le nom:', this.productName);
           
      }
    }
  }
}
