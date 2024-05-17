package com.mido.elearning.controller;


import com.mido.elearning.Dto.CourseUploadRequest;
import com.mido.elearning.serviceImpl.CourseServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    @Autowired
    CourseServiceImpl courseService;

    @GetMapping("")
    public ResponseEntity<Object> findAll(){
        return AppResponse.generateResponse("all_Courses", HttpStatus.OK, courseService.findAll(),true);
    }

    @GetMapping("/authors/{authorId}")
    public ResponseEntity<Object> findByAuthorId(@PathVariable Long authorId){
        return AppResponse.generateResponse("all_Courses", HttpStatus.OK, courseService.findByAuthorId(authorId),true);
    }


    /*  @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable("id") Long id){
        return AppResponse.generateResponse("data", HttpStatus.OK, courseService.findById(id),true);
    }
*/
    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestPart CourseUploadRequest courseUploadRequest,  @RequestPart MultipartFile coverImageFile) throws IOException {

        return AppResponse.generateResponse("course_added_success", HttpStatus.OK, courseService.save(courseUploadRequest, coverImageFile ),true);
    }

    @PostMapping("/updateCourseImage")
    public ResponseEntity<Object>  updateCourseImage(@RequestParam("courseImage")MultipartFile courseImage) throws IOException {
      //  courseService.updateProfileImage(courseImage);
        return AppResponse.generateResponse("you_profile_image_updated_success", HttpStatus.OK, null  ,true);
    }

    /*


    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestParam Long id){
        try{
            facultyServiceImpl.deleteById(id);
            return new ResponseEntity<>("true", HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.OK);
        }
    }
*/

}
