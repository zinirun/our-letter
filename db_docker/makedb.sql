-- ourletter_db 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `ourletter_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ourletter_db`;

-- 테이블 ourletter_db.letter 구조 내보내기
CREATE TABLE IF NOT EXISTS `letter` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url_id` varchar(12) NOT NULL,
  `from` varchar(10) NOT NULL,
  `to` varchar(10) NOT NULL,
  `q_cnt` tinyint NOT NULL DEFAULT '0',
  `q1` varchar(25) NOT NULL,
  `q2` varchar(25) DEFAULT NULL,
  `q3` varchar(25) DEFAULT NULL,
  `q4` varchar(25) DEFAULT NULL,
  `q5` varchar(25) DEFAULT NULL,
  `q1_a` varchar(25) NOT NULL,
  `q2_a` varchar(25) DEFAULT NULL,
  `q3_a` varchar(25) DEFAULT NULL,
  `q4_a` varchar(25) DEFAULT NULL,
  `q5_a` varchar(25) DEFAULT NULL,
  `content` varchar(1010) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;