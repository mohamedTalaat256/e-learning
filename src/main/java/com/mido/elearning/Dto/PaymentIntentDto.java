package com.mido.elearning.Dto;

import com.mido.elearning.enums.Currency;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class PaymentIntentDto {

    private String description;
    private int amount;

    private Currency currency;

}
