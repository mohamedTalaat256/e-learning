package com.mido.elearning.service;

import com.mido.elearning.Dto.CourseReviewDto;
import java.util.List;

public interface CourseReviewService {

    List<CourseReviewDto> findAllByCourseId(Long id);

    CourseReviewDto save(CourseReviewDto courseReviewDto);

}
