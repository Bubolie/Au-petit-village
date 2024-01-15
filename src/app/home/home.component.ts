import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Au Petit Village';
  products: any[] = [];
  sortOrder: 'croissant' | 'decroissant' = 'croissant';
  searchTerm: string = '';

  constructor(private router: Router, private productService: ProductsService) {} 

  moreDetails(productName: string) {
    this.router.navigate(['/product', productName])
  }

  ngOnInit(): void{
    this.products = this.productService.products
  }

  searchProduct() {

  }  
}
