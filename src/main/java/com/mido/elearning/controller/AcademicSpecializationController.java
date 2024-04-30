package com.mido.elearning.controller;


import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.serviceImpl.AcademicSpecializationServiceImpl;
import com.mido.elearning.serviceImpl.FacultyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/academic_specialization")
public class AcademicSpecializationController {

    @Autowired
    AcademicSpecializationServiceImpl specializationServiceImpl;

    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestBody AcademicSpecializationDto specializationDto){
        return new ResponseEntity<>(specializationServiceImpl.save(specializationDto), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> update(@RequestBody AcademicSpecializationDto specializationDto){
        return new ResponseEntity<>(specializationServiceImpl.save(specializationDto), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestParam Long id){
        return new ResponseEntity<>(specializationServiceImpl.deleteById(id), HttpStatus.OK);
    }

    @DeleteMapping("/find_by_name/{name}")
    public ResponseEntity<Object> findByName(@RequestParam String name){
        return new ResponseEntity<>(specializationServiceImpl.findByName(name), HttpStatus.OK);
    }

}
