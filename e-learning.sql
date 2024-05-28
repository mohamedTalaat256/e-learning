-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2024 at 08:26 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

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
-- Table structure for table `cources`
--

CREATE TABLE `cources` (
  `id` bigint(20) NOT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `discount` int(11) NOT NULL,
  `discount_end_date` datetime(6) DEFAULT NULL,
  `discount_statrt_date` datetime(6) DEFAULT NULL,
  `is_course_free` bit(1) DEFAULT NULL,
  `price` decimal(38,2) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `auther_id` bigint(20) DEFAULT NULL,
  `hours` double NOT NULL,
  `rating` double NOT NULL,
  `author_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cources`
--

INSERT INTO `cources` (`id`, `cover_image`, `description`, `discount`, `discount_end_date`, `discount_statrt_date`, `is_course_free`, `price`, `title`, `auther_id`, `hours`, `rating`, `author_id`) VALUES
(1, 'JAVA.jpg', 'advanced java 21 course Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the wr', 0, NULL, NULL, b'0', 400.00, 'java 21', NULL, 8, 4, 6),
(2, 'Data Structure And Algoritm.jpg', 'Advanced Data Structure And Algorithm From zero to hero Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about whe', 0, NULL, NULL, b'0', 193.00, 'Data Structure And Algoritm', NULL, 20, 0, 6),
(3, 'CCNA cisco.jpg', 'CCNA advanced course', 0, NULL, NULL, b'0', 199.00, 'CCNA cisco', NULL, 320, 0, 6),
(4, 'Python.jpg', 'Python for beginners', 0, NULL, NULL, b'0', 60.00, 'Python', NULL, 120, 0, 6),
(5, 'UI and UX.jpg', 'UI / UX For Professionals', 0, NULL, NULL, b'0', 180.00, 'UI and UX', NULL, 630, 0, 6),
(6, 'Docker.png', 'Docker Advanced Course', 0, NULL, NULL, b'0', 630.00, 'Docker', NULL, 320, 0, 6);

-- --------------------------------------------------------

--
-- Table structure for table `course_reviews`
--

CREATE TABLE `course_reviews` (
  `id` bigint(20) NOT NULL,
  `content_text` varchar(255) DEFAULT NULL,
  `rating_value` double DEFAULT NULL,
  `author_id` bigint(20) DEFAULT NULL,
  `course_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `course_reviews`
--

INSERT INTO `course_reviews` (`id`, `content_text`, `rating_value`, `author_id`, `course_id`) VALUES
(1, 'great course', 3, 10, 1),
(2, 'nice', 3, 2, 1),
(3, 'very good', 5, 3, 1),
(4, 'nice course', 4, 3, 1),
(5, 'nice course', 0, 3, 1),
(6, 'great course', 0, 1, 1),
(7, 'niceee', 0, 1, 1),
(8, 'very good java course', 4, 1, 1),
(9, 'sdfsdf', 3, 1, 1),
(10, 'sdfsdf', 3, 1, 1),
(11, 'sdfsdf', 3, 1, 1),
(12, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', 5, 1, 1),
(13, 'vey nice', 4, 1, 5),
(14, 'amazing ui ux course', 5, 2, 5);

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
-- Table structure for table `lectures`
--

CREATE TABLE `lectures` (
  `id` bigint(20) NOT NULL,
  `cover_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `length` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `video` varchar(255) DEFAULT NULL,
  `course_id` bigint(20) DEFAULT NULL,
  `lecture_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `lectures`
--

INSERT INTO `lectures` (`id`, `cover_image`, `description`, `length`, `title`, `video`, `course_id`, `lecture_order`) VALUES
(1, 'lecture 1- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 98788, 'lecture 1- introduction', 'lecture_1_introduction.mp4', 1, 1),
(2, 'lecture 2- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 34534, 'lecture 2- introduction', 'lecture_2_introduction.mp4', 1, 2),
(3, 'lecture 3- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 34534, 'lecture 3- introduction', 'lecture 3- introduction.mp4', 1, 3),
(4, 'lecture 4- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 34534, 'lecture 4- introduction', 'lecture 4- introduction.mp4', 1, 4),
(5, 'lecture 5- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 34534, 'lecture 5- introduction', 'lecture 5- introduction.mp4', 1, 5),
(6, 'lecture 6- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 34534, 'lecture 6- introduction', 'lecture 6- introduction.mp4', 1, 6),
(7, 'lecture 7- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 34534, 'lecture 7- introduction', 'lecture 7- introduction.mp4', 1, 7),
(13, 'lecture 8- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 4, 'lecture 8- introduction', 'lecture 8- introduction.mp4', 1, 8),
(14, 'lecture 8- introduction.jpg', 'lecture is mohadmdi dkdpej dldje oej e', 2301, 'lecture 9- introduction', 'lecture 9- introduction.mp4', 1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `lecture_reviews`
--

CREATE TABLE `lecture_reviews` (
  `id` bigint(20) NOT NULL,
  `content_text` varchar(255) DEFAULT NULL,
  `author_id` bigint(20) DEFAULT NULL,
  `lecture_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
(2, 'ADMIN'),
(3, 'STUDENT'),
(1, 'TEACHER');

-- --------------------------------------------------------

--
-- Table structure for table `students_enrolled_cources`
--

CREATE TABLE `students_enrolled_cources` (
  `id` bigint(20) NOT NULL,
  `course_id` bigint(20) DEFAULT NULL,
  `student_id` bigint(20) DEFAULT NULL,
  `enrolled_at` datetime(6) DEFAULT NULL,
  `progress` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students_enrolled_cources`
--

INSERT INTO `students_enrolled_cources` (`id`, `course_id`, `student_id`, `enrolled_at`, `progress`) VALUES
(1, 1, 6, '2024-05-25 00:31:44.000000', 0);

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
(27, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJhMzYzZTcwZi1jYjk4LTRiZTAtYTI5MC02MTQ3NTA2MTRkMzciLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNTUzODYzOCwiZXhwIjoxODk1NTM4NjM4fQ.vTDo6-FitthJU_YTfDGRYaXUSmJjFGXRkooBOJjJEEhBRHA86LMTqp-V3M6imdwC6j_M_xCfi9QY2-iPy7GrzQ', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5YTdlODE5Mi0yN2E1LTQyOTktOGFlYS03MDI0ZjNlZTc3ZTIiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNTUzODYzOCwiZXhwIjoxNzMzNTM4NjM4fQ.V1bhYwhxnsTc8-5B_cq1ngIJiPjHm99lJ-H6MEr9P4pikl3CQtK1ZQ_DF9mkG2MaCZOOgNNZ_1gE78jFiUrgDQ', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36', 252),
(28, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5NDhhYzBjYi01MjgyLTQ5NWYtOGNmNC05ZTRhMjUyYjM1MmEiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNTc5OTI3NSwiZXhwIjoxODk1Nzk5Mjc1fQ.fEVGHeY-ug1pDKCuEr4oiMoR_p9Jxs1JG50xZ_-3Uf3_GR1gyrpQiuWNXsns7EFCNyRwBK3NPzd0uu-xwfU8AQ', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJlZDJlNTIyNi1iNmNiLTQwNzUtOTVkNC04MmVmMjNlZjg0MGMiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNTc5OTI3NSwiZXhwIjoxNzMzNzk5Mjc1fQ.LRCk_7qg7KabC8IWzIzGOS9oSXMAsfCt-vVU-wYbQj5o0P6Pf_Eht1hNPtT3Bmu-ccxC1cA-JwZAC3_qxtDCIg', '0:0:0:0:0:0:0:1', 'PostmanRuntime/7.38.0', 52),
(29, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyOTQ2NTM4YS1kNTU5LTRmM2EtYjZmNi00MDQ3OWQ4MmUwOWQiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjAyNTA2MywiZXhwIjoxODk2MDI1MDYzfQ.HG-dQApwxPNnI72y-PWYG-nIBJ5Zi6bLeymyDXzFll9Bww8tyzrzLV7ng8a3TEP0M0sSyndCM8O-2cZmE_M5jQ', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2NDFjNDMxYy1mOTA4LTQ0OWQtOTU5OC1lYWY3Y2YyYTMwYmMiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjAyNTA2MywiZXhwIjoxNzM0MDI1MDYzfQ.aSMkAv5Tu9ZkmJ2KBqJpRqx9Ph0Z7Ex8B17WWtX7qsAziMX6sCHuEnKQNuKy4fyegxfjA6f7dM3CJOIk_NkxRQ', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 252),
(32, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2NTc1NTNmZC03N2FiLTQzYzItYTNiNC05MGZiYjRiYjE0MWEiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjAyNzk5MiwiZXhwIjoxODk2MDI3OTkyfQ.F6K1IuapheEzUzcmJERr2KfdW-QbSO5syrlfN1BIJrQYmW3xW-hiIVFFAdK4ZlFw8GxvrDj4by09VViVjLFTAg', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2ZjhlNjMzMi01MGY5LTQzOWMtOTJlYy0xZTI2ZmQ3YjRiZjciLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjAyNzk5MiwiZXhwIjoxNzM0MDI3OTkyfQ.bZK0QTpXfVrhtWdq_2l3agK2y1CC2nI2CiTRHhIpxBdVkvgU6wKKq09xJDizSmjKOC-I1bV8hIt2uAREBqgkGw', '0:0:0:0:0:0:0:1', 'PostmanRuntime/7.39.0', 52),
(37, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1NDYwYmVhOS0yYzAxLTRmMGQtYjcxYi1mZGYxN2JhZmMzNWUiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjAzMDc0NywiZXhwIjoxODk2MDMwNzQ3fQ.WnYmKzgOiOYZma8e6wZhD1FJ84hTuvrdoP5tDlTfm7KJJjjxU5Ee7pkofHa_saUl4GMzII-wFg3qglPtcIvy3w', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5M2I4YzQzMy0xMjhjLTQ4ZTAtODAwMi0yMGFmNmIwOWFkMDAiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjAzMDc0NywiZXhwIjoxNzM0MDMwNzQ3fQ.rM8TGs7NZQqEcGoo0kwwze-vJlzDa7C3wxN85RVd4EeDi2W-fqa0qVoP38b7r8qVnppJg_YpFpsiPA9ZncAmQQ', '0:0:0:0:0:0:0:1', 'PostmanRuntime/7.39.0', 252),
(52, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI3ZGJkZDMyYy00NTcwLTQwN2UtOGViOS02ZmFlMmNkM2I5OTkiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM0MSwiZXhwIjoxODk2MDU5MzQxfQ.hcMxE5jzAAEiflC1DayI7MXF5jn42r4T8oJBktKmwyBTEz9IJLEDgIt4MR-DVRrcZmdM5RkckTcOJIvk8h8QcA', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2N2FiYjAzZi1iODFjLTQ4ZmEtYmEwMC05MzA0MWY4ZGFlNTciLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM0MSwiZXhwIjoxNzM0MDU5MzQxfQ.mDjBDWwA5ABmeDaVbPM-Q1lOegWhADkjWkZWxV2UQKyOPHOfjkeHgjDDt3gl3hLF6s6FdTIOmYmqpthM4wm4kA', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(53, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1OGY3ODYzMi1kZDg2LTRiYjAtOTNhMi0xZjJmZDNlZThmZmUiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM0NiwiZXhwIjoxODk2MDU5MzQ2fQ.iM_WoFOsJDOIiselneMj1-g-jWc6MDS7KaPHD75zLr-pvPI9BU6SsmJG1slJUNvtZWKDpUwkJ5Ep7hv2wjMTPw', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1MDQ2MWJkOC00MTY1LTQ1MTItYTIxZi03ZTg3YTkwMDZlNTciLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM0NiwiZXhwIjoxNzM0MDU5MzQ2fQ.PR-BXIhzvx8yQ8hEdv9v_jB36glfkRXX0f5MNaecZMQdytqSY6X9CAuSbGudcwrGUt8jyxUo2nGFPHzzkl5Lug', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(54, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJhMDIyNDViNi1jMmM4LTQyYTQtYjEwYS00NjNjYTI4NDUwNTEiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM0NywiZXhwIjoxODk2MDU5MzQ3fQ.rn-ViEobOnc0U_0zPylxJO-dzOj5L5nsdVYAW78CD-vQIW2m5wNzAN2pu_U4YgwYuA3rJAIHvNB41cHcpYcjpQ', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxNTNjMmZhZC1mZDJjLTQ5MjEtODcwYy1jNjQ2YmExMGNkMjciLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM0NywiZXhwIjoxNzM0MDU5MzQ3fQ.edkZSXXLZnHDSBUtZ4-ZlZnm3T3kjotQ3xR5RHZJocoj3iCLnXeAGjWhRb_PBZpirK5l_C1s77y0MtxaWSpGTw', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(55, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJlYzY4MDNmNy0yM2ZiLTRiNzctYjhiOS1iYTY3OTI2MGRhZWQiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM1MiwiZXhwIjoxODk2MDU5MzUyfQ.dnscII8zgcC51UOXiye4IXZ_OASwBef7NdmMsfIn8oUjUWPM4IqQZmIzKJChCAov47ZJ1rkBLMCxKagk7ZPcQg', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjYmVlOGE1NS1hZmQxLTRlYWUtYTdkNi1mMGMwZGY4NjRkYTYiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM1MiwiZXhwIjoxNzM0MDU5MzUyfQ.xboUJd-9Ynrb8hQcOSr2Y9dr7nic28YB2zioCCLwVaR08p4G_OpgJK8SkpFWsEDqh6LKA3wgs8wsJDXW4erVsg', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(56, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjYTM5ZjIwMi0wMzI2LTQ5NTAtYjY5MS1jZjAyYWZiMjBjNTEiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM2MSwiZXhwIjoxODk2MDU5MzYxfQ.1ULqEj1yLnyhwNfibKYAwzaD_e1F0uRC7moFo1MU2ptxzhd_WkO9JLWlAlDNJ618K-B2alFaamoAYgEEcCuR7w', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI4YWJiZmUwOS0yYzdiLTQzNjMtYmUxNy04MzYyMTE1MjAxMjMiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM2MSwiZXhwIjoxNzM0MDU5MzYxfQ.75WVhdI-ZtxVSckhkvCzg2YkjWFEH-boStnbYMkkta3kUmRxut4Xl_tQiTjcUjc41Ucb77pywxwDz15hFSzazA', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(57, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxODBlNjk5MC0yYmU3LTRiM2MtYjM2My1hYmNmYTg3YWFkNWYiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM3MCwiZXhwIjoxODk2MDU5MzcwfQ.GaHYjWb9X0HjyBLSFUSfpFCjS5RgKJKYWhG5ZN-6L4LZyjdkPWZVY8VR3APxzdrPSL9iwccp1PqhnXsRXNoMRw', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2YzZjYjI1OC1hZDkwLTQwMjUtOTM4YS1mMDVmZjE4ZWI2NzMiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM3MCwiZXhwIjoxNzM0MDU5MzcwfQ.bcfqnFHDkc-G0ao-4dLjMnoHXalvFTnrI5TrJ70A9y2vVXgxcT_OmZ_7Rlq8kcTEyQCKw4WpiTUgcDQDatvJrw', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(58, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMGQyYjhlNS1kYzk1LTQ4MmQtYjIyMi1lNjZkZDZhMmNjYTgiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM3NCwiZXhwIjoxODk2MDU5Mzc0fQ.NZ7CdRvYnDG6QctUlXlxI9ymYDHBzNl3jFJ7PJHIHromZbQ_-qfmbcK3Ec4vq86K9ALP7t95BnH_EL6BDPELaA', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI0Y2EwMzAxMy1mYzAyLTRjNDEtYWMxNS05NGMwYjE4MjBhMjEiLCJzdWIiOiJvc2FtYSIsImlhdCI6MTcxNjA1OTM3NCwiZXhwIjoxNzM0MDU5Mzc0fQ.QvsV6KhH-Jn7Dk-6vm_0E_z9ImlrM7uogl8kRblUk-FCJQ1ZxbLhm2MfTHg9-q_PRMlCYp_6c-p7rQdiaQiOuQ', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 7),
(67, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI3Y2UzYjJhNi1kYWVjLTQzZTUtYTEwNS1iOWE3MzUyNDlhZWEiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjExODMwNCwiZXhwIjoxODk2MTE4MzA0fQ.7fQmJhbsxP6HyftKcN6cfH-o-L_52MR0XJrh71ZO4knEBwp8OW987orG7x0r3nKfCzCuf9R92OI6y1mJC-DSQQ', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJkNDE5NzIxOC1mYWNkLTQ3MjAtOTRjZi1jM2IxYWJkYzZjYjMiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjExODMwNCwiZXhwIjoxNzM0MTE4MzA0fQ.h3oSKKujhHi8IKG5Bnuv99V7OOQcnXAgbnyZjy4rVDB4-qZlHZlrVA9eFSX7uPc_l9n_wFrCGMrdAm0awndHPQ', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 6),
(68, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1Y2M0MDA1Yi1hZTAyLTQxOGItYWQxMC05NGQ0NmE1ZjJmZjciLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjExOTkzNCwiZXhwIjoxODk2MTE5OTM0fQ.z_kiggV7uiktTp2PF9d-rvEKGDfKUwAsUgS18rlO_k5U8u9yb_K1J4Fv23Da-PJiL4sL3byMsAt6z6gTtnp2ag', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxY2RjZWMzNS02YjNlLTRhYjItOGQyYS0xNDNlODYyMWE2YTQiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjExOTkzNCwiZXhwIjoxNzM0MTE5OTM0fQ.ahtWFXrpA3F8xQKECmmHPL0IfYfs5vjIqyIr7dQ-oCq-I498xy4Nm8VVqRDa4uDLHKTEa1VeP3cc4xZGDcfGjQ', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 3),
(69, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJhYWE2ZjQzNi03NWZmLTRiODktODRlMi1iNjdhNGE0YmZjZjkiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjEyMDAzMSwiZXhwIjoxODk2MTIwMDMxfQ.wJi5sbv4At3orwSWi9FpBbkaR3kaKCfHaui-4aRMpE-dadOt9GzZhxMeaBcSsT2wpvB73UdDPUSihtzNw7iXHg', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIwMDJjZDg2NS1hYmZiLTQ5NTItYjRkNS1iOWEzNDIwZDViYzMiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjEyMDAzMSwiZXhwIjoxNzM0MTIwMDMxfQ.yHteMEkhCzlszFfKr0DFxFp89LrlvS4t_SHjt_dRCn5LKhuYcAw59aEYdjyK0q4PjA_hc2TVwCKfRPX_9_G8Yg', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 6),
(71, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjYmY3Njk0NC1mNGVlLTQ2MmUtYmQzMS01NzMwNmY3ZjIzZWUiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjE4ODU2NywiZXhwIjoxODk2MTg4NTY3fQ.EKm4UzXnnABOqcClrq020gaiRxBaDV9PC3vut2i8ZCJN8WtKWdyoFSbaYSkqgX-qKmURel6ZyK1qRlFBjC-hqg', '10.0.1.167', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJmNTg5Y2YyNi0xY2ZkLTQwNTEtYTVmZi0zMmEzODcwZjE0Y2QiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjE4ODU2NywiZXhwIjoxNzM0MTg4NTY3fQ.RmsRtIkbazHXsGhwMsFeVsYr59hWp6f303TKGtLS9Ndnd3TwHx5QlHv7VXZzXPBJEMNfni9iIrXpNknsVoyQmw', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36', 6),
(72, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIxYzQ4YmRkYS1lMWNmLTQwYTgtYWZmYy0yNDkxMzM0MjlhNjkiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjU1MTYzNCwiZXhwIjoxODk2NTUxNjM0fQ.Q3mVdEY4YvJl-8aDn3drvkKdfLmVgEGuRGZcBYn_4ciFbwj-nblozIecFcqd9maVn3esZqsvd19diM54Zyck-A', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI2MWI3MTZkYy02ODBmLTRkNTMtOWYwMS1hMDQxMzFlZjA3MmUiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjU1MTYzNCwiZXhwIjoxNzM0NTUxNjM0fQ.59DFSTs164vN0JnIaW59NkdNSj9HxvGe_ZIStXkCud2Pi-fe83QJX5UuT7RrucnivPa0c34JlM00sQ38HI6Cwg', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 6),
(74, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIwMTU2NWE4OC1kYWNhLTQ1MTUtOTQ2Yy1lYTVmYjU1MmJjMWQiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjY0MTI4MSwiZXhwIjoxODk2NjQxMjgxfQ.b5tgnXnBrlvHtTM9NTjzDluZ7AnMogL8ynjm44WDUJEiT3Q1_s4zPzCi7kTDoUIGa7uyhlnXZFWR0cQM1TD-kw', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIyMDZhZDFiZS04NDgxLTQwNTktYTdjYy1mZjVjODVjMDI3NDAiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjY0MTI4MSwiZXhwIjoxNzM0NjQxMjgxfQ.ofTQlW6ZOhCqzhRyP_WWpm6Tkyvmdq-fe1P4qG6lO-_xjeLL_RfuAD7qeBN4wXBc4EhuV8t7rslbajgn16Gg2g', '0:0:0:0:0:0:0:1', 'PostmanRuntime/7.37.3', 6),
(76, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJkYjg1MjU1OS1mNDU3LTQ0MDktYTBlYi03MWVmMGI0YjQ3OGYiLCJzdWIiOiJyZWRhIiwiaWF0IjoxNzE2NjcwNTM2LCJleHAiOjE4OTY2NzA1MzZ9.Wp-8_Ldzu4Uy-8Orh2OnRWNSjv8TJhi91i7-E4VzYvT0AiSDCNX9BJdRFhmmlO_hGclJUCqiI5RDrkc4pBN2lw', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5ZTViMmJkOC00ZTM4LTQ5ZTgtYTVkYy04M2U0MGRmZjhkNmEiLCJzdWIiOiJyZWRhIiwiaWF0IjoxNzE2NjcwNTM2LCJleHAiOjE3MzQ2NzA1MzZ9.ptgL7VlD3cKSsLPP0-vkAwHvHidb65mtYb6XZMuw_4K90lGfhwnmwoeuqXUuzIjEwjfFvv8jj0ht3sO6s483iQ', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 1),
(79, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIwY2QwZjExNC05NTlhLTQ3MWYtOTRjYS03YmJhZTNkZGJlNWEiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjY3MjMyMiwiZXhwIjoxODk2NjcyMzIyfQ.dtwlb6rjngaTDrjsXS33fwMW-c-0pKdp9kQz_ro9eh1F7pbipiuZYDIECp7PQ4xk8AtkBgHNlvGbnvUDh_UdGw', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIwMzkzOTE4Mi1hMDllLTQ0OTktYWEwOS03YWRkNmFmMzYzNjIiLCJzdWIiOiJhZG1pbiIsImlhdCI6MTcxNjY3MjMyMiwiZXhwIjoxNzM0NjcyMzIyfQ.dhcwmj140NsACJ7cnthqgAd--8YbCM59o20HxOw5HV0LeqIH-GU3pTJZgrCl7bDy1Euy_OPaqiRl4dFaMDgWxg', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 6),
(80, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI1NzQ4NWU4Ny1iYWY5LTRjN2MtODUzNC1hZDIyZWNhODc5OWMiLCJzdWIiOiJsYXlsYSIsImlhdCI6MTcxNjY3MjUzNCwiZXhwIjoxODk2NjcyNTM0fQ.WrOpxSdQhI6hsHiFLU7Ff6Fl7ovHUhvh5WhhpuDLT6d22059MSTUXRURf_XfuEa7oG507LlfZV-ZQf_WgtTdtA', '192.168.0.103', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI3NGIyYWY0Zi04Yzg3LTRhZmItYjY0ZS04YmI1ZjUzNjRjMjIiLCJzdWIiOiJsYXlsYSIsImlhdCI6MTcxNjY3MjUzNCwiZXhwIjoxNzM0NjcyNTM0fQ.wbvciE0dXZxjuXQrtbUG2gSp49yPAuEIqCtJo_b2VrltqN3c_ArpUBkpOiTDdjRaArkPRuc4oRFz3oBeC7xyhw', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 2),
(81, 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5YTk3MmQ4MS02NzBmLTRmMmQtYjMwOC0zMjBkN2I2YTViOTYiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjgxNjYyNSwiZXhwIjoxODk2ODE2NjI1fQ.OJw6ejCv_jUtNOxGhS7QX8yyfCSYmTnjwLVTD-TYjpyGnbQrHXqRXADMbPMCODk6s2ADIJYmPP-159RNX8solA', '10.0.1.167', 'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI5YzAzNWEzNy1jODAyLTQzYTgtYTk1MS0xNDVhOGE4Y2FkMTIiLCJzdWIiOiJuYW5jeSIsImlhdCI6MTcxNjgxNjYyNSwiZXhwIjoxNzM0ODE2NjI1fQ.EPkmJEQS1XDmd1lsJGoR0oVEQW1Y2s4b3dXzPOUVdDPHXEIkXgDIxBEiRlnyss-sZvR6Vw9jvGLAl0wtxuVbNg', '0:0:0:0:0:0:0:1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', 3);

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
(1, NULL, 'reda@gmail.com', 'Reda', b'1', b'1', b'1', b'1', 'Talaat', NULL, '$2a$10$xQJGJnv2o1g9dgLxbyHdMOkmhlYs9cbjLJahrL6FS/594mFhZdY9m', 'reda.jpg', 'reda', NULL),
(2, NULL, 'layla@gmail.com', 'Layla', b'1', b'1', b'1', b'1', 'Morad', NULL, '$2a$10$Ytof1.lFXw8gGqxZo.4QlOExJCoXNqXLwxcYKwlbMli0fEZJOaXHe', 'layla.jpg', 'layla', NULL),
(3, NULL, 'nancy@gmail.com', 'Nancy', b'1', b'1', b'1', b'1', 'Ahmed', NULL, '$2a$10$QwYJycI1NuOxBUC9eZpGaOug6OgtzrUBXxmv9ljknUhyoscVaYOZu', 'nancy.jpg', 'nancy', NULL),
(4, NULL, 'mazen@gmail.com', 'Mazen', b'1', b'1', b'1', b'1', 'Mohamed', NULL, '$2a$10$2qR2fRJ29p7eoQGyhaZLv.o5b.DTZ7N1VD7Iq11EjsrZurT1HqV4W', 'mazen.jpg', 'mazen', NULL),
(5, NULL, 'hamdy@gmail.com', 'Hamdy', b'1', b'1', b'1', b'1', 'Ali', NULL, '$2a$10$so8q.1wdjbGF2zv6.JblROFE5K1Do6shwAHGyrlW/DAKt26b7sk9C', 'hamdy.jpg', 'hamdy', NULL),
(6, NULL, 'admin@gmail.com', 'Mohamed', b'1', b'1', b'1', b'1', 'Talaat', NULL, '$2a$10$y1eskm3887jsFBw64tLqZuMGgk.JSxkUNbSYY3A6SmJn2/Xg97caa', 'admin.png', 'admin', NULL),
(7, NULL, 'osama', 'Osama', b'1', b'1', b'1', b'1', 'Ali', NULL, '$2a$10$B61xdn61ab1WodWfF8jd2ueCoxTlrTNVibDOOt3p1CzHSL5tD4xtC', NULL, 'osama', NULL),
(8, NULL, 'ola@gmail.com', 'Ola', b'1', b'1', b'1', b'1', 'Mohamed', NULL, '$2a$10$SQQnd6F.YfEgQU855y37t.k3oMWgt4pRGKlzjXRB4xyrf8du/RoUe', NULL, 'ola', NULL),
(9, NULL, 'medhat@gmail.com', 'Medhat', b'1', b'1', b'1', b'1', 'Salem', NULL, '$2a$10$v9FAww0BRtNV1wg7TeLiRe2kDdU2jFU/lXW0TFoeVSmVFB.58tRRC', NULL, 'medhat', NULL),
(10, NULL, 'ahmed_said@gmail.com', 'Ahmed', b'1', b'1', b'1', b'1', 'El Said', NULL, '$2a$10$ezo537YK.0KWJ/OdCNU8ZeMJaVjUZtOVD0dJ7os0LwwMAuVBZ68OG', NULL, 'ahmed_said', NULL);

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
(1, 3),
(2, 3),
(3, 3),
(4, 3),
(5, 3),
(6, 2),
(7, 1),
(8, 1),
(9, 1),
(10, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `acadimic_sepicailizations`
--
ALTER TABLE `acadimic_sepicailizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cources`
--
ALTER TABLE `cources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKox3phon2ysc3aomyfquj105h9` (`author_id`),
  ADD KEY `FKs3wh6d7dlkdbrupc5vng1tmjl` (`auther_id`);

--
-- Indexes for table `course_reviews`
--
ALTER TABLE `course_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2upbfe3nc5mo0rtrb764rhlh8` (`author_id`),
  ADD KEY `FKj2ub699nq8d2aomrmpa30h2oc` (`course_id`);

--
-- Indexes for table `faculties`
--
ALTER TABLE `faculties`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKgmveir7kkrrjdj3t0b7r1m0if` (`university_id`),
  ADD KEY `UK_t72p5cas9r8nubffbd0q37qgx` (`academic_specialization_id`) USING BTREE;

--
-- Indexes for table `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK7ebof2n0n8of76vk0g552omsi` (`course_id`);

--
-- Indexes for table `lecture_reviews`
--
ALTER TABLE `lecture_reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK2ovu15irh4unh31rumedirq61` (`author_id`),
  ADD KEY `FKato028bk4srdavtpxgbxdxmfy` (`lecture_id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Indexes for table `students_enrolled_cources`
--
ALTER TABLE `students_enrolled_cources`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKciid9fpk9pc84qwjqe3tps73q` (`course_id`),
  ADD KEY `FKdr38hhvdwlea8hclfhmmrked0` (`student_id`);

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
-- AUTO_INCREMENT for table `cources`
--
ALTER TABLE `cources`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `course_reviews`
--
ALTER TABLE `course_reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lectures`
--
ALTER TABLE `lectures`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `lecture_reviews`
--
ALTER TABLE `lecture_reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students_enrolled_cources`
--
ALTER TABLE `students_enrolled_cources`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `token_info`
--
ALTER TABLE `token_info`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cources`
--
ALTER TABLE `cources`
  ADD CONSTRAINT `FKox3phon2ysc3aomyfquj105h9` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKs3wh6d7dlkdbrupc5vng1tmjl` FOREIGN KEY (`auther_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `course_reviews`
--
ALTER TABLE `course_reviews`
  ADD CONSTRAINT `FK2upbfe3nc5mo0rtrb764rhlh8` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKj2ub699nq8d2aomrmpa30h2oc` FOREIGN KEY (`course_id`) REFERENCES `cources` (`id`);

--
-- Constraints for table `faculties`
--
ALTER TABLE `faculties`
  ADD CONSTRAINT `FKamiax1nh90xl22wkdltxalpfg` FOREIGN KEY (`academic_specialization_id`) REFERENCES `acadimic_sepicailizations` (`id`),
  ADD CONSTRAINT `FKgmveir7kkrrjdj3t0b7r1m0if` FOREIGN KEY (`university_id`) REFERENCES `universities` (`id`);

--
-- Constraints for table `lectures`
--
ALTER TABLE `lectures`
  ADD CONSTRAINT `FK7ebof2n0n8of76vk0g552omsi` FOREIGN KEY (`course_id`) REFERENCES `cources` (`id`);

--
-- Constraints for table `lecture_reviews`
--
ALTER TABLE `lecture_reviews`
  ADD CONSTRAINT `FK2ovu15irh4unh31rumedirq61` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKato028bk4srdavtpxgbxdxmfy` FOREIGN KEY (`lecture_id`) REFERENCES `lectures` (`id`);

--
-- Constraints for table `students_enrolled_cources`
--
ALTER TABLE `students_enrolled_cources`
  ADD CONSTRAINT `FKciid9fpk9pc84qwjqe3tps73q` FOREIGN KEY (`course_id`) REFERENCES `cources` (`id`),
  ADD CONSTRAINT `FKdr38hhvdwlea8hclfhmmrked0` FOREIGN KEY (`student_id`) REFERENCES `users` (`id`);

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
