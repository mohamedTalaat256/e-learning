package com.mido.elearning.controller;


import com.mido.elearning.Dto.ReviewDto;
import com.mido.elearning.enums.ReviewType;
import com.mido.elearning.serviceImpl.ReviewServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    ReviewServiceImpl reviewService;

    @GetMapping("/courses/{id}")
    public ResponseEntity<Object> findByCourseId(@PathVariable("id") Long id){
        return AppResponse.generateResponse("all_course_reviews", HttpStatus.OK, reviewService.findAllByCourseId(id),true);
    }

    @PostMapping("/courses/save")
    public ResponseEntity<Object> saveCourseReview(@RequestBody ReviewDto dto){
        return AppResponse.generateResponse("review_added_success", HttpStatus.OK, reviewService.save(dto,ReviewType.COURSE),true);
    }

    @GetMapping("/lectures/{id}")
    public ResponseEntity<Object> findByLectureId(@PathVariable("id") Long id){
        return AppResponse.generateResponse("all_lecture_reviews", HttpStatus.OK, reviewService.findAllByLectureId(id),true);
    }
    @PostMapping("/lectures/save")
    public ResponseEntity<Object> saveLectureReview(@RequestBody ReviewDto dto){
        return AppResponse.generateResponse("review_added_success", HttpStatus.OK, reviewService.save(dto, ReviewType.LECTURE),true);
    }




}
