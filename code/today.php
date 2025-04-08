<?php
session_start();

$sID = $_SESSION['sID'];
$sName = $_SESSION['sName'];

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    echo '
    <div class="today_Container td_C_is_sideOpen">
                <div class="td_content">
                    <div class="td_title">
                        <div class="td_title_line1">hello <span id="td_username">' . $sName . '</span></div>
                        <div class="td_title_line2">你今天的計劃是什麼？</div>
                    </div>
                    <div class="td_misson_C">
                        <div class="td_time"></div>
                        <div class="td_w_C">
                            <div class="td_w_wrapper">
                                <div class="td_tasks"></div>
                            </div>
                            <div class="td_w_addtask_C">
                                <div class="td_add_btn">
                                    <div class="td_add_edit_C">
                                        <div contenteditable="true" class="td_add_input"></div>
                                        <button type="button" disabled class="td_add_submit">
                                            <svg width="32px" height="32px" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" stroke="currentColor" stroke-width="2"
                                                    d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div class="td_add_ladel">
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <span style="margin-left: 14px;">添加任務</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    ';
} else {
    echo '不可訪問';
    exit;
}
