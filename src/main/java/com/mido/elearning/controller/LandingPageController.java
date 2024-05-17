package com.mido.elearning.controller;


import com.mido.elearning.Dto.CourseDto;
import com.mido.elearning.serviceImpl.CourseServiceImpl;
import com.mido.elearning.serviceImpl.UserServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/api/home")
public class LandingPageController {

    @Autowired
    UserServiceImpl userServiceImpl;

    @Autowired
    CourseServiceImpl courseServiceImpl;

    @GetMapping("")
    public ResponseEntity<Object> allData(){

        List<CourseDto> recentCourses = courseServiceImpl.findAll();

        Map<String, Object> data = new HashMap<>();
        data.put("recentCourses", recentCourses);

        return AppResponse.generateResponse("all_data", HttpStatus.OK, data,true);
    }



}
