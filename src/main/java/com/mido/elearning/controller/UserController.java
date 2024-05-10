package com.mido.elearning.controller;


import com.mido.elearning.Dto.UserDto;
import com.mido.elearning.serviceImpl.UserServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import static java.nio.file.Files.copy;
import static java.nio.file.Paths.get;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;
import static org.springframework.http.HttpHeaders.CONTENT_DISPOSITION;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/users")
public class UserController {

    public static final String UPLOAD_DIRECTORY = "";
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
    public ResponseEntity<Object>  updateProfileImage(@RequestParam("files")List<MultipartFile> multipartFiles) throws IOException {
        List<String> fileNames = new ArrayList<>();

        for(MultipartFile file: multipartFiles){
            String fileName = StringUtils.cleanPath(file.getOriginalFilename());
            Path fileStorage = get(UPLOAD_DIRECTORY, fileName).toAbsolutePath().normalize();
            copy(file.getInputStream(), fileStorage, REPLACE_EXISTING);
            fileNames.add(fileName);
        }

        return AppResponse.generateResponse("you_profile_image_updated_success", HttpStatus.OK, null ,true);

    }


}
