<?php
session_start();
header('Content-Type: application/json');
include("connmysql.php");

if (!isset($_SESSION['sID'])) {
    header("Location: login.php");
    exit();
}

$sID = $_SESSION['sID'];
$input = json_decode(file_get_contents('php://input'), true);
$bg = $input['bg'] ?? '';

$sql = "UPDATE person SET sBg = ? WHERE sID = ?";
$stmt = $db_link->prepare($sql);
$stmt->bind_param("si", $bg, $sID);

if ($stmt->execute()) {
    $_SESSION['sBg'] = $bg;
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}
$stmt->close();
$db_link->close();
