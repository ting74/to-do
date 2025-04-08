<?php
if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    echo '
<div class="next_seven_Container">
<div class="tasksContainer">
            <div class="navbarContainer is_sidebarOpan">
                <div class="navbar">
                    <div class="navbar_title">
                        <span>任務管理</span>
                    </div>
                </div>
            </div>
            <div class="Container is_sidebarOpan">
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="Citem">
                    <div class="container">
                        <div class="date"></div>
                        <div class="list"></div>
                        <div class="bttC">
                            <button type="button" class="intextbtn">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>添加任務</span>
                            </button>
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
