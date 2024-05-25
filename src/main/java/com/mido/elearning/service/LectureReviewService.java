package com.mido.elearning.service;

import com.mido.elearning.Dto.LectureReviewDto;

import java.util.List;

public interface LectureReviewService {

    List<LectureReviewDto> findAllByLectureId(Long id);

    LectureReviewDto save(LectureReviewDto lectureReviewDto);

}
