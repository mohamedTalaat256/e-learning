package com.mido.elearning.utils;

import com.mido.elearning.Dto.MyVideo;
import org.mp4parser.IsoFile;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;

import static java.nio.file.Files.copy;
import static java.nio.file.Paths.get;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

public class FileUtils {

    @Value("${uploads.images.path}")
    private static String UPLOAD_DIRECTORY;

    @Value("${uploads.videos.path}")
    private static String VIDEOS_UPLOAD_DIRECTORY;


    public static String SaveFileAndGetName(MultipartFile profileImage, String fileName ) throws IOException {
       // String filename = StringUtils.cleanPath(profileImage.getOriginalFilename());
        fileName = fileName+'.'+ StringUtils.getFilenameExtension(profileImage.getOriginalFilename());
        Path fileStorage = get(UPLOAD_DIRECTORY,  fileName).toAbsolutePath().normalize();
        copy(profileImage.getInputStream(), fileStorage, REPLACE_EXISTING);

        return fileName;
    }

    public static MyVideo SaveVideo(MultipartFile profileImage, String fileName ) throws IOException {
        // String filename = StringUtils.cleanPath(profileImage.getOriginalFilename());
        fileName = fileName+'.'+ StringUtils.getFilenameExtension(profileImage.getOriginalFilename());
        Path fileStorage = get(VIDEOS_UPLOAD_DIRECTORY,  fileName).toAbsolutePath().normalize();
        copy(profileImage.getInputStream(), fileStorage, REPLACE_EXISTING);


        final File file = new File(VIDEOS_UPLOAD_DIRECTORY+"/"+fileName);
        final IsoFile isoFile = new IsoFile(file);
        double duration = (double)
                isoFile.getMovieBox().getMovieHeaderBox().getDuration() /
                isoFile.getMovieBox().getMovieHeaderBox().getTimescale();

        return MyVideo.builder().duration(duration)
                .fileName(fileName)
                .build();
    }

}
