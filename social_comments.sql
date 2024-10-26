-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: social
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `desc` varchar(200) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `userId` int NOT NULL,
  `postId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `userId_idx` (`postId`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (3,'test one','2024-08-21 18:27:54',13,15),(4,'','2024-08-21 18:27:58',13,15),(14,'test one ','2024-08-21 19:02:26',13,NULL),(18,'test one','2024-08-21 19:41:52',13,NULL),(19,'test one','2024-08-21 19:42:01',13,NULL),(20,'uuyuy','2024-08-21 19:42:25',13,NULL),(21,'jkk','2024-08-21 19:42:32',13,16),(22,'ahlen','2024-08-21 19:43:15',13,NULL),(24,'cc','2024-08-21 19:54:46',13,NULL),(25,'aa','2024-08-21 20:10:16',13,NULL),(26,'ghgh','2024-08-21 20:12:29',13,NULL),(27,'aaa','2024-08-21 20:14:04',13,15),(28,'ffdfdf','2024-08-21 20:14:45',13,16),(29,'comments','2024-08-21 20:15:47',13,16),(30,'test two ','2024-08-21 20:23:17',13,NULL),(31,'aaa','2024-08-21 20:34:46',13,16),(32,'a','2024-08-21 20:39:53',13,16),(33,'test3','2024-08-21 23:21:36',13,16),(34,'aaa','2024-08-21 23:23:53',13,16),(35,'first tst','2024-08-21 23:40:07',13,16),(36,'yyy','2024-08-21 23:40:18',13,9),(37,'test','2024-08-21 23:47:46',13,16),(38,'bb','2024-08-21 23:47:52',13,16),(39,'aaa','2024-08-21 23:50:34',13,16),(40,'comment has been created','2024-08-21 23:54:56',13,16),(41,'aaa','2024-08-22 10:50:30',13,8),(42,'a','2024-08-22 11:00:43',13,16),(43,'aa','2024-08-22 11:03:17',13,16),(44,'test','2024-08-22 11:06:26',13,8),(45,'aa','2024-08-22 11:07:20',13,4),(46,'test55','2024-08-22 11:07:33',13,5),(47,'yes,okay','2024-08-22 11:08:28',13,17),(48,'p','2024-08-22 12:27:01',13,17),(49,'hello','2024-08-23 17:53:36',13,18);
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-26 19:00:56
