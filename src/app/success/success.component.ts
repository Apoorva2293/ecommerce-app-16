import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent {
  cartTotal: number = 0;

  constructor() {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.cartTotal = cart.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
    sessionStorage.clear();
  }

  generateReferenceNumber() {
    // Logic to generate a random reference number
    return 'REF12345';
  }
}