package com.mido.elearning.service;

import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.Dto.LectureDto;
import com.mido.elearning.Dto.LectureUploadRequest;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Set;

public interface LectureService {

    List<LectureDto> findByAllCourseId(Long courseId);
    LectureDto findById(Long id);
    LectureDto save(LectureUploadRequest courseUploadRequest, MultipartFile coverImageFile, MultipartFile lectureVideo) throws IOException;
    void updateCoverImage(MultipartFile file) throws IOException;



}
