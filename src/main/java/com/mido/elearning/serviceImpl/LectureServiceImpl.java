package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.LectureDto;
import com.mido.elearning.Dto.LectureUploadRequest;
import com.mido.elearning.entity.Lecture;
import com.mido.elearning.exception.RecordNotFoundException;
import com.mido.elearning.mapping.LectureMapper;
import com.mido.elearning.repository.LectureRepository;
import com.mido.elearning.service.LectureService;
import com.mido.elearning.utils.FileUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Log4j2
public class LectureServiceImpl implements LectureService {

    private final LectureRepository lectureRepository;
    @Override
    public LectureDto save(LectureUploadRequest lectureUploadRequest, MultipartFile coverImageFile, MultipartFile lectureVideo) throws IOException {

        String courseCoverImageName = FileUtils.SaveFileAndGetName(coverImageFile, lectureUploadRequest.getTitle());
        String video = FileUtils.SaveFileAndGetName(lectureVideo, lectureUploadRequest.getTitle());

        LectureDto lectureDto = LectureMapper.uploadRequestToDto(lectureUploadRequest, courseCoverImageName, video);
        Lecture newLecture = lectureRepository.save(LectureMapper.dtoToEntity(lectureDto));

        return LectureMapper.entityToDto(newLecture);
    }

    @Override
    public List<LectureDto> findByAllCourseId(Long courseId) {
        return lectureRepository.findAllByCourseId(courseId).stream()
                .map(LectureMapper::entityToDto)
                .collect(Collectors.toList());
    }

    @Override
    public LectureDto findById(Long id) {
        Lecture lecture = lectureRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("lecture not found"));
        return LectureMapper.entityToDto(lecture);
    }


    @Override
    public void updateCoverImage(MultipartFile file) throws IOException {
            /*String fileName = FileUtils.SaveFileAndGetName(file);

            currentUser.setProfileImage(fileName);
            userRepository.save(currentUser);*/
    }

}
