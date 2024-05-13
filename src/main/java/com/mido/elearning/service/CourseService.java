package com.mido.elearning.service;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;

import java.io.IOException;

public interface CourseService {

    CourseDto save(CourseUploadRequest courseUploadRequest) throws IOException;



}
