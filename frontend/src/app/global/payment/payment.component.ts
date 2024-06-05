import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { AppResponse } from 'src/app/model/app_response.model';
import { Course } from 'src/app/model/course.model';
import { PaymentService } from 'src/app/service/payment.service';
import Swal from 'sweetalert2'; 
import { loadStripe } from '@stripe/stripe-js';
import { Currency } from 'src/app/constants/constants';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  @Input() course:Course;


  constructor(private paymentService:PaymentService,
  ){

  }

  ngOnInit(): void {
    
  }
  stripePromise = loadStripe("pk_test_51LYUvnBVDibabXHisH0GvAI2H39DwKOoMLKVVVTNvqu4niaeCnMpQdJVkGQlPrOpDqjn6n6JBUpZt6tpr8swrH4u00IWn8PtCa");

 

  async pay(): Promise<void> {
    const stripe = await this.stripePromise;
    const payment = {
      name: this.course.title,
      currency: Currency.EGY,
      // amount on cents *10 => to be on dollar
      amount: this.course.price,
      quantity: 1,
      cancelUrl:  'http://localhost:4200/cancel',
      successUrl: 'http://localhost:4200/success',
    };

    this.paymentService.pay(payment).pipe(take(1)).subscribe({
      next:(response: any)=>{
        console.log(response);

        stripe.redirectToCheckout({
          sessionId: response.data.id,
        });
        if(response.ok){
          Swal.fire({ 
            icon: "success",
            title: response.message,
            showConfirmButton: true,
            timer: 1500
          });
        }
      },
      error:(error: AppResponse)=>{ 
        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true,
          timer: 1500
        });
      }
    }); 
  }


  cancel(id: string){
    this.paymentService.cancel(id).pipe(take(1)).subscribe({
      next:(response: any)=>{
        if(response.ok){
          Swal.fire({ 
            icon: "success",
            title: response.message,
            showConfirmButton: true,
            timer: 1500
          });
        }
      },
      error:(error: AppResponse)=>{ 
        Swal.fire({ 
          icon: "error",
          title: error.message,
          showConfirmButton: true,
          timer: 1500
        });
      }
    }); 
  }







}
