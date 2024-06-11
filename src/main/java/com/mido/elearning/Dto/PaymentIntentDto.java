package com.mido.elearning.Dto;

import com.mido.elearning.enums.Currency;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class PaymentIntentDto {

     String description;
     int amount;

     Currency currency;

}
