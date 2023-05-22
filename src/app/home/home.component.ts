import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './service/home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  products: any[] = [];
  subscription!: Subscription;

  constructor(private productService: ProductService, private http: HttpClient, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.subscription = this.productService.getProducts().subscribe(response => this.products = response);
  }
  showNotification(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Adjust the duration as needed
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  addToCart(product: any) {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    const existingItem = cart.find((item: any) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    // Show the notification
    this.showNotification('Added to basket');
  }

ngOnDestroy() {
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}
}