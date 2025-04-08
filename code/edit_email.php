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
$email = $input['email'] ?? '';

$checkEmailSql = "SELECT sID FROM person WHERE sEmail = ?";
$checkStmt = $db_link->prepare($checkEmailSql);
$checkStmt->bind_param("s", $email);
$checkStmt->execute();
$checkStmt->store_result();

if ($checkStmt->num_rows > 0) {
    echo json_encode(['success' => false]);
    $checkStmt->close();
    $db_link->close();
    exit();
}

$checkStmt->close();

$sql = "UPDATE person SET sEmail = ? WHERE sID = ?";
$stmt = $db_link->prepare($sql);
$stmt->bind_param("si", $email, $sID);

if ($stmt->execute()) {
    $_SESSION['sEmail'] = $email;
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$stmt->close();
$db_link->close();
