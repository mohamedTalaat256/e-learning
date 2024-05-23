package com.mido.elearning.controller;


import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.Dto.LectureUploadRequest;
import com.mido.elearning.serviceImpl.CourseServiceImpl;
import com.mido.elearning.serviceImpl.LectureServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/lectures")
public class LectureController {

    @Autowired
    LectureServiceImpl lectureService;

    @GetMapping("")
    public ResponseEntity<Object> findAllByCourseId(@RequestParam Long courseId){
        return AppResponse.generateResponse("all_Course_lecture", HttpStatus.OK, lectureService.findByAllCourseId(courseId),true);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestPart LectureUploadRequest courseUploadRequest,
                                       @RequestPart MultipartFile coverImageFile,
                                       @RequestPart MultipartFile lectureVideo) throws IOException {
        return AppResponse.generateResponse("lecture_added_success", HttpStatus.OK, lectureService.save(courseUploadRequest, coverImageFile,lectureVideo ),true);
    }

    @PostMapping("/updateCourseImage")
    public ResponseEntity<Object>  updateCourseImage(@RequestParam("courseImage")MultipartFile courseImage) throws IOException {
      //  courseService.updateProfileImage(courseImage);
        return AppResponse.generateResponse("you_profile_image_updated_success", HttpStatus.OK, null  ,true);
    }

}
