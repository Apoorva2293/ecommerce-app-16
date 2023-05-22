export class PaymentDetails {
  ccNumber: string = '';
  expDate: Date = new Date();
  cvcCode: string = '';
}

export class Address {
  line1: string = '';
  line2: string = '';
  line3: string = '';
  state: string = '';
  postcode: string = '';
  country: string = '';
}

export class CheckoutForm {
  customerName: string = '';
  billingAddress: Address = new Address();
  shippingAddress: Address = new Address();
  paymentDetails: PaymentDetails = new PaymentDetails();
}






