CREATE DATABASE IF NOT EXISTS `ourletter_db`;
USE `ourletter_db`;

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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=UTF8;