<?php
session_start();
include("connmysql.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        $userEmail = $_POST['email'];
        $userPassword = $_POST['password'];

        $stmt = $db_link->prepare("SELECT sID, sName, sPassword, sBg FROM person WHERE sEmail = ?");
        $stmt->bind_param("s", $userEmail);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $stmt->bind_result($sID, $sName, $hashedPassword, $sBg);
            $stmt->fetch();

            if (password_verify($userPassword, $hashedPassword)) {
                $_SESSION['sID'] = $sID;
                $_SESSION['sName'] = $sName;
                $_SESSION['sEmail'] = $userEmail;
                $_SESSION['sBg'] = $sBg;

                header("Location: index.php");
                exit();
            } else {
                $loginError = "密碼錯誤，請重新嘗試。";
            }
        } else {
            $loginError = "郵箱不存在，請重新嘗試。";
        }

        $stmt->close();
    } elseif (isset($_POST['register'])) {
        $userName = $_POST["name"];
        $userEmail = $_POST["email"];
        $userPassword = password_hash($_POST["password"], PASSWORD_DEFAULT);

        $stmt = $db_link->prepare("SELECT sEmail FROM person WHERE sEmail = ?");
        $stmt->bind_param("s", $userEmail);
        $stmt->execute();
        $stmt->store_result();

        if ($stmt->num_rows > 0) {
            $registerError = "電子郵件已註冊";
            $showRegister = true;
        } else {
            $stmt = $db_link->prepare("INSERT INTO person (sName, sEmail, sPassword) VALUES (?, ?, ?)");
            $stmt->bind_param("sss", $userName, $userEmail, $userPassword);

            if ($stmt->execute()) {
                $userId = $stmt->insert_id;

                $emptyData = json_encode([
                    ["date" => "taskpool", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "", "item" => []],
                    ["date" => "nofinish", "item" => []]
                ]);

                $stmt = $db_link->prepare("INSERT INTO final (sID, data) VALUES (?, ?)");
                $stmt->bind_param("is", $userId, $emptyData);

                $stmt->execute();
                $registerSuccess = true;
            }
        }

        $stmt->close();
    }

    $db_link->close();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>to.do</title>
    <link rel="shortcut icon" href="./icon/logo.ico" type="image/x-icon">
    <link rel="stylesheet" href="./css/login.css">
</head>

<body>
    <div class="bg"><img src="./pt/login-bg2.jpeg" alt=""></div>
    <div class="version">v1.0.0</div>
    <div class="form_Container">
        <div class="container">
            <input type="checkbox" id="register_toggle" <?php if (isset($showRegister) && $showRegister) echo 'checked'; ?>>
            <div class="slider">
                <form class="form" method="POST">
                    <span class="title">
                        <div class="logo"><img src="./pt/logo.png" alt=""></div>
                        <span>Login</span>
                    </span>
                    <div class="form_control">
                        <input type="email" name="email" class="input" required="">
                        <label class="label">Email</label>
                    </div>
                    <div class="form_control">
                        <input type="password" name="password" class="input" required="">
                        <label class="label">Password</label>
                    </div>
                    <button name="login" id="login">登入</button>
                    <?php if (isset($loginError)) : ?>
                        <p style="color:#B91C1C;"><?php echo $loginError; ?></p>
                    <?php endif; ?>
                    <span class="bottom_text">沒有帳戶？<label for="register_toggle" class="swtich">註冊</label></span>
                </form>
                <form class="form" method="POST">
                    <span class="title">
                        <div class="logo"><img src="./pt/logo.png" alt=""></div>
                        <span>Sign Up</span>
                    </span>
                    <div class="form_control">
                        <input type="text" name="name" class="input" required="">
                        <label class="label">Username</label>
                    </div>
                    <div class="form_control">
                        <input type="email" name="email" class="input" required="">
                        <label class="label">Email</label>
                    </div>
                    <div class="form_control">
                        <input type="password" name="password" class="input" required="">
                        <label class="label">Password</label>
                    </div>
                    <button name="register" id="sign">註冊</button>
                    <?php if (isset($registerError)) : ?>
                        <p style="color:#B91C1C;"><?php echo $registerError; ?></p>
                    <?php endif; ?>
                    <span class="bottom_text">已經有帳戶？<label for="register_toggle" class="swtich">登入</label></span>
                </form>
            </div>
        </div>
    </div>
    <?php if (isset($registerSuccess) && $registerSuccess) : ?>
        <div class="r_hint_bg show">
            <div class="r_hint">
                註冊成功，請登入。
            </div>
        </div>
    <?php endif; ?>
</body>

</html>