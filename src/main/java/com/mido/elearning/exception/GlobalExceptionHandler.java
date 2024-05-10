package com.mido.elearning.exception;

import com.mido.elearning.utils.AppResponse;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.ArrayList;
import java.util.List;

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {


    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatusCode status,
                                                                  WebRequest request) {
        List<String> errors = new ArrayList<>();

        for(FieldError error : ex.getBindingResult().getFieldErrors()){
            errors.add(error.getField()+" "+ error.getDefaultMessage());
        }

        for(ObjectError error : ex.getBindingResult().getFieldErrors()){
            errors.add(error.getObjectName()+ " "+ error.getDefaultMessage());
        }

        return AppResponse.generateResponse("please validate the following fields", HttpStatus.BAD_REQUEST, errors, false);
    }

    @ExceptionHandler(HttpClientErrorException.Unauthorized.class)
    public ResponseEntity<Object> handleUnauthorizedException(BadCredentialsException ex) {

        return   ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid_username_or_password");
    }


    @ExceptionHandler(BadCredentialsException.class)
    public ResponseEntity<Object> handleBadCredentialsException(BadCredentialsException ex) {

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid_username_or_password");
    }



    //add all your exceptions here

    @ExceptionHandler(InvalidValuesException.class)
    public ResponseEntity<?> handleInvalidValuesException(InvalidValuesException ex) {
        return  AppResponse.generateResponse(ex.getMessage(), HttpStatus.BAD_REQUEST, null, false);

    }

    @ExceptionHandler(DuplicateRecordException.class)
    public ResponseEntity<?> handleDuplicateRecordException(DuplicateRecordException ex) {


        return  AppResponse.generateResponse(ex.getMessage(), HttpStatus.OK, null, false);
    }

    @ExceptionHandler(RecordNotFoundException.class)
    public ResponseEntity<?> handleRecordNotFoundException(RecordNotFoundException ex) {


        return  AppResponse.generateResponse(ex.getMessage(), HttpStatus.NOT_FOUND, null, true);
    }

    @ExceptionHandler(NoContentException.class)
    public ResponseEntity<?> handleNoContentException(RecordNotFoundException ex) {


        return  AppResponse.generateResponse(ex.getMessage(), HttpStatus.NO_CONTENT, null, true);
    }

    @ExceptionHandler(InternalServerErrorException.class)
    public ResponseEntity<?> handleInternalServerErrorException(InternalServerErrorException ex) {

        return  AppResponse.generateResponse(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, null, false);
    }


}
