package com.mido.elearning.exception;

public class DuplicateRecordException extends  RuntimeException{
    public DuplicateRecordException() {
    }

    public DuplicateRecordException(String message) {
        super(message);
    }

}
