package com.mido.elearning.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;

import static java.nio.file.Files.copy;
import static java.nio.file.Paths.get;
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

public class FileUtils {

   // @Value("${directory.upload}")
    private static final String UPLOAD_DIRECTORY = "src/main/media/images";


    public static String SaveFileAndGetName(MultipartFile profileImage, String fileName ) throws IOException {
       // String filename = StringUtils.cleanPath(profileImage.getOriginalFilename());
        fileName = fileName+'.'+ StringUtils.getFilenameExtension(profileImage.getOriginalFilename());
        Path fileStorage = get(UPLOAD_DIRECTORY,  fileName).toAbsolutePath().normalize();
        copy(profileImage.getInputStream(), fileStorage, REPLACE_EXISTING);

        return fileName;
    }
}
