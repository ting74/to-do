<?php
$db_host = "localhost";
$db_username = "root";
$db_password = "123456";
$db_name = "final";

$db_link = @new mysqli($db_host, $db_username, $db_password, $db_name);
if ($db_link->connect_error != "") {
    echo "資料庫連接失敗!";
} else {
    $db_link->query("SET NAMES 'utf8'");
}

