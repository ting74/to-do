<?php
session_start();
include("connmysql.php");

$sId = $_SESSION['sID'];
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    $sql_query = "SELECT `data` FROM final WHERE sID = ?";
    $stmt = $db_link->prepare($sql_query);
    $stmt->bind_param("i", $sId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $data = json_decode($row['data'], true);
        echo json_encode($data);
    } else {
        echo json_encode([]);
    }

    $stmt->close();
    $db_link->close();
} else {
    echo '不可訪問';
    exit;
}
