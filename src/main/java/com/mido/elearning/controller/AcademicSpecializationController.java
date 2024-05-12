package com.mido.elearning.controller;


import com.mido.elearning.Dto.AcademicSpecializationDto;
import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.serviceImpl.AcademicSpecializationServiceImpl;
import com.mido.elearning.serviceImpl.FacultyServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/academic_specialization")
public class AcademicSpecializationController {

    @Autowired
    AcademicSpecializationServiceImpl specializationServiceImpl;

    @GetMapping("")
    public ResponseEntity<Object> findAll(){
        return AppResponse.generateResponse("all_academic_specialization", HttpStatus.OK, specializationServiceImpl.findAll(), true);
    }


    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestBody AcademicSpecializationDto specializationDto){
        return AppResponse.generateResponse("academic_specialization_saved_success", HttpStatus.OK, specializationServiceImpl.save(specializationDto), true);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> update(@RequestBody AcademicSpecializationDto specializationDto){
        return AppResponse.generateResponse("academic_specialization_updated_success", HttpStatus.OK, specializationServiceImpl.save(specializationDto), true);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestParam Long id){
        specializationServiceImpl.deleteById(id);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @DeleteMapping("/find_by_name/{name}")
    public ResponseEntity<Object> findByName(@RequestParam String name){
        return new ResponseEntity<>(specializationServiceImpl.findByName(name), HttpStatus.OK);
    }

}
