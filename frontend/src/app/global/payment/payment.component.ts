import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import { Course } from 'src/app/model/course.model';
import { PaymentService } from 'src/app/service/payment.service';
import Swal from 'sweetalert2';
import { loadStripe } from '@stripe/stripe-js';
import { baseURL } from 'src/app/constants/constants';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  @Input() course: Course;

  elements;
  stripe;
  clientSecret;
  openStripe: boolean = false;
  constructor(private paymentService: PaymentService,
  ) {

  }

  ngOnInit(): void {
    console.log(this.course);
    this.invokeStripe();

  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://js.stripe.com/v3/';
      script.onload = () => {
        this.stripe = (<any>window).Stripe('pk_test_51LYUvnBVDibabXHisH0GvAI2H39DwKOoMLKVVVTNvqu4niaeCnMpQdJVkGQlPrOpDqjn6n6JBUpZt6tpr8swrH4u00IWn8PtCa');
      };
      window.document.body.appendChild(script);
    }
  }



  preparePayment() {
    const data = { via: 'stripe',
      courseId: this.course.id

    };
    this.paymentService.getClientSecret(data).subscribe(
      {
        next: (response: AppResponse) => {
          this.clientSecret = response.data;
          this.initialize();
        },
        error: (error: AppResponse) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.status + " " + error.statusText
          });
        }
      });
  }





  async initialize() {
    const clientSecret = this.clientSecret;
    const appearance = {
      theme: 'stripe',
    };
    this.elements = this.stripe.elements({ appearance, clientSecret });

    const paymentElementOptions = {
      layout: 'tabs',
    };
    const paymentElement = this.elements.create(
      'payment',
      paymentElementOptions
    );
    paymentElement.mount('#payment-element');
  }


  async makePayment() {
    let elements = this.elements;


    let intentId = this.elements._commonOptions.clientSecret.id;

    console.log(intentId);

    const res = await this.stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: 'http://localhost:4200/user/payment-success/',
        //return_url: 'localhost:8090/api/stripe/confirm/'+ intentId,
        receipt_email: 'midoen713@gmail.com',
      },
    });

    console.log(res);
  }









}
