<?php
session_start();

$sID = $_SESSION['sID'];
$sName = $_SESSION['sName'];
$sEmail = $_SESSION['sEmail'];
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    echo '
        <div class="setting_Container">
                    <div class="setting_title">
                        <p>設定</p>
                        <button id="close_setting_C">
                            <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 32 32"
                                style="enable-background:new 0 0 512 512" xml:space="preserve">
                                <g>
                                    <path
                                        d="m29.475 24.525-8.172-8.172a.5.5 0 0 1 0-.707l8.052-8.052c1.361-1.361 1.473-3.574.249-4.934a3.47 3.47 0 0 0-2.512-1.16 3.46 3.46 0 0 0-2.566 1.024l-8.172 8.171a.514.514 0 0 1-.707 0l-8.052-8.05c-1.361-1.361-3.574-1.473-4.934-.249a3.47 3.47 0 0 0-1.16 2.512 3.471 3.471 0 0 0 1.024 2.567l8.172 8.172a.499.499 0 0 1 0 .707l-8.052 8.052c-1.361 1.361-1.473 3.574-.249 4.934a3.474 3.474 0 0 0 2.607 1.161c.934 0 1.809-.362 2.472-1.025l8.172-8.171a.514.514 0 0 1 .707 0l8.052 8.052c1.361 1.361 3.574 1.473 4.934.249a3.47 3.47 0 0 0 1.16-2.512 3.477 3.477 0 0 0-1.025-2.569z"
                                        fill="currentColor" opacity="1"></path>
                                </g>
                            </svg>
                        </button>
                    </div>
                    <div class="setting_bottom">
                        <div class="setting_b_left">
                            <button class="setting_b_left_btn ischeck" data-target="item1">
                                <div class="setting_b_left_btn_icon">
                                    <svg width="512" height="512" x="0" y="0" viewBox="0 0 32 32"
                                        style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                        <g>
                                            <circle cx="16" cy="8" r="7" fill="currentColor" opacity="1">
                                            </circle>
                                            <path
                                                d="M20.97 17h-9.94A8.04 8.04 0 0 0 3 25.03V30a1 1 0 0 0 1 1h24a1 1 0 0 0 1-1v-4.97A8.04 8.04 0 0 0 20.97 17z"
                                                fill="currentColor" opacity="1"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="setting_b_left_btn_title">個人資訊</div>
                        </button>
                        <button class="setting_b_left_btn" data-target="item2">
                            <div class="setting_b_left_btn_icon">
                                <svg width="512" height="512" x="0" y="0" viewBox="0 0 24 24"
                                    style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                    <g>
                                        <path
                                            d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5zM7 6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm13 11a3.009 3.009 0 0 1-3 3H7a3.009 3.009 0 0 1-3-3v-.52l3.48-2.79a1.007 1.007 0 0 1 1.18-.05l.57.39a3.037 3.037 0 0 0 3.54-.16l2.45-1.97a1 1 0 0 1 1.34.08L20 15.41z"
                                            fill="currentColor" opacity="1"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="setting_b_left_btn_title">背景</div>
                        </button>
                        <button class="setting_b_left_btn" data-target="item3">
                            <div class="setting_b_left_btn_icon">
                                <svg width="512" height="512" x="0" y="0"
                                    viewBox="0 0 45.999 45.999" style="enable-background:new 0 0 512 512"
                                    xml:space="preserve" >
                                    <g>
                                        <path
                                            d="M39.264 6.736c-8.982-8.981-23.545-8.982-32.528 0-8.982 8.982-8.981 23.545 0 32.528 8.982 8.98 23.545 8.981 32.528 0 8.981-8.983 8.98-23.545 0-32.528zM25.999 33a3 3 0 1 1-6 0V21a3 3 0 1 1 6 0v12zm-3.053-17.128c-1.728 0-2.88-1.224-2.844-2.735-.036-1.584 1.116-2.771 2.879-2.771 1.764 0 2.88 1.188 2.917 2.771-.001 1.511-1.152 2.735-2.952 2.735z"
                                            fill="currentColor" opacity="1"></path>
                                    </g>
                                </svg>
                            </div>
                            <div class="setting_b_left_btn_title">關於</div>
                        </button>
                        </div>
                        <div class="setting_b_right">
                            <div class="setting_b_right_item active" id="item1">
                                <div class="setting_bri_item">
                                    <div>使用者名稱</div>
                                    <div class="edit_C">
                                        <div class="sbri_username">' . $sName . '</div>
                                        <button class="edit_btn" id="edit_username_btn">
                                            <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 492.493 492"
                                                style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                                <g>
                                                    <path
                                                        d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                        fill="currentColor" opacity="1" data-original="#000000"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="setting_bri_item">
                                    <div>電子郵件</div>
                                    <div class="edit_C">
                                        <div class="sbri_email">' . $sEmail . '</div>
                                        <button class="edit_btn" id="edit_email_btn">
                                            <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 492.493 492"
                                                style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                                <g>
                                                    <path
                                                        d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                        fill="currentColor" opacity="1" data-original="#000000"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="setting_bri_item">
                                    <div>密碼</div>
                                    <div class="edit_C">
                                        <div>******</div>
                                        <button class="edit_btn" id="edit_password_btn">
                                            <svg width="100%" height="100%" x="0" y="0" viewBox="0 0 492.493 492"
                                                style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                                <g>
                                                    <path
                                                        d="M304.14 82.473 33.165 353.469a10.799 10.799 0 0 0-2.816 4.949L.313 478.973a10.716 10.716 0 0 0 2.816 10.136 10.675 10.675 0 0 0 7.527 3.114 10.6 10.6 0 0 0 2.582-.32l120.555-30.04a10.655 10.655 0 0 0 4.95-2.812l271-270.977zM476.875 45.523 446.711 15.36c-20.16-20.16-55.297-20.14-75.434 0l-36.949 36.95 105.598 105.597 36.949-36.949c10.07-10.066 15.617-23.465 15.617-37.715s-5.547-27.648-15.617-37.719zm0 0"
                                                        fill="currentColor" opacity="1" data-original="#000000"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div class="sign_out_C">
                                    <button id="sign_out">
                                        <svg width="25px" height="25px" x="0" y="0" viewBox="0 0 110 110"
                                            style="enable-background:new 0 0 512 512" xml:space="preserve">
                                            <g>
                                                <path d="M29 5v27h8V13h60v84H37V78h-8v27h76V5z" fill="currentColor" opacity="1">
                                                </path>
                                                <path
                                                    d="M27.83 68.17 18.66 59H74c2.21 0 4-1.79 4-4s-1.79-4-4-4H18.66l9.17-9.17C28.61 41.05 29 40.02 29 39a3.998 3.998 0 0 0-6.83-2.83l-16 16a4.008 4.008 0 0 0 0 5.66l16 16c.78.78 1.81 1.17 2.83 1.17a3.998 3.998 0 0 0 2.83-6.83z"
                                                    fill="currentColor" opacity="1"></path>
                                            </g>
                                        </svg>
                                        <div>退出登入</div>
                                    </button>
                                </div>
                            </div>
                            <div class="setting_b_right_item" id="item2">
                                <div class="setting_bg_C">
                                    <div class="setting_bg_item" data-index="1"><img draggable="false" src="./pt/bg1.jpeg" alt=""></div>
                                    <div class="setting_bg_item" data-index="2"><img draggable="false" src="./pt/bg2.jpeg" alt=""></div>
                                    <div class="setting_bg_item" data-index="3"><img draggable="false" src="./pt/bg3.jpeg" alt=""></div>
                                    <div class="setting_bg_item" data-index="4"><img draggable="false" src="./pt/bg4.jpeg" alt=""></div>
                                    <div class="setting_bg_item" data-index="5"><img draggable="false" src="./pt/bg5.jpeg" alt=""></div>
                                    <div class="setting_bg_item" data-index="6"><img draggable="false" src="./pt/bg6.jpeg" alt=""></div>
                                </div>
                            </div>
                            <div class="setting_b_right_item" id="item3">
                                <div class="about_item"><img src="./pt/logo.png" alt=""></div>
                                <div class="about_item">讓我們一起讓世界變得更美好</div>
                                <div class="about_item">to.do, v1.0.0</div>
                            </div>
                        </div>
                    </div>
                </div>
';
} else {
    echo '不可訪問';
    exit;
}
