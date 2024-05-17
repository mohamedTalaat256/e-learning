package com.mido.elearning.service;

import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

public interface CourseService {

    List<CourseDto> findAll();
    List<CourseDto> findByAuthorId(Long authorId);
    CourseDto findById(Long id);
    CourseDto save(CourseUploadRequest courseUploadRequest, MultipartFile coverImageFile) throws IOException;
    void updateCoverImage(MultipartFile file) throws IOException;



}
