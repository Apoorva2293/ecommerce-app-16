import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { BasketComponent } from './basket.component';
import { CheckoutComponent } from '../checkout/checkout.component';
import { SuccessComponent } from '../success/success.component';

@NgModule({
  declarations: [
    BasketComponent,
    CheckoutComponent,
    SuccessComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild([
      { path: '', component: BasketComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'success', component: SuccessComponent }
    ])
  ]
})
export class BasketModule { }
