import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import products from '../../assets/products.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Au Petit Village'

  products: any[] = products;

  constructor(private router: Router) {} 

  moreDetails(productName: string) {
    this.router.navigate(['/product', productName])
  }
    
}
