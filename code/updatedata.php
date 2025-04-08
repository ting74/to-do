<?php
session_start();
include("connmysql.php");

header('Content-Type: application/json');
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $json = file_get_contents('php://input');
        $data = json_decode($json, true);

        if (json_last_error() === JSON_ERROR_NONE) {
            $userId = $_SESSION['sID'];

            $json_data = json_encode($data);

            $stmt = $db_link->prepare("UPDATE final SET data = ? WHERE sID = ?");
            $stmt->bind_param('si', $json_data, $userId);

            if ($stmt->execute()) {
                echo json_encode(['status' => 'success']);
            } else {
                echo json_encode(['status' => 'error']);
            }
        }
    }

    $stmt->close();
    $db_link->close();
} else {
    echo '不可訪問';
    exit;
}
