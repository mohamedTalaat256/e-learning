package com.mido.elearning.serviceImpl;

import com.mido.elearning.Dto.LectureDto;
import com.mido.elearning.Dto.LectureUploadRequest;
import com.mido.elearning.Dto.MyVideo;
import com.mido.elearning.entity.Course;
import com.mido.elearning.entity.Lecture;
import com.mido.elearning.exception.RecordNotFoundException;
import com.mido.elearning.mapping.CourseMapper;
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
        MyVideo video = FileUtils.SaveVideo(lectureVideo, lectureUploadRequest.getTitle());

        Lecture lecture = Lecture.builder()
                .title(lectureUploadRequest.getTitle())
                .description(lectureUploadRequest.getDescription())
                .course(new Course(lectureUploadRequest.getCourse().getId()))
                .coverImage(FileUtils.SaveFileAndGetName(coverImageFile, lectureUploadRequest.getTitle()))
                .video(video.getFileName())
                .length((int) video.getDuration())
                .lectureOrder(lectureRepository.findMaxLectureOrder() +1)
                .build();

        Lecture newLecture = lectureRepository.save(lecture);

        return LectureMapper.entityToDto(newLecture);
    }

    @Override
    public List<LectureDto> findByAllCourseId(Long courseId) {
        return lectureRepository.findAllByCourseIdOrderByLectureOrderAsc(courseId).stream()
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
