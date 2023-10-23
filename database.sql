-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for mentorey
CREATE DATABASE IF NOT EXISTS `mentorey` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `mentorey`;

-- Dumping structure for table mentorey.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id` int(11) DEFAULT 0,
  `password` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.category
CREATE TABLE IF NOT EXISTS `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `label` char(50) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.channels
CREATE TABLE IF NOT EXISTS `channels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `owner_id` int(11) NOT NULL DEFAULT 0,
  `opposite_id` int(11) NOT NULL DEFAULT 0,
  `channel_id` varchar(255) NOT NULL DEFAULT '0',
  `status` varchar(50) DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.currency_rates
CREATE TABLE IF NOT EXISTS `currency_rates` (
  `id` int(11) NOT NULL DEFAULT 0,
  `data` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.lessons
CREATE TABLE IF NOT EXISTS `lessons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ownerID` int(11) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `pack` int(11) DEFAULT NULL,
  `disRate` float DEFAULT NULL,
  `categoryID` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `purpose` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE,
  KEY `ownerID` (`ownerID`) USING BTREE,
  KEY `categoryID` (`categoryID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.lesson_booking
CREATE TABLE IF NOT EXISTS `lesson_booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buyer_id` int(11) NOT NULL DEFAULT 0,
  `coach_id` int(11) NOT NULL DEFAULT 0,
  `lesson_id` int(11) NOT NULL DEFAULT 0,
  `lesson_pack` int(11) NOT NULL DEFAULT 0,
  `lesson_type` char(50) NOT NULL DEFAULT '0',
  `start_time` varchar(50) DEFAULT NULL,
  `end_time` varchar(50) DEFAULT NULL,
  `channel` varchar(50) NOT NULL DEFAULT '0',
  `is_completed` varchar(50) NOT NULL DEFAULT 'incomplete',
  `feedback` text DEFAULT NULL,
  `relevance` tinyint(4) DEFAULT NULL,
  `interaction` tinyint(4) DEFAULT NULL,
  `expertise` tinyint(4) DEFAULT NULL,
  `attendance` tinyint(4) DEFAULT NULL,
  `kindness` tinyint(4) DEFAULT NULL,
  `origin_price` float DEFAULT NULL,
  `paid_amount` float DEFAULT NULL,
  `paid_currency` varchar(50) DEFAULT NULL,
  `pay_transaction_id` varchar(255) DEFAULT NULL,
  `feedback_time` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.override_avail
CREATE TABLE IF NOT EXISTS `override_avail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coach_id` int(11) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `from_time` tinyint(4) DEFAULT NULL,
  `to_time` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.seminar
CREATE TABLE IF NOT EXISTS `seminar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `basic_id` int(11) NOT NULL DEFAULT 0,
  `start_time` text DEFAULT NULL,
  `status` varchar(50) DEFAULT 'active' COMMENT 'active | expired | disabled',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.seminar_basic
CREATE TABLE IF NOT EXISTS `seminar_basic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `language` varchar(255) NOT NULL DEFAULT '',
  `communication_tool` varchar(255) NOT NULL DEFAULT '',
  `coach_id` int(11) NOT NULL DEFAULT 0,
  `category_id` int(11) NOT NULL DEFAULT 0,
  `price` float NOT NULL DEFAULT 0,
  `duration` char(50) NOT NULL DEFAULT '0',
  `description` text NOT NULL,
  `purpose` text NOT NULL,
  `banner` text NOT NULL,
  `max_pupil_num` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.seminar_booking
CREATE TABLE IF NOT EXISTS `seminar_booking` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `seminar_id` int(11) NOT NULL DEFAULT 0,
  `buyer_id` int(11) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'incomplete',
  `paid_amount` float DEFAULT NULL,
  `paid_currency` varchar(50) DEFAULT NULL,
  `pay_transaction_id` varchar(255) DEFAULT NULL,
  `feedback` text DEFAULT NULL,
  `relevance` tinyint(4) DEFAULT NULL,
  `interaction` tinyint(4) DEFAULT NULL,
  `expertise` tinyint(4) DEFAULT NULL,
  `attendance` tinyint(4) DEFAULT NULL,
  `kindness` tinyint(4) DEFAULT NULL,
  `channel` varchar(50) NOT NULL DEFAULT '0',
  `origin_price` float DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.transactions
CREATE TABLE IF NOT EXISTS `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buyer_id` varchar(50) DEFAULT NULL,
  `coach_id` varchar(50) DEFAULT NULL,
  `lesson_id` varchar(50) DEFAULT NULL,
  `lesson_pack` int(11) DEFAULT NULL,
  `lesson_type` varchar(50) DEFAULT NULL,
  `timeline` varchar(255) DEFAULT NULL,
  `channel` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `balance` float DEFAULT 0,
  `avatar` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `timezone` char(50) DEFAULT NULL,
  `currency` char(50) DEFAULT 'EUR',
  `is_teacher` tinyint(4) DEFAULT 0,
  `language` varchar(255) DEFAULT '[''English'']',
  `user_role` char(50) DEFAULT 'default',
  `intro_video` varchar(255) DEFAULT NULL,
  `skype` varchar(255) DEFAULT NULL,
  `slack` varchar(255) DEFAULT NULL,
  `discord` varchar(255) DEFAULT NULL,
  `hangouts` varchar(255) DEFAULT NULL,
  `zoom` varchar(255) DEFAULT NULL,
  `profile` text DEFAULT NULL,
  `MAT` text DEFAULT NULL,
  `LS` text DEFAULT NULL,
  `trial_price` float DEFAULT 5,
  `is_verified` tinyint(1) DEFAULT 0,
  `stripe_id` varchar(255) DEFAULT NULL,
  `verification_token` varchar(255) DEFAULT NULL,
  `verification_token_expires_at` datetime DEFAULT NULL,
  `reset_password_token` varchar(255) DEFAULT NULL,
  `reset_password_token_expires_at` datetime DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

-- Dumping structure for table mentorey.weekly_avail
CREATE TABLE IF NOT EXISTS `weekly_avail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coach_id` int(11) DEFAULT NULL,
  `day_of_week` tinyint(4) DEFAULT NULL,
  `from_time` tinyint(4) DEFAULT NULL,
  `to_time` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Data exporting was unselected.

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
