package com.mido.elearning.controller;


import com.mido.elearning.Dto.CourseReviewDto;
import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.serviceImpl.CourseReviewServiceImpl;
import com.mido.elearning.serviceImpl.CourseServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/courses/reviews")
public class CourseReviewController {

    @Autowired
    CourseReviewServiceImpl courseReviewService;

    @GetMapping("/{id}")
    public ResponseEntity<Object> findByCourseId(@PathVariable("id") Long id){
        return AppResponse.generateResponse("all_course_reviews", HttpStatus.OK, courseReviewService.findAllByCourseId(id),true);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestBody CourseReviewDto dto){
        return AppResponse.generateResponse("review_added_success", HttpStatus.OK, courseReviewService.save(dto),true);
    }



}
