import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { CheckoutForm } from './checkout.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent  implements OnInit {
  checkoutForm!: UntypedFormGroup;
  checkoutData!: CheckoutForm;
  cartTotal: number = 0;
  cartItems: number = 0;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router) {}

  ngOnInit() {
    const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
    this.cartTotal = cart.reduce(
      (total: number, item: any) => total + item.price * item.quantity,
      0
    );
    this.cartItems =  cart.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    );
    this.checkoutForm = this.formBuilder.group({
      customerName: ['', Validators.required],
      billingAddress: this.formBuilder.group({
        line1: ['', Validators.required],
        line2: [''],
        line3: [''],
        state: ['', Validators.required],
        postcode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      shippingAddress: this.formBuilder.group({
        line1: ['', Validators.required],
        line2: [''],
        line3: [''],
        state: ['', Validators.required],
        postcode: ['', Validators.required],
        country: ['', Validators.required]
      }),
      paymentDetails: this.formBuilder.group({
        ccNumber: ['', Validators.required],
        expDate: ['', Validators.required],
        cvcCode: ['', Validators.required]
      })
    });
  }
  onSubmit() {
    // Proceed to payment logic
    this.router.navigate(['/basket/success']);
  }
}