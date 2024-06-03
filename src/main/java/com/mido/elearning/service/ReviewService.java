package com.mido.elearning.service;

import com.mido.elearning.Dto.ReviewDto;
import com.mido.elearning.enums.ReviewType;

import java.util.List;

public interface ReviewService {

    List<ReviewDto> findAllByCourseId(Long id);
    List<ReviewDto> findAllByLectureId(Long id);

    ReviewDto save(ReviewDto reviewDto, ReviewType reviewType);

}
