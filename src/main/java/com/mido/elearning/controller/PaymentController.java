package com.mido.elearning.controller;


import com.mido.elearning.Dto.PaymentIntentDto;
import com.mido.elearning.serviceImpl.PaymentServiceImpl;
import com.mido.elearning.utils.AppResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/stripe")
public class PaymentController {

    @Autowired
    PaymentServiceImpl paymentService;


    @PostMapping("/paymentintent")
    public ResponseEntity<Object> payment(@RequestBody PaymentIntentDto dto) throws StripeException {

        //String paymentStr = paymentIntent.toJson();

        return AppResponse.generateResponse("review_added_success", HttpStatus.OK, paymentService.checkout() ,true);
    }


    @PostMapping("/confirm/{id}")
    public ResponseEntity<Object> confirm(@PathVariable("id")String id) throws StripeException {
        PaymentIntent paymentIntent = paymentService.confirm(id);
        String paymentStr = paymentIntent.toJson();

        return AppResponse.generateResponse("payment_confirmed_success", HttpStatus.OK, paymentStr,true);
    }

    @PostMapping("/cancel/{id}")
    public ResponseEntity<Object> cancel(@PathVariable("id")String id) throws StripeException {
        PaymentIntent paymentIntent = paymentService.cancel(id);
        String paymentStr = paymentIntent.toJson();

        return AppResponse.generateResponse("payment_canceled", HttpStatus.OK, paymentStr,true);
    }

}
