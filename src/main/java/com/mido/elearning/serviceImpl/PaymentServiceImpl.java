package com.mido.elearning.serviceImpl;


import com.mido.elearning.Dto.PaymentIntentDto;
import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

@Service
public class PaymentServiceImpl {

    String secretKey ="sk_test_51LYUvnBVDibabXHi0Ay8kwZHh30CH4rl1UDGWqDqRNsXIVv9opL4UbW0LPVwWfT6mgQvxFkP3834prD0BRYTS4RC00ai21Y63S";


    public PaymentIntent paymentIntent(PaymentIntentDto paymentIntentDto) throws StripeException {
        Stripe.apiKey = secretKey;
        Map<String, Object> params = new HashMap<>();
        params.put("description", paymentIntentDto.getDescription());
        params.put("amount", paymentIntentDto.getAmount());
        params.put("currency", paymentIntentDto.getCurrency());

        ArrayList payment_methods_types = new ArrayList<>();
        payment_methods_types.add("cards");
        params.put("payment_methods_types", payment_methods_types);

        return PaymentIntent.create(params);
    }

    public PaymentIntent confirm(String id) throws StripeException {
        Stripe.apiKey=secretKey;

        PaymentIntent paymentIntent = PaymentIntent.retrieve(id);
        Map<String, Object> params = new HashMap<>();
        params.put("payment_method", "payment_card_visa");
        paymentIntent.confirm(params);
        return paymentIntent;
    }

    public PaymentIntent cancel(String id) throws StripeException{
        Stripe.apiKey=secretKey;
        PaymentIntent paymentIntent = PaymentIntent.retrieve(id);
        paymentIntent.cancel();
        return paymentIntent;
    }
}
