package com.mido.elearning.utils;

import lombok.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AppResponse {

    String message;
    HttpStatus status;
    Object data;
    boolean ok;

    public static ResponseEntity<Object> generateResponse(String message, HttpStatus status, Object responseObj, boolean success) {

        Map<String, Object> map = new HashMap<>();
        map.put("message", message);
        map.put("status", status.value());
        map.put("data", responseObj);
        map.put("ok", success);

        return new ResponseEntity<Object>(map,status);
    }

/*   */
}
