package com.mido.elearning.service;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CourseService {

    CourseDto save(CourseUploadRequest courseUploadRequest, MultipartFile coverImageFile) throws IOException;



}
