import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  cartItems: any[] = [];
  cartTotal: number = 0;

  constructor() {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.cartItems = cart;
    this.calculateCartTotal();
  }

  increaseQuantity(item: any) {
    item.quantity += 1;
    this.calculateCartTotal();
    this.saveCartItems();
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      this.calculateCartTotal();
      this.saveCartItems();
    }
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
    this.calculateCartTotal();
    this.saveCartItems();
  }

  calculateCartTotal() {
    this.cartTotal = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  saveCartItems() {
    sessionStorage.setItem('cart', JSON.stringify(this.cartItems));
  }
}