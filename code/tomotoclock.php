<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    echo '
<div class="tomatoclock_container">
        <div class="tasksContainer">
            <div class="navbarContainer is_sidebarOpan">
                <div class="navbar">
                    <div class="navbar_title">
                        <span>番茄鐘</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tc_bg tc_bg_is_sideOpen">
            <div class="tc_left">
                <div class="tc_l_top">
                    <div class="tc_C_l_title">
                        <div class="tc_C_l_title_area" contenteditable="true"></div>
                    </div>
                </div>
                <div class="tc_l_bottom">
                    <div class="tc_b_title">今日任務</div>
                    <div class="tc_tasks"></div>
                    <div class="add_tc_item_c">
                        <div class="add_tc_item_cc">
                            <div class="add_tc_item">
                                <div contenteditable="true" class="tc_add_input"></div>
                                <button type="button" disabled class="tc_add_submit">
                                    <svg width="32px" height="32px" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="currentColor" stroke-width="2"
                                            d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="add_tc_ladel_c">
                            <div class="add_tc_ladel">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span style="margin-left: 8px;">添加任務</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tc_right">
                <div class="tc_Container">
                    <div class="tc_chooseContainer">
                        <button class="tc_chooseitem tc_time_now" type="button">pomodoro</button>
                        <button class="tc_chooseitem" type="button">short</button>
                        <button class="tc_chooseitem" type="button">long</button>
                    </div>
                    <div class="tc_time">25:00</div>
                    <div class="tc_start">
                        <button id="tc_start" type="button">start</button>
                    </div>
                    <audio id="endSound" src="./sound/end_sound.mp3"></audio>
                </div>
            </div>
        </div>
    </div>
';
} else {
    echo '不可訪問';
    exit;
}
