-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 12, 2024 at 06:33 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `e-learning`
--

-- --------------------------------------------------------

--
-- Table structure for table `acadimic_sepicailizations`
--

CREATE TABLE `acadimic_sepicailizations` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `acadimic_sepicailizations`
--

INSERT INTO `acadimic_sepicailizations` (`id`, `name`) VALUES
(2, 'computer science'),
(52, 'Education'),
(102, 'commerce'),
(103, 'medecin'),
(104, 'art'),
(105, 'science'),
(106, 'aaaaaaaaaaaaaaa'),
(107, 'qqqq'),
(108, 'wwww');

-- --------------------------------------------------------

--
-- Table structure for table `acadimic_sepicailizations_seq`
--

CREATE TABLE `acadimic_sepicailizations_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `acadimic_sepicailizations_seq`
--

INSERT INTO `acadimic_sepicailizations_seq` (`next_val`) VALUES
(201);

-- --------------------------------------------------------

--
-- Table structure for table `faculties`
--

CREATE TABLE `faculties` (
  `id` bigint(20) NOT NULL,
  `university_id` bigint(20) DEFAULT NULL,
  `academic_specialization_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculties`
--

INSERT INTO `faculties` (`id`, `university_id`, `academic_specialization_id`) VALUES
(1502, 2, 2),
(1503, 1, 52),
(1552, 3, 2),
(1602, 4, 2),
(1652, 5, 2),
(1653, 7, 52),
(1702, 7, 52),
(1703, 6, 52),
(1752, 11, 52);

-- --------------------------------------------------------

--
-- Table structure for table `faculties_seq`
--

CREATE TABLE `faculties_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `faculties_seq`
--

INSERT INTO `faculties_seq` (`next_val`) VALUES
(1851);

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` bigint(20) NOT NULL,
  `country` smallint(6) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `organizations_seq`
--

CREATE TABLE `organizations_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `organizations_seq`
--

INSERT INTO `organizations_seq` (`next_val`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'TEACHER'),
(2, 'ADMIN'),
(3, 'STUDENT'),
(52, 'STUDENT');

-- --------------------------------------------------------

--
-- Table structure for table `roles_seq`
--

CREATE TABLE `roles_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles_seq`
--

INSERT INTO `roles_seq` (`next_val`) VALUES
(151);

-- --------------------------------------------------------

--
-- Table structure for table `token_info`
--

CREATE TABLE `token_info` (
  `id` bigint(20) NOT NULL,
  `access_token` varchar(800) DEFAULT NULL,
  `local_ip_address` varchar(255) DEFAULT NULL,
  `refresh_token` varchar(800) DEFAULT NULL,
  `remote_ip_address` varchar(255) DEFAULT NULL,
  `user_agent_text` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `token_info`
--

INSERT INTO `token_info` (`id`, `access_token`, `local_ip_address`, `refresh_token`, `remote_ip_address`, `user_agent_text`, `user_id`) VALUES
(10, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0YjlmYWY2Mi1iMWYxLTRkMGYtYmM4Ni03OTBlMzkzZTg0Y2QiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNTQ0OTQzNiwiZXhwIjoxODk1NDQ5NDM2fQ.LRC-Oc1NMgoKRgpIwzyyCZ1O7BDLMv0m4Vp6I_nZVIQ-0M-3Y2mSOgjZj7GH5eSn8Ae84NBHkdpbmmQNrmwUwA', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjZjE3ODE2OC03NWRjLTQzMzQtOTc1Ni1lNmJhN2IzYjRjZTkiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNTQ0OTQzNiwiZXhwIjoxNzMzNDQ5NDM2fQ.Ka9PPghco3pIc1BCwk67amsDKoLy5eXnC4SLPNgjXaZcgNBhRQZWhEyaNq5VI95jMjPt-qGXoE0aaC1uK0EwpQ', '0:0:0:0:0:0:0:1', 'PostmanRuntime/7.38.0', 52),
(25, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyODBhYzAxOC1kYWIzLTQ2Y2MtYmVlYS1iOGZkYTZmZmY1NjEiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNTQ2NTIzNCwiZXhwIjoxODk1NDY1MjM0fQ.9ljtupitD6CCiC2klLX6JQuJz_zvsuIYL7eLOatAd-fuMTk-h-AuP6nt8uXeU1Sy-Nc4O9nzNWenxgWH38ZUbw', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIwZDEwNWZkYS0yMDIwLTQ2NDItYTdlMi0xNTQzZmJlNDA2YmYiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNTQ2NTIzNCwiZXhwIjoxNzMzNDY1MjM0fQ.lrgCVMRYih0Mnexdns61_F7HSjK6iYrwfZTp82mUAvJ0bFqIuWyMw7zhs3VSDV-3Lyg-yjn8VPeh4aBCQ-teNw', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36', 52);

-- --------------------------------------------------------

--
-- Table structure for table `universities`
--

CREATE TABLE `universities` (
  `id` bigint(20) NOT NULL,
  `country` smallint(6) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universities`
--

INSERT INTO `universities` (`id`, `country`, `name`) VALUES
(1, 55, 'menufia'),
(2, 55, 'Cairo'),
(3, 55, 'Alexandria'),
(4, 55, 'Tanta'),
(5, 55, 'Ain Shams'),
(6, 55, 'Mansoura'),
(7, 55, 'Helwan'),
(8, 55, 'Assiut'),
(9, 55, 'Aswan'),
(10, 55, 'Fayoum'),
(11, 55, 'Menuf');

-- --------------------------------------------------------

--
-- Table structure for table `universities_seq`
--

CREATE TABLE `universities_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `universities_seq`
--

INSERT INTO `universities_seq` (`next_val`) VALUES
(101);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `date_of_birth` datetime(6) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `is_account_non_expired` bit(1) NOT NULL,
  `is_account_non_locked` bit(1) NOT NULL,
  `is_credentials_non_expired` bit(1) NOT NULL,
  `is_enabled` bit(1) NOT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `nationality` smallint(6) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profile_image` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `organization_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `date_of_birth`, `email`, `first_name`, `is_account_non_expired`, `is_account_non_locked`, `is_credentials_non_expired`, `is_enabled`, `last_name`, `nationality`, `password`, `profile_image`, `username`, `organization_id`) VALUES
(52, NULL, 'admin@gmail.com', 'Mohamed', b'1', b'1', b'1', b'1', 'Talaat', NULL, '$2a$10$7fQrv1LxjfyDXq6y/1O/PeqZ/Web0nYKm2nou0EDVVE76VMliy4vK', 'admin.png', 'admin', NULL),
(252, NULL, 'nancy@gmail.com', 'nancy', b'1', b'1', b'1', b'1', 'ahmed', NULL, '$2a$10$fTCIwgqN//4MMLFvj74p9.6F9vCI91.jF2GtSIya5IG0D1y9JdTee', 'nancy.jpg', 'nancy', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users_roles`
--

CREATE TABLE `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_roles`
--

INSERT INTO `users_roles` (`user_id`, `role_id`) VALUES
(52, 2),
(252, 52);

-- --------------------------------------------------------

--
-- Table structure for table `users_seq`
--

CREATE TABLE `users_seq` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users_seq`
--

INSERT INTO `users_seq` (`next_val`) VALUES
(351);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acadimic_sepicailizations`
--
ALTER TABLE `acadimic_sepicailizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgmveir7kkrrjdj3t0b7r1m0if` (`university_id`),
  ADD KEY `UK_t72p5cas9r8nubffbd0q37qgx` (`academic_specialization_id`) USING BTREE;

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `token_info`
--
ALTER TABLE `token_info`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKt3l1kg1dml5yjpibc2o46t9ma` (`user_id`);

--
-- Indexes for table `universities`
--
ALTER TABLE `universities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKqpugllwvyv37klq7ft9m8aqxk` (`organization_id`);

--
-- Indexes for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKj6m8fwv7oqv74fcehir1a9ffy` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `token_info`
--
ALTER TABLE `token_info`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `faculties`
--
ALTER TABLE `faculties`
  ADD CONSTRAINT `FKamiax1nh90xl22wkdltxalpfg` FOREIGN KEY (`academic_specialization_id`) REFERENCES `acadimic_sepicailizations` (`id`),
  ADD CONSTRAINT `FKgmveir7kkrrjdj3t0b7r1m0if` FOREIGN KEY (`university_id`) REFERENCES `universities` (`id`);

--
-- Constraints for table `token_info`
--
ALTER TABLE `token_info`
  ADD CONSTRAINT `FKt3l1kg1dml5yjpibc2o46t9ma` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FKqpugllwvyv37klq7ft9m8aqxk` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`);

--
-- Constraints for table `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `FK2o0jvgh89lemvvo17cbqvdxaa` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKj6m8fwv7oqv74fcehir1a9ffy` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
