package com.mido.elearning.mapping;

import com.mido.elearning.Dto.*;
import com.mido.elearning.entity.AppUser;
import com.mido.elearning.entity.Course;
import com.mido.elearning.entity.Lecture;
import com.mido.elearning.exception.InternalServerErrorException;
import com.mido.elearning.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class LectureMapper {

    public static LectureDto entityToDto(Lecture entity){


        return LectureDto.builder()
                .id(entity.getId())
                .title(entity.getTitle())
                .description(entity.getDescription())
                .length(entity.getLength())
                .course(CourseMapper.entityToDto(entity.getCourse()))
                .coverImage(entity.getCoverImage())
                .video(entity.getVideo())
                .lectureOrder(entity.getLectureOrder())
                .build();

    }


    public static Lecture dtoToEntity(LectureDto dto){

        return Lecture.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .length(dto.getLength())
                .course( new Course(dto.getCourse().getId()) )
                .coverImage(dto.getCoverImage())
                .video(dto.getVideo())
                .lectureOrder(dto.getLectureOrder())
                .build();
    }


    public static LectureDto uploadRequestToDto(LectureUploadRequest lectureUploadRequest) {

            return LectureDto.builder()
                    .title(lectureUploadRequest.getTitle())
                    .description(lectureUploadRequest.getDescription())
                    .course(CourseMapper.entityToDto(new Course(lectureUploadRequest.getCourse().getId())))
                    .build();
    }

}
