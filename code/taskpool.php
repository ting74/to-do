<?php
session_start();

if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
    echo
    '
     <div class="taskpool_Container tp_C_is_sideOpen">
            <div class="tasksContainer">
                <div class="navbarContainer is_sidebarOpan">
                    <div class="navbar">
                        <div class="navbar_title">
                            <span>任務池</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tp_C tp_C_is_sideOpen">
                <div class="tp_C_left">
                    <div class="tp_C_l_title">未歸類項目</div>
                    <div class="tp_tasks"></div>
                    <div class="tp_C_addtasks_C">
                        <div class="tp_add_edit_CC">
                            <div class="tp_add_edit_C">
                                <div contenteditable="true" class="tp_add_input"></div>
                                <button type="button" disabled class="tp_add_submit">
                                    <svg width="32px" height="32px" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill="none" stroke="currentColor" stroke-width="2"
                                            d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="tp_C_addtasks">
                            <div class="tp_add_ladel">
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
                <div class="tp_C_right">
                    <div class="tp_C_right_title">
                        <div class="tp_C_right_title_area" contenteditable="true"></div>
                    </div>
                    <button class="add_to_week">
                        <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px"
                            viewBox="0 0 567.22 567.22" xml:space="preserve">
                            <g>
                                <g>
                                    <g>
                                        <path d="M560.433,142.569L447.613,29.751c-4.339-4.339-10.247-6.787-16.396-6.787c-6.13,0-12.038,2.448-16.377,6.787
				l-20.198,20.218c-9.064,9.056-9.064,23.727,0,32.775l16.766,16.777l-19.534,19.535c-32.2-17.615-69.132-27.668-108.349-27.668
				c-39.18,0-76.053,10.017-108.22,27.604l-19.48-19.468l16.765-16.777c9.066-9.047,9.066-23.717,0-32.775l-20.198-20.218
				c-4.339-4.339-10.245-6.787-16.377-6.787c-6.148,0-12.056,2.448-16.396,6.787L6.795,142.569C2.456,146.908,0,152.808,0,158.957
				c0,6.149,2.456,12.048,6.795,16.388l20.217,20.218c9.049,9.039,23.708,9.039,32.774-0.008l18.407-18.409l16.304,16.314
				c-23.578,35.73-37.409,78.438-37.409,124.357c0,124.864,101.594,226.438,226.43,226.438c124.856,0,226.43-101.571,226.43-226.438
				c0-45.876-13.813-88.539-37.337-124.25l16.416-16.424l18.406,18.409c9.065,9.047,23.729,9.047,32.774,0.008l20.219-20.218
				c4.339-4.339,6.793-10.239,6.793-16.388C567.226,152.808,564.77,146.908,560.433,142.569z M283.519,489.357
				c-94.572,0-171.533-76.949-171.533-171.541c0-94.584,76.961-171.536,171.533-171.536c94.575,0,171.554,76.951,171.554,171.536
				C455.073,412.409,378.096,489.357,283.519,489.357z" />
                                        <path d="M362.604,290.375h-51.608v-51.636c0-15.157-12.296-27.446-27.457-27.446c-15.141,0-27.436,12.287-27.436,27.446v51.636
				h-51.645c-15.162,0-27.457,12.279-27.457,27.439c0,15.167,12.295,27.446,27.457,27.446h51.645v51.636
				c0,15.157,12.295,27.446,27.436,27.446c15.161,0,27.457-12.289,27.457-27.446v-51.636h51.608
				c15.161,0,27.457-12.279,27.457-27.446C390.061,302.655,377.765,290.375,362.604,290.375z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <ul class="add_to_week_ul">
                        <li class="add_to_week_li_item"></li>
                        <li class="add_to_week_li_item"></li>
                        <li class="add_to_week_li_item"></li>
                        <li class="add_to_week_li_item"></li>
                        <li class="add_to_week_li_item"></li>
                        <li class="add_to_week_li_item"></li>
                        <li class="add_to_week_li_item"></li>
                    </ul>
                    <label class="switch">
                        <input type="checkbox" class="swcheck">
                        <span class="slider">
                            <svg class="slider-icon" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" role="presentation">
                                <path fill="none" d="m4 16.5 8 8 16-16"></path>
                            </svg>
                        </span>
                    </label>
                </div>
            </div>
        </div>
    ';
} else {
    echo '不可訪問';
    exit;
}
