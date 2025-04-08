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
$oldpassword = $input['old'] ?? '';
$newpassword = $input['new'] ?? '';

$sql = "SELECT sPassword FROM person WHERE sID = ?";
$stmt = $db_link->prepare($sql);
$stmt->bind_param("i", $sID);
$stmt->execute();
$stmt->bind_result($hashed_password);
$stmt->fetch();
$stmt->close();

if (password_verify($oldpassword, $hashed_password)) {
    $new_hashed_password = password_hash($newpassword, PASSWORD_DEFAULT);
    $update_sql = "UPDATE person SET sPassword = ? WHERE sID = ?";
    $update_stmt = $db_link->prepare($update_sql);
    $update_stmt->bind_param("si", $new_hashed_password, $sID);

    if ($update_stmt->execute()) {
        if ($update_stmt->affected_rows > 0) {
            echo json_encode(['success' => true]);
        } else {
            echo json_encode(['success' => false, 'message' => '密碼更新失敗']);
        }
    } else {
        echo json_encode(['success' => false]);
    }
    $update_stmt->close();
} else {
    echo json_encode(['success' => false]);
}

$db_link->close();
