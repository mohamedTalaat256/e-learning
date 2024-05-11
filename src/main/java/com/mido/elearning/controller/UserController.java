package com.mido.elearning.controller;


import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.serviceImpl.UserServiceImpl;
import com.mido.elearning.utils.AppResponse;
import com.mido.elearning.utils.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;


@RestController
@RequestMapping(path = "/api/users")
public class UserController {

    @Autowired
    UserServiceImpl userServiceImpl;


    @GetMapping("")
    public ResponseEntity<Object> allUsers(){
        return AppResponse.generateResponse("all_users", HttpStatus.OK, userServiceImpl.getAll(),true);
    }

    @GetMapping("/getMyProfile")
    public ResponseEntity<Object> getMyProfile(){
        return AppResponse.generateResponse("you_profile_info", HttpStatus.OK, userServiceImpl.getMyProfile() ,true);
    }

    @PostMapping("/updateMyProfile")
    public ResponseEntity<Object> updateMyProfile(@RequestBody UserDto newData){
        return AppResponse.generateResponse("you_profile_updated_success", HttpStatus.OK, userServiceImpl.updateProfile(newData) ,true);
    }

    @PostMapping("/updateProfileImage")
    public ResponseEntity<Object>  updateProfileImage(@RequestParam("profileImage")MultipartFile profileImage) throws IOException {

        FileUtils.SaveFileAndGetName(profileImage);
        return AppResponse.generateResponse("you_profile_image_updated_success", HttpStatus.OK, FileUtils.SaveFileAndGetName(profileImage) ,true);

    }


}
