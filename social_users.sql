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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `coverpic` varchar(400) DEFAULT NULL,
  `profilePic` varchar(400) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `iduser_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test','test@gmail.com','$2b$10$jSB9xI1/AyFqPtMMQQ10TewXkkMppOHK9BtGO0tpibkR17eguD58.','tested',NULL,NULL,NULL,NULL),(2,'tested','tested@gmail.com','$2b$10$3.t7wN59cxW9FSdCfkz4Ju2ZO1NuRGp.aBikx1SVoh8sJtn/jJ1Da','tested',NULL,NULL,NULL,NULL),(3,'drag','ppp@gmail.com','$2b$10$OfKprFtKbvAEQOHvbuy.GuFJHPFwX3j6EvdBTpZ8556UlgTott9m2','vfvvfv',NULL,NULL,NULL,NULL),(4,'dragu','ppup@gmail.com','$2b$10$/C/oOHiip0DoTzaEKIwpxu4D7YP9f2D2.0cjPgFE8H/GPFg0fTgDS','vfvvfvu',NULL,NULL,NULL,NULL),(5,'llil','aaa@gmail.com','$2b$10$DMrARyzg1ZcPo0ZHEgDgh.SUGDrK7wUpKuumzwbjfwb2IAyHO0Kta','h:kl;:k::::',NULL,NULL,NULL,NULL),(6,'AhmedTn','ahmedput51@gmail.com','$2b$10$CY2D6PyRiwA/FWIwEx1W.uRJCHyjOmZGfTdhrKbpALEXm.hDCn82G','ahmed',NULL,NULL,NULL,NULL),(7,'lkjkjhaa','aaaa@gmail.com','$2b$10$4PHM70ZLDRwHY6IhJfV7MeaPiXOBJDPegJDkTjFRfvTRHI2YZlkxy','GYM FITNESS',NULL,NULL,NULL,NULL),(8,'teste','tested1@gmail.com','$2b$10$bcqZYnUBoUoFNlWi0.CsWeQ1FqwHuHQqtPHMVBeChh8KQp/6XQvv6','tested',NULL,NULL,NULL,NULL),(9,'bollo','bollo@gmail.com','$2b$10$2U/2WYUiurGW4Sxf6grNfOFE23JhljIB6bTWG0seqxkmragcXyPVa','bollo',NULL,NULL,NULL,NULL),(10,'polo','polo@gmail.com','$2b$10$5NGOwaA9z5wqjPAC2cxLMuONtXWRgXhx1hphFXVlfyKJ2O9YPAOt.','polo','https://cdn.pixabay.com/photo/2024/02/24/00/05/concert-hall-8593024_640.jpg','https://cdn.pixabay.com/photo/2024/02/24/00/05/concert-hall-8593024_640.jpg',NULL,NULL),(11,'DIDI','did@gmail.com','drffrfggrge','didi',NULL,NULL,NULL,NULL),(12,'test3','tested3@gmail.com','$2b$10$ZmZ.bEIZueu/LSZgAAOh1e.fkX/kOEuZsvLt6s6Q7egcmNltEeGEy','test3',NULL,NULL,NULL,NULL),(13,'test4','tested4@gmail.com','$2b$10$S/Q78Oad79CWinvFLOOpf.9ddaj7XrSupVP7zgkof1ju90Gj/eooG','Ahmed Benhenda','1724595004685Capture d\'Ã©cran 2024-01-23 101318.png','1724595004669Capture d\'Ã©cran 2023-12-25 150221.png','monastir','vahbi.co'),(14,'test5','tested5@gmail.com','$2b$10$eR7Q1hCzgGyMBt1XIIfdvuVc73ZkgpB83BOWI1PAml7/t5tYG02ru','Ahmed',NULL,NULL,NULL,NULL),(15,'test6','tested6@gmail.com','$2b$10$.3ZIAZ39qe9Vknf9Jgi4weDnX7HUqSMmW3o6nBRzZMBslPmVnD1rm','bilel',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-26 19:00:57
