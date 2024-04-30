package com.mido.elearning.controller;


import com.mido.elearning.Dto.FacultyDto;
import com.mido.elearning.serviceImpl.FacultyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/faculties")
public class FacultyController {


    @Autowired
    FacultyServiceImpl facultyServiceImpl;

    @PostMapping("/save")
    public ResponseEntity<Object> save(@RequestBody FacultyDto facultyDto){
        return new ResponseEntity<>(facultyServiceImpl.save(facultyDto), HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> update(@RequestBody FacultyDto facultyDto){
        return new ResponseEntity<>(facultyServiceImpl.save(facultyDto), HttpStatus.OK);
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
