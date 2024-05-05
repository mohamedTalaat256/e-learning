package com.mido.elearning.controller;


import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.serviceImpl.FacultyServiceImpl;
import com.mido.elearning.utils.AppResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faculties")
public class FacultyController {

    @Autowired
    FacultyServiceImpl facultyServiceImpl;

    @GetMapping("")
    public ResponseEntity<Object> findAll(){
        return AppResponse.generateResponse("all_faculties", HttpStatus.OK, facultyServiceImpl.findAll(),true);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findById(@PathVariable("id") Long id){
        return AppResponse.generateResponse("data", HttpStatus.OK, facultyServiceImpl.findById(id),true);
    }


    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestBody FacultyDto facultyDto){
        return AppResponse.generateResponse("faculty_added_success", HttpStatus.OK,  facultyServiceImpl.save(facultyDto),true);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> update(@RequestBody FacultyDto facultyDto){
        return new ResponseEntity<>(facultyServiceImpl.update(facultyDto), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> delete(@RequestParam Long id){
        try{
            facultyServiceImpl.deleteById(id);
            return new ResponseEntity<>("true", HttpStatus.OK);
        }catch (Exception ex){
            return new ResponseEntity<>(ex.getMessage(), HttpStatus.OK);
        }
    }


}
