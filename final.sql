-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2024 年 06 月 18 日 18:00
-- 伺服器版本： 10.4.28-MariaDB
-- PHP 版本： 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `final`
--

-- --------------------------------------------------------

--
-- 資料表結構 `final`
--

CREATE TABLE `final` (
  `sID` int(11) NOT NULL,
  `data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `final`
--

INSERT INTO `final` (`sID`, `data`) VALUES
(1, '[{\"date\":\"taskpool\",\"item\":[{\"name\":\"1\",\"isChecked\":false},{\"name\":\"2\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-19\",\"item\":[{\"name\":\"1\",\"isChecked\":false},{\"name\":\"2\",\"isChecked\":false},{\"name\":\"3\",\"isChecked\":false}]},{\"date\":\"2024-06-20\",\"item\":[]},{\"date\":\"2024-06-21\",\"item\":[]},{\"date\":\"2024-06-22\",\"item\":[]},{\"date\":\"2024-06-23\",\"item\":[]},{\"date\":\"2024-06-24\",\"item\":[]},{\"date\":\"2024-06-25\",\"item\":[]},{\"date\":\"nofinish\",\"item\":[{\"name\":\"1\",\"isChecked\":false},{\"name\":\"2\",\"isChecked\":false},{\"name\":\"3\",\"isChecked\":false},{\"name\":\"4\",\"isChecked\":false},{\"name\":\"5\",\"isChecked\":false},{\"name\":\"6\",\"isChecked\":false},{\"name\":\"7\",\"isChecked\":false},{\"name\":\"8\",\"isChecked\":false},{\"name\":\"9\",\"isChecked\":false}]}]'),
(2, '[{\"date\":\"taskpool\",\"item\":[{\"name\":\"9\",\"isChecked\":false}]},{\"date\":\"2024-06-17\",\"item\":[{\"name\":\"3\",\"isChecked\":false},{\"name\":\"1\",\"isChecked\":false}]},{\"date\":\"2024-06-18\",\"item\":[{\"name\":\"4\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-19\",\"item\":[{\"name\":\"5\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-20\",\"item\":[{\"name\":\"6\",\"isChecked\":false},{\"name\":\"9\",\"isChecked\":false}]},{\"date\":\"2024-06-21\",\"item\":[{\"name\":\"7\",\"isChecked\":false}]},{\"date\":\"2024-06-22\",\"item\":[{\"name\":\"9\",\"isChecked\":false}]},{\"date\":\"2024-06-23\",\"item\":[]},{\"date\":\"nofinish\",\"item\":[{\"name\":\"2\",\"isChecked\":false},{\"name\":\"1\",\"isChecked\":false},{\"name\":\"\\u3105\",\"isChecked\":false},{\"name\":\"q\",\"isChecked\":false},{\"name\":\"13333\",\"isChecked\":false}]}]'),
(3, '[{\"date\":\"taskpool\",\"item\":[{\"name\":\"1\",\"isChecked\":false}]},{\"date\":\"2024-06-17\",\"item\":[{\"name\":\"3\",\"isChecked\":false}]},{\"date\":\"2024-06-18\",\"item\":[]},{\"date\":\"2024-06-19\",\"item\":[]},{\"date\":\"2024-06-20\",\"item\":[]},{\"date\":\"2024-06-21\",\"item\":[]},{\"date\":\"2024-06-22\",\"item\":[]},{\"date\":\"2024-06-23\",\"item\":[]},{\"date\":\"nofinish\",\"item\":[{\"name\":\"1\",\"isChecked\":false},{\"name\":\"2\",\"isChecked\":false}]}]'),
(4, '[{\"date\":\"taskpool\",\"item\":[]},{\"date\":\"2024-06-17\",\"item\":[{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-18\",\"item\":[{\"name\":\"1\",\"isChecked\":false}]},{\"date\":\"2024-06-19\",\"item\":[{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-20\",\"item\":[{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-21\",\"item\":[{\"name\":\"q\",\"isChecked\":false}]},{\"date\":\"2024-06-22\",\"item\":[]},{\"date\":\"2024-06-23\",\"item\":[]},{\"date\":\"nofinish\",\"item\":[]}]'),
(5, '[{\"date\":\"taskpool\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"\",\"item\":[]},{\"date\":\"nofinish\",\"item\":[]}]');

-- --------------------------------------------------------

--
-- 資料表結構 `person`
--

CREATE TABLE `person` (
  `sID` int(11) NOT NULL,
  `sName` varchar(10) NOT NULL,
  `sEmail` varchar(50) NOT NULL,
  `sPassword` varchar(255) NOT NULL,
  `sBg` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- 傾印資料表的資料 `person`
--

INSERT INTO `person` (`sID`, `sName`, `sEmail`, `sPassword`, `sBg`) VALUES
(1, 'user', '123@gmail.com', '$2y$10$gHx6WnsS7yCEKyMuuwKei.IGZfuiNNQe7QMBfHoK8evXW/Bd.Jo1m', '3'),
(2, '測試2', '1234@gmail.com', '$2y$10$jCQG02r5Hrnv7s8hfKLGAeDuvQou4DJzHPBZpHD3Vt9kkcCrt6ZeW', '3'),
(3, '測試3', '12345@gmail.com', '$2y$10$VRIsbqMiCKgHRYmulrUCr.uboj/I0gwSO51nvGiVk8ZU5ixnuVI16', '6'),
(4, '測試4', '123456@gmail.com', '$2y$10$QgjqHrxYEx6kqywsKNVFA.6vIxflbsXKqqEf0mddeI7BGbaE.sdIy', '1'),
(5, '測試5', '1234567@gmail.com', '$2y$10$2ErdnlavYlE/s3z4OungtO3SfoHAjWomJhT724X4gS.VQ.rei2zOO', '2');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `final`
--
ALTER TABLE `final`
  ADD PRIMARY KEY (`sID`);

--
-- 資料表索引 `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`sID`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `final`
--
ALTER TABLE `final`
  MODIFY `sID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `person`
--
ALTER TABLE `person`
  MODIFY `sID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
