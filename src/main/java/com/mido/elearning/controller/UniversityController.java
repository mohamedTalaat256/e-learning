package com.mido.elearning.controller;

import com.mido.elearning.Dto.UniversityDto;
import com.mido.elearning.serviceImpl.UniversityServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/universities")
public class UniversityController {

    @Autowired
    UniversityServiceImpl universityServiceImpl;

    @GetMapping("")
    public ResponseEntity<Object> findAll(){
        return AppResponse.generateResponse("all_universities", HttpStatus.OK, universityServiceImpl.findAll(), true);
    }

    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestBody UniversityDto dto){
        return new ResponseEntity<>(universityServiceImpl.save(dto), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> update(@RequestBody UniversityDto dto){
        return new ResponseEntity<>(universityServiceImpl.save(dto), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestParam Long id){
        try{
            universityServiceImpl.deleteById(id);
            return new ResponseEntity<>("true", HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.OK);
        }
    }
}
