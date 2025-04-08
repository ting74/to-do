let localData;
let setting_t;

fetch('./loaddata.php', { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
    .then((resp) => resp.json())
    .then((resp) => {
        localData = resp;
        // console.log(localData);
        updateTasks();
        // console.log(localData);
        load_td();
    });

//更新任務
function updateTasks() {
    const currentDate = new Date();
    const localDate = new Date(currentDate.toLocaleDateString('en-CA'));
    const formattedCurrentDate = localDate.toISOString().split('T')[0];
    const nofinishList = localData[8].item;

    for (let i = localData.length - 1; i >= 0; i--) {
        const entry = localData[i];
        if (i !== 0 && i !== 8 && entry.date < formattedCurrentDate && entry.date !== "") {
            nofinishList.push(...entry.item);
            localData.splice(i, 1);
        }
    }

    while (localData.length < 9) {
        localData.splice(localData.length - 1, 0, { "date": "", "item": [] });
    }

    for (let i = 1; i < localData.length - 1; i++) {
        const newDate = new Date(localDate);
        newDate.setDate(localDate.getDate() + i - 1);
        localData[i].date = newDate.toISOString().split('T')[0];
    }
}

function getSetting() {
    fetch('./setting.php', { headers: { 'X-Requested-With': 'XMLHttpRequest' } })
        .then((resp) => resp.text())
        .then((resp) => {
            setting_t = resp;
        });
}
getSetting();

function load_td() {
    const td_tasks = document.querySelector('.td_tasks');
    td_tasks.innerHTML = '';
    localData[1].item.forEach(item => {
        const newtaskitem = document.createElement('div');
        newtaskitem.className = 'td_taskitem';
        if (item.isChecked) {
            newtaskitem.draggable = false;
            newtaskitem.classList.add('td_taskitem_ischecked');
            newtaskitem.innerHTML = `
                <div class="td_item_checkbox_C">
                    <button type="button" role="checkbox" class="td_item_checkbox">
                        <div class="td_item_checkbox_pt td_item_checkbox_ischecked">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795">
                                        </polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="td_item_title">${item.name}</div>
                <div class="td_item_delete_C">
                    <button class="td_item_delete_btn">
                        <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path fill="currentColor"
                                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z">
                            </path>
                        </svg>
                    </button>
                </div>
            `;
        } else {
            newtaskitem.draggable = true;
            newtaskitem.innerHTML = `
                <div class="td_item_checkbox_C">
                    <button type="button" role="checkbox" class="td_item_checkbox">
                        <div class="td_item_checkbox_pt">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
                                        </g>
                                    </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="td_item_title">${item.name}</div>
                <div class="td_item_delete_C">
                    <button class="td_item_delete_btn">
                            <svg width="24px" height="24px" viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
                            </svg>
                    </button>
                </div>
            `;
        }
        td_tasks.appendChild(newtaskitem);
    });
}

function load_nsd() {
    const list = document.querySelectorAll('.list');
    list.forEach(l => l.innerHTML = '');
    var i = 0;
    localData.forEach((group, index) => {
        if (index === 0 || index === 8) {
            return;
        }
        group.item.forEach(item => {
            const newItem = document.createElement('div');
            newItem.className = 'item';
            if (item.isChecked) {
                newItem.draggable = false;
                newItem.classList.add('item_ischeck');
                newItem.innerHTML = `
                <div class="item_checkbox_C">
                    <button type="button" role="checkbox" class="item_checkbox">
                        <div class="item_checkbox_pt item_checkbox_ischecked">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795">
                                        </polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="item_title">${item.name}</div>
                <div class="item_delete_C">
                    <button type="button" class="delete_btn delete_btn_show">
                        <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z">
                            </path>
                        </svg>
                    </button>
                </div>
                `
            } else {
                newItem.draggable = true;
                newItem.innerHTML = `
                <div class="item_checkbox_C">
                    <button type="button" role="checkbox" class="item_checkbox">
                        <div class="item_checkbox_pt">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="item_title">${item.name}</div>
                <div class="item_delete_C">
                <button type="button" class="delete_btn">
                    <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z" />
                    </svg>
                </button>
                </div>
                `;
            }
            list[i].appendChild(newItem);
        });
        i++;
    });
}

function load_tp() {
    const tp_tasks = document.querySelector('.tp_tasks');
    tp_tasks.innerHTML = '';
    localData[0].item.forEach(item => {
        const newtaskitem = document.createElement('div');
        newtaskitem.className = 'tp_taskitem';
        if (item.isChecked) {
            newtaskitem.draggable = false;
            newtaskitem.classList.add('tp_taskitem_ischecked');
            newtaskitem.innerHTML = `
                <div class="tp_item_checkbox_C">
                    <button type="button" role="checkbox" class="tp_item_checkbox">
                        <div class="tp_item_checkbox_pt tp_item_checkbox_ischecked">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795">
                                        </polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="tp_item_title">${item.name}</div>
                <div class="tp_item_delete_C">
                    <button class="tp_item_delete_btn">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M2 2h16v16H2z"></path>
                                <path
                                    d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            `;
        } else {
            newtaskitem.draggable = true;
            newtaskitem.innerHTML = `
                <div class="tp_item_checkbox_C">
                    <button type="button" role="checkbox" class="tp_item_checkbox">
                        <div class="tp_item_checkbox_pt">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795">
                                        </polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="tp_item_title">${item.name}</div>
                <div class="tp_item_delete_C">
                    <button class="tp_item_delete_btn">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M2 2h16v16H2z"></path>
                                <path
                                    d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            `;
        }
        tp_tasks.appendChild(newtaskitem);
    });
}

function load_tc() {
    const tc_tasks = document.querySelector('.tc_tasks');
    tc_tasks.innerHTML = '';
    localData[1].item.forEach(item => {
        const newtaskitem = document.createElement('div');
        newtaskitem.className = 'tc_item';
        if (item.isChecked) {
            newtaskitem.draggable = false;
            newtaskitem.classList.add('tc_item_ischecked');
            newtaskitem.innerHTML = `
                <div class="tc_item_checkbox_C">
                    <button type="button" role="checkbox" class="tc_item_checkbox">
                        <div class="tc_item_checkbox_pt tc_item_checkbox_ischecked">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795">
                                        </polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="tc_item_title">${item.name}</div>
                <div class="tc_item_delete_C">
                    <button class="tc_item_delete_btn">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M2 2h16v16H2z"></path>
                                <path
                                    d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            `;
        } else {
            newtaskitem.draggable = true;
            newtaskitem.innerHTML = `
                <div class="tc_item_checkbox_C">
                    <button type="button" role="checkbox" class="tc_item_checkbox">
                        <div class="tc_item_checkbox_pt">
                            <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                                <g>
                                    <g>
                                        <polygon
                                            points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795">
                                        </polygon>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </button>
                </div>
                <div class="tc_item_title">${item.name}</div>
                <div class="tc_item_delete_C">
                    <button class="tc_item_delete_btn">
                        <svg width="16" height="16" viewBox="0 0 20 20">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M2 2h16v16H2z"></path>
                                <path
                                    d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                                    fill="currentColor"></path>
                            </g>
                        </svg>
                    </button>
                </div>
            `;
        }
        tc_tasks.appendChild(newtaskitem);
    });
}

// -----sidebar--------------------------------------------------------------------------------------
const sidebar_a = document.querySelectorAll('.sidebar_li_a');
const loginbody = document.querySelector('.loginbody');

sidebar_a.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        sidebar_a.forEach(link => link.classList.remove('sidebar_active'));
        this.classList.add('sidebar_active');

        const url = this.getAttribute('href');
        fetch(url, {
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
            .then(response => response.text())
            .then(data => {
                loginbody.innerHTML = data;
                renewSidebar();
                if (document.querySelector('.today_Container')) {
                    today();
                    load_td();
                }
                if (document.querySelector('.next_seven_Container')) {
                    next_seven();
                    load_nsd();
                }
                if (document.querySelector('.taskpool_Container')) {
                    taskpool();
                    load_tp();
                }
                if (document.querySelector('.tomatoclock_container')) {
                    tomatoclock();
                    load_tc();
                }
            })
    });
});

const setting = document.querySelector('.setting');
const sidebar = document.querySelector('.sidebar');
const sidebarlbtn = document.querySelector('.sidebar_lockbutton');
let navbarC = document.querySelector('.navbarContainer');
let today_Container = document.querySelector('.today_Container');
let Container = document.querySelector('.Container');
let tp_C = document.querySelector('.tp_C');
let tc_bg = document.querySelector('.tc_bg');

var isSidebarOpen = false;

sidebarlbtn.addEventListener("click", function () {
    // console.log("click");
    isSidebarOpen = !isSidebarOpen;
    if (isSidebarOpen == true) {
        sidebarlbtn.classList.add('sidebar_lockbutton_unlocked');
        setting.removeEventListener("mouseout", sideot);
        sidebar.removeEventListener("mouseout", sideot);
    } else {
        sidebarlbtn.classList.remove('sidebar_lockbutton_unlocked');
        setting.addEventListener("mouseout", sideot);
        sidebar.addEventListener("mouseout", sideot);
    }
})

function renewSidebar() {
    navbarC = document.querySelector('.navbarContainer');
    today_Container = document.querySelector('.today_Container');
    Container = document.querySelector('.Container');
    tp_C = document.querySelector('.tp_C');
    tc_bg = document.querySelector('.tc_bg');
}

function sidemo() {
    sidebar.classList.add('sidebarOpan');
    if (Container) {
        Container.classList.add('is_sidebarOpan');
    }
    if (navbarC) {
        navbarC.classList.add('is_sidebarOpan');
    }
    if (today_Container) {
        today_Container.classList.add('td_C_is_sideOpen');
    }
    if (tp_C) {
        tp_C.classList.add('tp_C_is_sideOpen');
    }
    if (tc_bg) {
        tc_bg.classList.add('tc_bg_is_sideOpen');
    }
}

function sideot() {
    sidebar.classList.remove('sidebarOpan');
    if (Container) {
        Container.classList.remove('is_sidebarOpan');
    }
    if (navbarC) {
        navbarC.classList.remove('is_sidebarOpan');
    }
    if (today_Container) {
        today_Container.classList.remove('td_C_is_sideOpen');
    }
    if (tp_C) {
        tp_C.classList.remove('tp_C_is_sideOpen');
    }
    if (tc_bg) {
        tc_bg.classList.remove('tc_bg_is_sideOpen');
    }
}
setting.addEventListener("mouseover", sidemo);
sidebar.addEventListener("mouseover", sidemo);
setting.addEventListener("mouseout", sideot);
sidebar.addEventListener("mouseout", sideot);
renewSidebar();
today();


// =====checkbox && editContainer==============================================================================================
document.body.addEventListener("click", function (e) {

    //next-seven-day
    if (e.target.closest('.item') && !e.target.closest('.item_checkbox') && !e.target.closest('.delete_btn')) {
        e.stopPropagation();
        const item = e.target.closest('.item');
        const title = item.querySelector('.item_title');
        const item_checkbox = item.querySelector('.item_checkbox');
        const titleText = item.querySelector('.item_title').innerText;
        showEditContainer(title, titleText);
    }
    if (e.target.closest('.item_checkbox')) {
        e.stopPropagation();
        const itemCheckbox = e.target.closest('.item_checkbox');
        const checkboxPoint = itemCheckbox.querySelector('.item_checkbox_pt');
        const itemElement = itemCheckbox.closest('.item');
        const deleteBtn = itemElement.querySelector('.delete_btn');

        if (checkboxPoint) {
            checkboxPoint.classList.toggle('item_checkbox_ischecked');
            deleteBtn.classList.toggle('delete_btn_show');

            if (checkboxPoint.classList.contains('item_checkbox_ischecked')) {
                itemElement.draggable = false;
                setTimeout(() => {
                    itemElement.parentNode.appendChild(itemElement);
                    nsdData();
                }, 300);
            } else {
                itemElement.draggable = true;
                setTimeout(() => {
                    itemElement.parentNode.insertBefore(itemElement, itemElement.parentNode.firstChild);
                    nsdData();
                }, 300);
            }
        }

        if (itemElement) {
            itemElement.classList.toggle('item_ischeck');
        }
    }
    if (e.target.closest('.delete_btn')) {
        e.stopPropagation();
        const deleteBtn = e.target.closest('.delete_btn');
        const itemElement = deleteBtn.closest('.item');

        if (itemElement) {
            itemElement.remove();
            nsdData();
        }
    }
    //nc_list_item_delete
    if (e.target.classList.contains('nc_list_item_delete')) {
        const nc_list_item = e.target.closest('.nc_list_item');
        if (nc_list_item) {
            nc_list_item.remove();
            nofinishData();
            if (localData[8].item.length === 0) {
                const nC_empty = document.createElement('div');
                nC_empty.className = 'nC_empty';
                nC_empty.innerHTML = `
                        <div class="nC_empty_item">
                            <svg width="200px" height="200px" x="0" y="0" viewBox="0 0 142.916 142.916"
                                style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                                <g>
                                    <path
                                        d="m32.901 114.799-12.015 16.507a7.308 7.308 0 0 0 5.903 11.61 7.301 7.301 0 0 0 5.917-3.006l12.11-16.638a56.47 56.47 0 0 0 26.644 6.651c31.342 0 56.84-25.499 56.84-56.842 0-15.979-6.636-30.427-17.283-40.764l15.074-20.709a7.31 7.31 0 0 0-1.607-10.21c-3.273-2.377-7.84-1.651-10.209 1.608L99.313 23.562a56.458 56.458 0 0 0-27.856-7.323c-31.343 0-56.842 25.499-56.842 56.841 0 16.477 7.05 31.329 18.286 41.719zm80.781-41.719c0 23.284-18.94 42.226-42.226 42.226-6.407 0-12.461-1.477-17.905-4.039l48.729-66.951c7.051 7.548 11.402 17.648 11.402 28.764zM71.457 30.856c6.901 0 13.403 1.698 19.159 4.646l-49.043 67.381C33.95 95.24 29.229 84.702 29.229 73.082c.003-23.284 18.944-42.226 42.228-42.226z"
                                        fill="currentColor" opacity="1" data-original="#000000" class=""></path>
                                </g>
                            </svg>
                        </div>
                        <div class="nC_empty_item">無任務</div>
                `
                nC_list.append(nC_empty);
            }
        }
    }
    //seting
    if (e.target.classList.contains('setting_bg')) {
        close_setting_f();
    }

    //today
    if (e.target.closest('.td_taskitem') && !e.target.closest('.td_item_checkbox_C') && !e.target.closest('.td_item_delete_btn')) {
        e.stopPropagation();
        const item = e.target.closest('.td_taskitem');
        const title = item.querySelector('.td_item_title');
        const titleText = title.innerText;
        showEditContainer(title, titleText);
    }

    if (e.target.closest('.td_item_delete_btn')) {
        e.stopPropagation();
        const delete_td_taskitem = e.target.closest('.td_item_delete_btn');
        const item = delete_td_taskitem.closest('.td_taskitem');
        // console.log(item);
        item.remove();
        tdData();
    }

    if (e.target.closest('.td_item_checkbox_C')) {
        const td_i_checkbox_C = e.target.closest('.td_item_checkbox_C');
        const td_icp = td_i_checkbox_C.querySelector('.td_item_checkbox_pt');
        const itemElement = td_i_checkbox_C.closest('.td_taskitem');

        itemElement.classList.toggle('td_taskitem_ischecked');
        td_icp.classList.toggle('td_item_checkbox_ischecked');
        if (td_icp.classList.contains('td_item_checkbox_ischecked')) {
            itemElement.draggable = false;
            setTimeout(() => {
                itemElement.parentNode.appendChild(itemElement);
                tdData();
            }, 300);
        }
        else {
            itemElement.draggable = true;
            setTimeout(() => {
                itemElement.parentNode.insertBefore(itemElement, itemElement.parentNode.firstChild);
                tdData();
            }, 300);
        }
    }
});

function showEditContainer(textC, text) {
    const edcontainer = document.createElement('div');
    edcontainer.classList.add('editContainer');
    edcontainer.innerHTML = `
    <div class="edititem">
        <button class="close_edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6"
                    d="m16.4 6.8-9.6 9.6M6.8 6.8l9.6 9.6"></path>
            </svg>
        </button>
        <div class="edititem_title">
            <div class="title_area" contenteditable="true">${text}</div>
        </div>
    </div>`;
    document.body.appendChild(edcontainer);
    document.body.classList.add('editContainer_Open');

    const title_area = document.querySelector('.title_area');
    const editC = document.querySelector('.editContainer');

    function copyText() {
        if (title_area.innerText.trim().length !== 0) {
            textC.innerText = title_area.innerText;
            if (textC.classList.contains('td_item_title')) {
                tdData();
            } else if (textC.classList.contains('item_title')) {
                nsdData();
            }
        }
    }

    function ENTER(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            copyText();
            title_area.blur();
        }
    }

    function ESC(e) {
        if (e.key === "Escape") {
            copyText();
            closeEditContainer();
        }
    }

    function clickoutside(e) {
        if (e.target.classList.contains('close_edit') || e.target.classList.contains('editContainer')) {
            copyText();
            closeEditContainer();
        }
    }

    function closeEditContainer() {
        edcontainer.remove();
        document.body.classList.remove('editContainer_Open');
        title_area.removeEventListener("keydown", ENTER);
        document.body.removeEventListener("keydown", ESC);
        edcontainer.removeEventListener("click", clickoutside);
    }

    title_area.addEventListener("keydown", ENTER);
    document.body.addEventListener("keydown", ESC);
    edcontainer.addEventListener("click", clickoutside);
}

function today() {
    const td_times = document.querySelectorAll('.td_time');

    if (td_times) {
        updateDateTime()
        setInterval(updateDateTime, 60000);
    }

    function updateDateTime() {
        const now = new Date();
        const options = { month: 'long', day: 'numeric', weekday: 'short' };
        const dateTimeString = now.toLocaleDateString('zh-TW', options);

        td_times.forEach(td_time => {
            td_time.textContent = dateTimeString;
        });
    }

    const td_add_input = document.querySelector('.td_add_input');
    const td_add_ladel = document.querySelector('.td_add_ladel');
    const td_add_submit = document.querySelector('.td_add_submit');

    if (td_add_input) {
        td_add_input.addEventListener("focus", function () {
            td_add_ladel.style.opacity = '0';
            td_add_submit.style.opacity = '1';
            td_add_submit.style.display = "block";
        });

        td_add_input.addEventListener("blur", function () {
            if (td_add_input.innerText.trim().length > 0) {
                td_add_submit.style.opacity = '0';
            } else {
                td_add_submit.style.display = "none";
                td_add_ladel.style.opacity = '1';
            }
        });

        td_add_input.addEventListener("input", function () {
            if (td_add_input.innerText.trim().length > 0) {
                td_add_submit.style.color = '#0083ff';
                td_add_submit.removeAttribute("disabled");
            } else {
                td_add_submit.style.color = '';
                td_add_submit.setAttribute("disabled", "true");
            }
        });

        td_add_input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                submit_add_taskitem();
            }
        });

        td_add_submit.addEventListener("click", function () {
            td_add_input.focus();
            submit_add_taskitem();
        });
    }

    // document.body.addEventListener("click", function (e) {
    //     if (e.target.closest('.td_item_delete_btn')) {
    //         e.stopPropagation();
    //         const delete_td_taskitem = document.querySelector('.td_item_delete_btn');
    //         const item = delete_td_taskitem.closest('.td_taskitem');
    //         item.remove();
    //     }

    //     if (e.target.closest('.td_item_checkbox_C')) {
    //         const td_i_checkbox_C = e.target.closest('.td_item_checkbox_C');
    //         const td_icp = td_i_checkbox_C.querySelector('.td_item_checkbox_pt');
    //         const itemElement = td_i_checkbox_C.closest('.td_taskitem');

    //         itemElement.classList.toggle('td_taskitem_ischecked');
    //         td_icp.classList.toggle('td_item_checkbox_ischecked');

    //         if (td_icp.classList.contains('td_item_checkbox_ischecked')) {
    //             itemElement.draggable = false;
    //             itemElement.parentNode.appendChild(itemElement);
    //         }
    //         else {
    //             itemElement.draggable = true;
    //         }
    //     }
    // })

    function submit_add_taskitem() {
        if (td_add_input.innerText.trim().length > 0) {
            append_td_taskitem(td_add_input.innerText);
            td_add_input.innerText = "";
            td_add_submit.style.color = '';
        }
    }

    const td_tasks = document.querySelector('.td_tasks');
    const mkdiv = document.createElement('div');
    if (td_tasks) {
        td_tasks_drag();
    }

    function td_tasks_drag() {
        let self;
        let father;
        let lastTarget;
        let scrollInterval;

        td_tasks.ondragstart = (e) => {
            father = e.target.parentNode;
            item = father.children;
            mkdiv.className = 'td_taskitem_Cover';
            setTimeout(() => {
                e.target.appendChild(mkdiv);
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.add("nhv");
                }
            }, 0);
            e.dataTransfer.effectAllowed = 'move';
            self = e.target;
            lastTarget = null;
        };

        td_tasks.ondragover = (e) => {
            e.preventDefault();
            handleAutoScroll(e.clientY);
        };

        td_tasks.ondragenter = (e) => {
            e.preventDefault();
            let target = e.target.closest('.td_taskitem');
            if (target && !target.classList.contains('td_taskitem_ischecked')) {
                if (!target || target === self || target === lastTarget) {
                    return;
                }

                lastTarget = target;
                const children = [...father.children];
                const itemIndex = children.indexOf(self);
                const targetIndex = children.indexOf(target);
                let oldTop = target.getBoundingClientRect().top;

                if (itemIndex < targetIndex) {
                    father.insertBefore(self, target.nextElementSibling);
                } else {
                    father.insertBefore(self, target);
                }

                let newTop = target.getBoundingClientRect().top;
                let offset = oldTop - newTop;
                target.style.transform = `translateY(${offset}px)`;
                raf(() => {
                    target.style.transition = `transform 0.5s`;
                    target.style.removeProperty('transform');
                    target.addEventListener('transitionend', function fn() {
                        target.style.removeProperty('transition');
                        target.removeEventListener('transitionend', fn);
                    });
                });
            }
        };

        td_tasks.ondragend = (e) => {
            const cover = document.querySelector('.td_taskitem_Cover');
            if (cover) {
                cover.remove();
            }
            setTimeout(() => {
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.remove("nhv");
                }
            }, 400);
            self.classList.remove("nhv");
            lastTarget = null;
            clearInterval(scrollInterval);
            tdData();
        };

        function raf(callback) {
            requestAnimationFrame(() => {
                requestAnimationFrame(callback);
            });
        }

        function handleAutoScroll(mouseY) {
            const rect = td_tasks.getBoundingClientRect();
            const scrollStep = 10;
            const threshold = 40;

            if (mouseY - rect.top < threshold) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        td_tasks.scrollTop -= scrollStep;
                    }, 16);
                }
            } else if (rect.bottom - mouseY < threshold) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        td_tasks.scrollTop += scrollStep;
                    }, 16);
                }
            } else {
                clearInterval(scrollInterval);
                scrollInterval = null;
            }
        }
    }
}

function next_seven() {
    const dates = document.querySelectorAll('.date');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const today = new Date().getDay();
    dates.forEach((dateElement, index) => {
        const dayIndex = (today + index) % 7;
        dateElement.textContent = weekdays[dayIndex];
    });
    // =====drag==============================================================================================
    const ctediv = document.createElement('div');
    const Container = document.querySelector('.Container');

    if (Container) {
        let self;
        let parent;
        Container_drag();
    }

    function Container_drag() {
        Container.ondragstart = (e) => {
            father = e.target.parentNode;//list
            parent = e.target.parentNode.parentNode;//container
            item = father.children;
            setTimeout(() => {
                ctediv.className = 'Cover';
                e.target.appendChild(ctediv);
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.add("nhv");
                }
            }, 0);
            e.dataTransfer.effectAllowed = 'move';
            self = e.target;
            // console.log(self);
        };

        Container.ondragover = (e) => {
            e.preventDefault();
        };

        Container.ondragenter = (e) => {
            // console.log('位置', e.target);
            // console.log(parent);
            e.preventDefault();
            if (!e.target.classList.contains('item_ischeck')) {
                if (e.target.className == "date") {
                    const list = e.target.closest('.container').querySelector('.list');
                    list.insertBefore(self, list.firstChild);
                }
                else if (!parent.contains(e.target)) {
                    if (e.target.className == "item") {
                        var list = e.target.parentNode;
                        const children = [...list.children];
                        const itemindex = children.indexOf(self);
                        const targetindex = children.indexOf(e.target);
                        let oldTop = e.target.getBoundingClientRect().top;
                        if (itemindex == -1) {
                            list.insertBefore(self, e.target);
                        } else {
                            if (itemindex < targetindex) {
                                list.insertBefore(self, e.target.nextElementSibling);
                            } else {
                                list.insertBefore(self, e.target);
                            }
                        }
                        let newTop = e.target.getBoundingClientRect().top;
                        let offset = oldTop - newTop;
                        e.target.style.transform = `translateY(${offset}px)`;

                        raf(() => {
                            e.target.style.transition = `transform 0.5s`;
                            e.target.style.removeProperty('transform');
                            e.target.addEventListener('transitionend', function fn() {
                                e.target.style.removeProperty('transition');
                                e.target.removeEventListener('transitionend', fn);
                            });
                        });
                    }
                    else if (e.target.className == "Citem") {
                        const list = e.target.querySelector('.list');
                        const item_ischeck = list.querySelector('.item_ischeck')
                        if (item_ischeck) {
                            list.insertBefore(self, item_ischeck);
                        } else {
                            list.appendChild(self);
                        }
                    }
                    else if (e.target.className == "intextbtn") {
                        const list = e.target.closest('.container').querySelector('.list');
                        const item_ischeck = list.querySelector('.item_ischeck')
                        if (item_ischeck) {
                            list.insertBefore(self, item_ischeck);
                        } else {
                            list.appendChild(self);
                        }
                    }
                }
                else if (father.contains(e.target)) {
                    e.preventDefault();
                    if (e.target === father || e.target === self) {
                        return;
                    }
                    const children = [...father.children];
                    const itemindex = children.indexOf(self);
                    const targetindex = children.indexOf(e.target);
                    let oldTop = e.target.getBoundingClientRect().top;

                    if (itemindex < targetindex) {
                        father.insertBefore(self, e.target.nextElementSibling);
                    } else if (targetindex == -1) {
                        // tagt.insertBefore(self, e.target);
                    }
                    else {
                        father.insertBefore(self, e.target);
                    }
                    let newTop = e.target.getBoundingClientRect().top;
                    let offset = oldTop - newTop;
                    e.target.style.transform = `translateY(${offset}px)`;
                    raf(() => {
                        e.target.style.transition = `transform 0.5s`;
                        e.target.style.removeProperty('transform');
                        e.target.addEventListener('transitionend', function fn() {
                            e.target.style.removeProperty('transition');
                            e.target.removeEventListener('transitionend', fn);
                        });
                    });
                }
            }
        };

        function raf(callback) {
            requestAnimationFrame(() => {
                requestAnimationFrame(callback);
            })
        };

        Container.ondragend = () => {
            const cover = document.querySelector('.Cover');
            cover.remove();
            setTimeout(() => {
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.remove("nhv");
                }
            }, 400);
            self.classList.remove("nhv");
            nsdData();
        };
    }

    // // ====input change===============================================================================================
    const intextbtn = document.querySelectorAll('.intextbtn');

    intextbtn.forEach((button, index) => {
        button.addEventListener("click", function () {
            itbtn_click(index);
        });
    });

    function itbtn_click(index) {
        const bttc = document.querySelectorAll('.bttC')[index];
        bttc.innerHTML =
            `<div class="bttc_input_C">
        <div contenteditable="true" class="bttc_input"></div>
        <button type="button" disabled class="bttc_input_submit">
            <svg width="32px" height="32px" viewBox="0 0 24 24"xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke="currentColor" stroke-width="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" />
            </svg>
        </button>
    </div>`;
        const bttc_input = bttc.querySelector('.bttc_input');
        const submitButton = bttc.querySelector('.bttc_input_submit');

        bttc_input.focus();

        bttc_input.addEventListener("input", function () {
            if (bttc_input.innerText.trim().length > 0) {
                submitButton.removeAttribute("disabled");
                submitButton.style.color = '#0083ff';
            } else {
                submitButton.setAttribute("disabled", "true");
                submitButton.style.color = '';
            }
        });

        function submitText() {
            if (bttc_input.innerText.trim().length > 0) {
                appendItem(bttc_input.innerText, index);
                bttc_input.innerText = "";
                submitButton.setAttribute("disabled", "true");
                submitButton.style.color = '';
            }
        }

        submitButton.addEventListener("click", function (e) {
            submitText();
        });

        bttc_input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                e.preventDefault();
                submitText();
            }
        });

        bttc_input.addEventListener("focus", function () {
            if (bttc_input.innerText.trim().length > 0) {
                submitButton.style.color = '#0083ff';
            }
        });


        bttc_input.addEventListener("blur", function () {
            if (bttc_input.innerText.trim().length === 0) {
                bttc.innerHTML = `
            <button type="button" class="intextbtn">
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12H20M12 4V20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>添加任務</span>
            </button>`;
                const newButton = bttc.querySelector('.intextbtn');
                newButton.addEventListener("click", function () {
                    itbtn_click(index);
                });
            }
            submitButton.style.color = 'transparent';
        });

    }

    //delete all
    // function deleteAll() {
    //     deletebtn = document.querySelectorAll('.delete_btn_show');
    //     for (var i = 0; i < deletebtn.length; i++) {
    //         deletebtn[i].click();
    //     }
    // }
}

function taskpool() {
    const tp_add_edit_CC = document.querySelector('.tp_add_edit_CC');
    const tp_C_addtasks = document.querySelector('.tp_C_addtasks');
    const tp_add_input = document.querySelector('.tp_add_input');
    const tp_add_submit = document.querySelector('.tp_add_submit');
    const tp_tasks = document.querySelector('.tp_tasks');
    const title_area = document.querySelector('.tp_C_right_title_area');
    const swcheck = document.querySelector('.swcheck');
    const add_to_week = document.querySelector('.add_to_week');
    const add_to_week_ul = document.querySelector('.add_to_week_ul');
    const add_to_week_li_item = document.querySelectorAll('.add_to_week_li_item');

    add_to_week.addEventListener('click', function () {
        add_to_week_ul.style.display = 'block';
    });

    const dates = document.querySelectorAll('.add_to_week_li_item');
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const today = new Date().getDay();
    dates.forEach((dateElement, index) => {
        const dayIndex = (today + index) % 7;
        dateElement.textContent = weekdays[dayIndex];
        if (index === 0) {
            dateElement.textContent += ' (今天)';
        } else if (index === 1) {
            dateElement.textContent += ' (明天)';
        }
    });

    add_to_week_li_item.forEach((item, index) => {
        item.addEventListener("click", () => {
            const pushweek = index + 1;
            const item = document.querySelector('.tp_taskitem_isSelected');
            const title = item.querySelector('.tp_item_title').innerText;
            const isChecked = item.classList.contains('tp_taskitem_ischecked');
            if (!isChecked) {
                localData[pushweek].item.unshift({
                    "name": title,
                    "isChecked": isChecked
                });
            } else {
                localData[pushweek].item.push({
                    "name": title,
                    "isChecked": isChecked
                });
            }

            const sel_item = document.querySelector('.tp_taskitem_isSelected');
            let nItem = sel_item.nextElementSibling;
            let pItem = sel_item.previousElementSibling;

            sel_item.remove();
            tpData();

            const tag_item = nItem || pItem;
            if (tag_item) {
                selectTaskItem(tag_item);
            } else {
                const tp_C_right = document.querySelector('.tp_C_right');
                tp_C_right.style.display = "none";
            }
        });
    });

    tp_C_addtasks.addEventListener("click", function () {
        tp_add_edit_CC.style.display = "block";
        tp_add_input.focus();
        tp_C_addtasks.style.display = "none";
    });

    tp_add_input.addEventListener("focus", function () {
        tp_add_submit.style.opacity = '1';
        tp_add_submit.style.display = "block";
    });

    tp_add_input.addEventListener("input", function () {
        if (tp_add_input.innerText.trim().length > 0) {
            tp_add_submit.style.color = '#0083ff';
            tp_add_submit.removeAttribute("disabled");
        } else {
            tp_add_submit.style.color = '';
            tp_add_submit.setAttribute("disabled", "true");
        }
    });

    tp_add_input.addEventListener("blur", function () {
        if (tp_add_input.innerText.trim().length > 0) {
            tp_add_submit.style.opacity = '0';
        } else {
            tp_add_edit_CC.style.display = "none";
            tp_C_addtasks.style.display = "block";
        }
    });

    tp_add_input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            submit_add_tp_taskitem();
        }
    });

    tp_add_submit.addEventListener("click", function () {
        tp_add_input.focus();
        submit_add_tp_taskitem();
    });

    function submit_add_tp_taskitem() {
        if (tp_add_input.innerText.trim().length > 0) {
            append_tp_taskitem(tp_add_input.innerText);
            tp_add_input.innerText = "";
            tp_add_submit.style.color = '';
        }
    }

    title_area.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            chagText();
            title_area.blur();
        }
    });

    title_area.addEventListener("blur", function () {
        chagText();
    });

    function chagText() {
        if (title_area.innerText.trim().length !== 0) {
            const item = document.querySelector('.tp_taskitem_isSelected');
            const title = item.querySelector('.tp_item_title');
            title.innerText = title_area.innerText;
        }
    }

    function selectTaskItem(tp_taskitem) {
        document.querySelectorAll('.tp_taskitem').forEach(i => {
            i.classList.remove('tp_taskitem_isSelected');
        });

        const tp_C_right = document.querySelector('.tp_C_right');
        if (tp_C_right.style.display !== "block") {
            tp_C_right.style.display = "block";
        }

        const title = tp_taskitem.querySelector('.tp_item_title');
        const title_area = document.querySelector('.tp_C_right_title_area');

        tp_taskitem.classList.add('tp_taskitem_isSelected');
        swcheck.checked = tp_taskitem.classList.contains('tp_taskitem_ischecked');
        title_area.classList.toggle('tp_C_right_title_area_finish', tp_taskitem.classList.contains('tp_taskitem_ischecked'));
        title_area.innerText = title.innerText;
    }

    swcheck.addEventListener("click", function () {
        const title_area = document.querySelector('.tp_C_right_title_area');
        const item = document.querySelector('.tp_taskitem_isSelected');
        const tp_icp = item ? item.querySelector('.tp_item_checkbox_pt') : null;

        if (swcheck.checked) {
            title_area.classList.add('tp_C_right_title_area_finish');
            if (item) {
                item.classList.add('tp_taskitem_ischecked');
                if (tp_icp) {
                    tp_icp.classList.add('tp_item_checkbox_ischecked');
                    item.draggable = false;
                    setTimeout(() => {
                        item.parentNode.appendChild(item);
                        tpData();
                    }, 300);
                }
            }
        } else {
            title_area.classList.remove('tp_C_right_title_area_finish');
            if (item) {
                item.classList.remove('tp_taskitem_ischecked');
                if (tp_icp) {
                    tp_icp.classList.remove('tp_item_checkbox_ischecked');
                    item.draggable = true;
                    setTimeout(() => {
                        item.parentNode.insertBefore(item, item.parentNode.firstChild);
                        tpData();
                    }, 300);
                }
            }
        }
    });

    const tc = document.querySelector('.taskpool_Container');
    const tp_C_right = document.querySelector('.tp_C_right');

    tc.addEventListener("click", function (e) {
        if (e.target.closest('.tp_item_delete_btn')) {
            e.stopPropagation();
            const item = e.target.closest('.tp_taskitem');
            const isSelected = item.classList.contains('tp_taskitem_isSelected');
            let nItem = item.nextElementSibling;
            let pItem = item.previousElementSibling;

            if (item) {
                item.remove();
                tpData();
            }

            if (isSelected) {
                const item = nItem || pItem;
                if (item) {
                    selectTaskItem(item);
                } else {
                    tp_C_right.style.display = "none";
                }
            }
        }

        if (e.target.closest('.tp_item_checkbox_C')) {
            const tp_i_checkbox_C = e.target.closest('.tp_item_checkbox_C');
            const tp_icp = tp_i_checkbox_C.querySelector('.tp_item_checkbox_pt');
            const itemElement = tp_i_checkbox_C.closest('.tp_taskitem');
            const title_area = document.querySelector('.tp_C_right_title_area');

            if (itemElement) {
                itemElement.classList.toggle('tp_taskitem_ischecked');
                tp_icp.classList.toggle('tp_item_checkbox_ischecked');

                if (itemElement.classList.contains('tp_taskitem_isSelected')) {
                    swcheck.checked = itemElement.classList.contains('tp_taskitem_ischecked');
                    title_area.classList.toggle('tp_C_right_title_area_finish', itemElement.classList.contains('tp_taskitem_ischecked'));
                }

                if (tp_icp.classList.contains('tp_item_checkbox_ischecked')) {
                    itemElement.draggable = false;
                    setTimeout(() => {
                        itemElement.parentNode.appendChild(itemElement);
                        tpData();
                    }, 300);
                } else {
                    itemElement.draggable = true;
                    setTimeout(() => {
                        itemElement.parentNode.insertBefore(itemElement, itemElement.parentNode.firstChild);
                        tpData();
                    }, 300);
                }
            }
        }

        if (e.target.closest('.tp_taskitem') && !e.target.closest('.tp_item_checkbox_C') && !e.target.closest('.tp_item_delete_btn')) {
            const tp_taskitem = e.target.closest('.tp_taskitem');
            if (tp_taskitem) {
                selectTaskItem(tp_taskitem);
            }
        }

        if (!add_to_week.contains(e.target)) {
            add_to_week_ul.style.display = 'none';
        }
    });

    function append_tp_taskitem(text) {
        const newtaskitem = document.createElement('div');
        newtaskitem.className = 'tp_taskitem';
        newtaskitem.draggable = true;
        newtaskitem.innerHTML = `
        <div class="tp_item_checkbox_C">
            <button type="button" role="checkbox" class="tp_item_checkbox">
                <div class="tp_item_checkbox_pt">
                    <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                         <g>
                            <g>
                                <polygon
                                    points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
                                </g>
                            </g>
                    </svg>
                </div>
            </button>
        </div>
        <div class="tp_item_title">${text}</div>
        <div class="tp_item_delete_C">
            <button class="tp_item_delete_btn">
                <svg width="16" height="16" viewBox="0 0 20 20">
                    <g fill="none" fill-rule="evenodd">
                        <path d="M2 2h16v16H2z"></path>
                        <path d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                        fill="currentColor"></path>
                    </g>
                </svg>
            </button>
        </div>
    `;
        tp_tasks.insertBefore(newtaskitem, tp_tasks.firstChild);
        tpData();
    }

    const mkdiv = document.createElement('div');
    if (tp_tasks) {
        tp_tasks_drag();
    }

    function tp_tasks_drag() {
        let self;
        let father;
        let lastTarget;
        let scrollInterval;

        tp_tasks.ondragstart = (e) => {
            father = e.target.parentNode;
            item = father.children;
            mkdiv.className = 'tp_taskitem_Cover';
            setTimeout(() => {
                e.target.appendChild(mkdiv);
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.add("nhv");
                }
            }, 0);
            e.dataTransfer.effectAllowed = 'move';
            self = e.target;
            lastTarget = null;
        };

        tp_tasks.ondragover = (e) => {
            e.preventDefault();
            handleAutoScroll(e.clientY);
        };

        tp_tasks.ondragenter = (e) => {
            e.preventDefault();
            let target = e.target.closest('.tp_taskitem');
            if (target && !target.classList.contains('tp_taskitem_ischecked')) {


                if (!target || target === self || target === lastTarget) {
                    return;
                }

                lastTarget = target;
                const children = [...father.children];
                const itemIndex = children.indexOf(self);
                const targetIndex = children.indexOf(target);
                let oldTop = target.getBoundingClientRect().top;

                if (itemIndex < targetIndex) {
                    father.insertBefore(self, target.nextElementSibling);
                } else {
                    father.insertBefore(self, target);
                }

                let newTop = target.getBoundingClientRect().top;
                let offset = oldTop - newTop;
                target.style.transform = `translateY(${offset}px)`;
                raf(() => {
                    target.style.transition = `transform 0.5s`;
                    target.style.removeProperty('transform');
                    target.addEventListener('transitionend', function fn() {
                        target.style.removeProperty('transition');
                        target.removeEventListener('transitionend', fn);
                    });
                });
            }
        };

        tp_tasks.ondragend = (e) => {
            const cover = document.querySelector('.tp_taskitem_Cover');
            if (cover) {
                cover.remove();
            }
            setTimeout(() => {
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.remove("nhv");
                }
            }, 400);
            self.classList.remove("nhv");
            lastTarget = null;
            clearInterval(scrollInterval);
            tpData();
        };

        function raf(callback) {
            requestAnimationFrame(() => {
                requestAnimationFrame(callback);
            });
        }

        function handleAutoScroll(mouseY) {
            const rect = tp_tasks.getBoundingClientRect();
            const scrollStep = 10;
            const threshold = 40;

            if (mouseY - rect.top < threshold) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        tp_tasks.scrollTop -= scrollStep;
                    }, 16);
                }
            } else if (rect.bottom - mouseY < threshold) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        tp_tasks.scrollTop += scrollStep;
                    }, 16);
                }
            } else {
                clearInterval(scrollInterval);
                scrollInterval = null;
            }
        }
    }
}

function tomatoclock() {
    //計時器
    const tc_right = document.querySelector('.tc_right');
    const tc_l_top = document.querySelector('.tc_l_top');
    const tc_l_bottom = document.querySelector('.tc_l_bottom');
    const time = document.querySelector('.tc_time');
    const start = document.getElementById('tc_start');
    const chooseitems = document.querySelectorAll('.tc_chooseitem');
    const endSound = document.getElementById('endSound');
    let start_color = "#BA4949D6";
    let pause_color = "#38848ad0";

    let timer;
    let isPaused = true;
    let min, sec;
    let IMin, ISec;

    chooseitems.forEach(function (chooseitem) {
        chooseitem.addEventListener("click", function () {
            chooseitems.forEach(item => item.classList.remove('tc_time_now'));
            this.classList.add('tc_time_now');

            if (timer) {
                clearInterval(timer);
                timer = null;
                start.innerText = 'start';
                isPaused = true;
                resetBG();
            }
            if (this == chooseitems[0]) {
                time.innerHTML = "25:00";
            } else if (this == chooseitems[1]) {
                time.innerHTML = "05:00";
            } else if (this == chooseitems[2]) {
                time.innerHTML = "15:00";
            }
            const Time = time.innerHTML.split(':');
            min = parseInt(Time[0]);
            sec = parseInt(Time[1]);
            IMin = min;
            ISec = sec;
        });
    });

    start.addEventListener("click", function () {
        if (isPaused) {
            changecolor(start_color);

            isPaused = false;
            start.innerText = 'pause';
            timer = setInterval(function () {
                if (sec >= 0) {
                    sec -= 1;
                }
                if (sec === -1) {
                    min -= 1;
                    sec = 59;
                }
                if (min === 0 && sec === 0) {
                    clearInterval(timer);
                    timer = null;
                    start.innerText = 'start';
                    isPaused = true;
                    endSound.play();
                    endSound.loop = true;
                    resetBG();
                    document.addEventListener('click', stopAudio, { once: true });
                }
                var Min = min < 10 ? "0" + min : min;
                var Sec = sec < 10 ? "0" + sec : sec;
                time.innerHTML = Min + ":" + Sec;
                // console.log(Min + " " + Sec);
            }, 1000);
        } else {
            clearInterval(timer);
            isPaused = true;
            start.innerText = 'start';
            changecolor(pause_color);
        }
    });

    const initialTime = time.innerHTML.split(':');
    min = parseInt(initialTime[0]);
    sec = parseInt(initialTime[1]);
    function stopAudio() {
        endSound.loop = false;
        endSound.pause();
        endSound.currentTime = 0;
        min = IMin;
        sec = ISec;
        var Min = min < 10 ? "0" + min : min;
        var Sec = sec < 10 ? "0" + sec : sec;
        time.innerHTML = Min + ":" + Sec;
    }

    function changecolor(color) {
        tc_right.style.backgroundColor = color;
        tc_l_top.style.backgroundColor = color;
        tc_l_bottom.style.backgroundColor = color;
    }

    function resetBG() {
        tc_right.style.backgroundColor = '';
        tc_l_top.style.backgroundColor = '';
        tc_l_bottom.style.backgroundColor = '';
    }
    //----------------------------
    const TC = document.querySelector('.tomatoclock_container');
    const add_tc_ladel_c = document.querySelector('.add_tc_ladel_c');
    const tc_add_input = document.querySelector('.tc_add_input');
    const add_tc_item_cc = document.querySelector('.add_tc_item_cc');
    const tc_add_submit = document.querySelector('.tc_add_submit');
    const tc_tasks = document.querySelector('.tc_tasks');
    const title_area = document.querySelector('.tc_C_l_title_area');

    add_tc_ladel_c.addEventListener("click", function () {
        add_tc_item_cc.style.display = "block";
        tc_add_input.focus();
        add_tc_ladel_c.style.display = "none";
    });

    tc_add_input.addEventListener("input", function () {
        if (tc_add_input.innerText.trim().length > 0) {
            tc_add_submit.style.color = '#0083ff';
            tc_add_submit.removeAttribute("disabled");
        } else {
            tc_add_submit.style.color = '';
            tc_add_submit.setAttribute("disabled", "true");
        }
    });

    tc_add_input.addEventListener("blur", function () {
        if (tc_add_input.innerText.trim().length > 0) {
            tc_add_submit.style.opacity = '0';
        } else {
            add_tc_item_cc.style.display = "none";
            add_tc_ladel_c.style.display = "block";
        }
    });

    tc_add_input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            submit_add_tc_taskitem();
        }
    });

    tc_add_submit.addEventListener("click", function () {
        tc_add_input.focus();
        submit_add_tctaskitem();
    });

    function submit_add_tc_taskitem() {
        if (tc_add_input.innerText.trim().length > 0) {
            append_tc_item(tc_add_input.innerText);
            tc_add_input.innerText = "";
            tc_add_submit.style.color = '';
        }
    }

    const mkdiv = document.createElement('div');
    if (tc_tasks) {
        tc_tasks_drag();
    }

    function tc_tasks_drag() {
        let self;
        let father;
        let lastTarget;
        let scrollInterval;

        tc_tasks.ondragstart = (e) => {
            father = e.target.parentNode;
            item = father.children;
            mkdiv.className = 'tc_item_Cover';
            setTimeout(() => {
                e.target.appendChild(mkdiv);
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.add("nhv");
                }
            }, 0);
            e.dataTransfer.effectAllowed = 'move';
            self = e.target;
            lastTarget = null;
        };

        tc_tasks.ondragover = (e) => {
            e.preventDefault();
            handleAutoScroll(e.clientY);
        };

        tc_tasks.ondragenter = (e) => {
            e.preventDefault();
            let target = e.target.closest('.tc_item');
            if (target && !target.classList.contains('tc_item_ischecked')) {
                if (!target || target === self || target === lastTarget) {
                    return;
                }

                lastTarget = target;
                const children = [...father.children];
                const itemIndex = children.indexOf(self);
                const targetIndex = children.indexOf(target);
                let oldTop = target.getBoundingClientRect().top;

                if (itemIndex < targetIndex) {
                    father.insertBefore(self, target.nextElementSibling);
                } else {
                    father.insertBefore(self, target);
                }

                let newTop = target.getBoundingClientRect().top;
                let offset = oldTop - newTop;
                target.style.transform = `translateY(${offset}px)`;
                raf(() => {
                    target.style.transition = `transform 0.5s`;
                    target.style.removeProperty('transform');
                    target.addEventListener('transitionend', function fn() {
                        target.style.removeProperty('transition');
                        target.removeEventListener('transitionend', fn);
                    });
                });
            }

        };

        tc_tasks.ondragend = (e) => {
            const cover = document.querySelector('.tc_item_Cover');
            if (cover) {
                cover.remove();
            }
            setTimeout(() => {
                for (var i = 0; i < item.length; i++) {
                    item[i].classList.remove("nhv");
                }
            }, 400);
            self.classList.remove("nhv");
            lastTarget = null;
            clearInterval(scrollInterval);
            tcData();
        };

        function raf(callback) {
            requestAnimationFrame(() => {
                requestAnimationFrame(callback);
            });
        }

        function handleAutoScroll(mouseY) {
            const rect = tc_tasks.getBoundingClientRect();
            const scrollStep = 10;
            const threshold = 40;

            if (mouseY - rect.top < threshold) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        tc_tasks.scrollTop -= scrollStep;
                    }, 16);
                }
            } else if (rect.bottom - mouseY < threshold) {
                if (!scrollInterval) {
                    scrollInterval = setInterval(() => {
                        tc_tasks.scrollTop += scrollStep;
                    }, 16);
                }
            } else {
                clearInterval(scrollInterval);
                scrollInterval = null;
            }
        }
    }

    TC.addEventListener("click", function (e) {
        if (e.target.closest('.tc_item') && !e.target.closest('.tc_item_checkbox_C') && !e.target.closest('.tc_item_delete_btn')) {
            const tc_item = e.target.closest('.tc_item');
            if (tc_item) {
                document.querySelectorAll('.tc_item').forEach(i => {
                    i.classList.remove('tc_item_isSelected');
                });

                // const tc_l_top = tc_item.querySelector('.tc_l_top');
                if (tc_l_top.style.display !== "block") {
                    tc_l_top.style.display = "block";
                    tc_l_top.classList.remove('tc_l_top_down');
                    tc_l_top.classList.add('tc_l_top_up');
                }
                const title = tc_item.querySelector('.tc_item_title');
                const title_area = document.querySelector('.tc_C_l_title_area');
                tc_item.classList.add('tc_item_isSelected');
                title_area.innerText = title.innerText;
                title_area.classList.toggle('tc_C_l_title_area_finish', tc_item.classList.contains('tc_item_ischecked'));
            }
        }

        if (e.target.closest('.tc_item_checkbox_C')) {
            const tp_i_checkbox_C = e.target.closest('.tc_item_checkbox_C');
            const tp_icp = tp_i_checkbox_C.querySelector('.tc_item_checkbox_pt');
            const itemElement = tp_i_checkbox_C.closest('.tc_item');
            const title_area = document.querySelector('.tc_C_l_title_area');

            if (itemElement) {
                itemElement.classList.toggle('tc_item_ischecked');
                tp_icp.classList.toggle('tc_item_checkbox_ischecked');

                if (itemElement.classList.contains('tc_item_isSelected')) {
                    title_area.classList.toggle('tc_C_l_title_area_finish', itemElement.classList.contains('tc_item_ischecked'));
                }

                if (tp_icp.classList.contains('tc_item_checkbox_ischecked')) {
                    itemElement.draggable = false;
                    setTimeout(() => {
                        itemElement.parentNode.appendChild(itemElement);
                        tcData();
                    }, 300);
                } else {
                    itemElement.draggable = true;
                    setTimeout(() => {
                        itemElement.parentNode.insertBefore(itemElement, itemElement.parentNode.firstChild);
                        tcData();
                    }, 300);
                }
            }
        }

        if (e.target.closest('.tc_item_delete_btn')) {
            e.stopPropagation();
            const item = e.target.closest('.tc_item');
            const isSelected = item.classList.contains('tc_item_isSelected');
            let nItem = item.nextElementSibling;
            let pItem = item.previousElementSibling;

            if (item) {
                item.remove();
                tcData();
            }

            if (isSelected) {
                const item = nItem || pItem;
                if (item) {
                    title = item.querySelector('.tc_item_title');
                    item.classList.add('tc_item_isSelected');
                    title_area.classList.toggle('tc_C_l_title_area_finish', item.classList.contains('tc_item_ischecked'));
                    title_area.innerText = title.innerText;
                } else {
                    title_area.innerText = "";
                    tc_l_top.classList.remove('tc_l_top_up');
                    tc_l_top.classList.add('tc_l_top_down');
                    setTimeout(() => {
                        tc_l_top.style.display = "none";
                    }, 500);
                }
            }
        }

    });

    title_area.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            chagText();
            title_area.blur();
        }
    });

    title_area.addEventListener("blur", function () {
        chagText();
    });

    function chagText() {
        if (title_area.innerText.trim().length !== 0) {
            const item = document.querySelector('.tc_item_isSelected');
            const title = item.querySelector('.tc_item_title');
            title.innerText = title_area.innerText;
            tcData();
        }
    }
}

// const data = [
//     { "date": "taskpool", "item": [] }, // 未歸類
//     { "date": "", "item": [] },
//     { "date": "", "item": [] },
//     { "date": "", "item": [] },
//     { "date": "", "item": [] },
//     { "date": "", "item": [] },
//     { "date": "", "item": [] },
//     { "date": "", "item": [] },
//     { "date": "nofinish", "item": [] } // 未完成
// ];

function tdData() {
    const items = document.querySelectorAll('.td_taskitem');
    localData[1].item = [];

    items.forEach(itemElement => {
        const title = itemElement.querySelector('.td_item_title').innerText;
        const isChecked = itemElement.classList.contains('td_taskitem_ischecked');
        localData[1].item.push({
            "name": title,
            "isChecked": isChecked
        });
    });
    // console.log('td', localData);
    postData(localData);
}

function nsdData() {
    // const today = new Date();
    const lists = document.querySelectorAll('.list');
    for (let i = 1; i < localData.length - 1; i++) {
        localData[i].item = [];
        // let currentDate = new Date(today);
        // currentDate.setDate(today.getDate() + i - 1);
        // const formattedDate = currentDate.toISOString().split('T')[0];
        // localData[i].date = formattedDate;
        const items = lists[i - 1].querySelectorAll('.item');
        items.forEach(itemElement => {
            const titleElement = itemElement.querySelector('.item_title');
            const title = titleElement.innerText;
            const isChecked = itemElement.classList.contains('item_ischeck');
            localData[i].item.push({
                "name": title,
                "isChecked": isChecked
            });
        });
    }

    // console.log('nsd', localData);
    postData(localData);
}

function tpData() {
    const items = document.querySelectorAll('.tp_taskitem');
    localData[0].item = [];

    items.forEach(itemElement => {
        const title = itemElement.querySelector('.tp_item_title').innerText;
        const isChecked = itemElement.classList.contains('tp_taskitem_ischecked');
        localData[0].item.push({
            "name": title,
            "isChecked": isChecked
        });
    });
    // console.log('tp', localData);
    postData(localData);
}

function tcData() {
    const items = document.querySelectorAll('.tc_item');
    localData[1].item = [];

    items.forEach(itemElement => {
        const title = itemElement.querySelector('.tc_item_title').innerText;
        const isChecked = itemElement.classList.contains('tc_item_ischecked');
        localData[1].item.push({
            "name": title,
            "isChecked": isChecked
        });
    });
    // console.log('tc', localData);
    postData(localData);
}

//上傳json
function postData(data) {
    fetch('./updatedata.php', {
        method: 'POST',
        body: JSON.stringify(data), 
        headers: { 'X-Requested-With': 'XMLHttpRequest' }
    }).then(response => response.json());
}

//nav_right
const nav_r_item = document.querySelector('.nav_r_item');
const nC_list = document.querySelector('.nC_list');

function add_nC_list_ul() {
    document.querySelectorAll('.nc_list_item').forEach(item => {
        item.addEventListener('contextmenu', function (e) {
            e.preventDefault();
            const item = e.target.closest('.nc_list_item');
            const title = item.querySelector('.nc_list_item_title').innerText;
            const nC_list_ul = document.querySelector('.nC_list_ul');
            if (nC_list_ul) {
                nC_list_ul.remove();
            }
            const ul = document.createElement('ul');
            ul.className = 'nC_list_ul';
            ul.innerHTML = `
                <li class="nC_list_li_item"></li>
                <li class="nC_list_li_item"></li>
                <li class="nC_list_li_item"></li>
                <li class="nC_list_li_item"></li>
                <li class="nC_list_li_item"></li>
                <li class="nC_list_li_item"></li>
                <li class="nC_list_li_item"></li>
            `;
            document.body.appendChild(ul);
            const dates = document.querySelectorAll('.nC_list_li_item');
            const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            const today = new Date().getDay();
            dates.forEach((dateElement, index) => {
                const dayIndex = (today + index) % 7;
                dateElement.textContent = weekdays[dayIndex];
                if (index === 0) {
                    dateElement.textContent += ' (今天)';
                } else if (index === 1) {
                    dateElement.textContent += ' (明天)';
                }

                dateElement.addEventListener('click', function () {
                    // console.log(index + 1);
                    // console.log(title);
                    localData[index + 1].item.unshift({
                        "name": title,
                        "isChecked": false
                    });
                    // console.log(localData);
                    add_nofinishitem(title, index + 1);
                    item.remove();
                    nofinishData();
                    ul.remove();
                });
            });

            const mouseX = e.clientX;
            const mouseY = e.clientY;

            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            const ulRect = ul.getBoundingClientRect();
            const ulWidth = ulRect.width;
            const ulHeight = ulRect.height;

            let ulX = mouseX;
            let ulY = mouseY;
            if (mouseX + ulWidth > viewportWidth) {
                ulX = mouseX - ulWidth;
            }
            if (mouseY + ulHeight > viewportHeight) {
                ulY = mouseY - ulHeight;
            }

            ul.style.position = 'fixed';
            ul.style.left = `${ulX}px`;
            ul.style.top = `${ulY}px`;

            document.addEventListener('click', function removeUl(e) {
                if (!ul.contains(e.target) && e.target !== item) {
                    ul.remove();
                    document.removeEventListener('click', removeUl);
                }
            });
        });
    });
}

nav_r_item.addEventListener('click', function () {
    let ncb = document.querySelector('.nofinish_Container_bg');
    const nC = document.querySelector('.nofinish_Container');
    const nri = document.querySelector('.nav_r_item');
    if (!ncb) {
        ncb = document.createElement('div');
        ncb.className = 'nofinish_Container_bg';
        document.body.appendChild(ncb);

        ncb.addEventListener('click', function () {
            nC.classList.remove('nofinish_Container_show');
            nri.classList.remove('nav_r_item_active');
            ncb.remove();
        });
    } else {
        ncb.remove();
    }

    nC_list.innerHTML = "";
    if (localData[8].item.length === 0) {
        const nC_empty = document.createElement('div');
        nC_empty.className = 'nC_empty';
        nC_empty.innerHTML = `
                <div class="nC_empty_item">
                    <svg width="200px" height="200px" x="0" y="0" viewBox="0 0 142.916 142.916"
                        style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                        <g>
                            <path
                                d="m32.901 114.799-12.015 16.507a7.308 7.308 0 0 0 5.903 11.61 7.301 7.301 0 0 0 5.917-3.006l12.11-16.638a56.47 56.47 0 0 0 26.644 6.651c31.342 0 56.84-25.499 56.84-56.842 0-15.979-6.636-30.427-17.283-40.764l15.074-20.709a7.31 7.31 0 0 0-1.607-10.21c-3.273-2.377-7.84-1.651-10.209 1.608L99.313 23.562a56.458 56.458 0 0 0-27.856-7.323c-31.343 0-56.842 25.499-56.842 56.841 0 16.477 7.05 31.329 18.286 41.719zm80.781-41.719c0 23.284-18.94 42.226-42.226 42.226-6.407 0-12.461-1.477-17.905-4.039l48.729-66.951c7.051 7.548 11.402 17.648 11.402 28.764zM71.457 30.856c6.901 0 13.403 1.698 19.159 4.646l-49.043 67.381C33.95 95.24 29.229 84.702 29.229 73.082c.003-23.284 18.944-42.226 42.228-42.226z"
                                fill="currentColor" opacity="1" data-original="#000000" class=""></path>
                        </g>
                    </svg>
                </div>
                <div class="nC_empty_item">無任務</div>
        `
        nC_list.append(nC_empty);
    } else {
        localData[8].item.forEach(item => {
            const nc_listitem = document.createElement('div');
            nc_listitem.className = 'nc_list_item';
            nc_listitem.innerHTML = `
            <div class="nc_list_item_title">${item.name}</div>
            <div class="nc_list_item_delete_C">
                <button class="nc_list_item_delete">
                    <svg width="18px" height="18px" x="0" y="0" viewBox="0 0 384 384" style="enable-background:new 0 0 512 512" xml:space="preserve" class="">
                        <g>
                            <path d="M64 341.333C64 364.907 83.093 384 106.667 384h170.667C300.907 384 320 364.907 320 341.333v-256H64v256zM266.667 21.333 245.333 0H138.667l-21.334 21.333H42.667V64h298.666V21.333z" fill="currentColor" opacity="1" data-original="#000000" class=""></path>
                        </g>
                    </svg>
                </button>
            </div>
        `;
            nC_list.append(nc_listitem);
        });
    }

    add_nC_list_ul();

    nri.classList.toggle('nav_r_item_active');
    nC.classList.toggle('nofinish_Container_show');
});

function nofinishData() {
    const items = document.querySelectorAll('.nc_list_item');
    localData[8].item = [];

    items.forEach(itemElement => {
        const title = itemElement.querySelector('.nc_list_item_title').innerText;
        localData[8].item.push({
            "name": title,
            "isChecked": false
        });
    });
    // console.log('nofinish', localData);
    postData(localData);
}

function add_nofinishitem(text, num) {
    if (document.querySelector('.today_Container') && num === 1) {
        append_td_taskitem(text);
    }
    if (document.querySelector('.Container')) {
        appendItem(text, num - 1);
    }
    if (document.querySelector('.tc_bg') && num === 1) {
        append_tc_item(text);
    }
}

//today item append
function append_td_taskitem(text) {
    const td_tasks = document.querySelector('.td_tasks');
    const newtaskitem = document.createElement('div');
    newtaskitem.className = 'td_taskitem';
    newtaskitem.draggable = true;
    newtaskitem.innerHTML = `
        <div class="td_item_checkbox_C">
            <button type="button" role="checkbox" class="td_item_checkbox">
                <div class="td_item_checkbox_pt">
                    <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                        <g>
                            <g>
                                <polygon
                                     points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
                                </g>
                            </g>
                    </svg>
                </div>
            </button>
        </div>
        <div class="td_item_title">${text}</div>
        <div class="td_item_delete_C">
            <button class="td_item_delete_btn">
                    <svg width="24px" height="24px" viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor"
                        d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" />
                    </svg>
            </button>
        </div>
    `;
    td_tasks.insertBefore(newtaskitem, td_tasks.firstChild);
    tdData();
}

//seven item append
function appendItem(text, num) {
    const Container = document.querySelector('.Container');
    const newItem = document.createElement('div');
    newItem.className = 'item';
    newItem.draggable = true;
    newItem.innerHTML = `
    <div class="item_checkbox_C">
        <button type="button" role="checkbox" class="item_checkbox">
            <div class="item_checkbox_pt">
                <svg fill="currentColor" width="10px" height="10px" viewBox="0 0 335.765 335.765" xml:space="preserve">
                    <g>
                         <g>
                            <polygon points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
                        </g>
                    </g>
                </svg>
            </div>
        </button>
    </div>
    <div class="item_title">${text}</div>
    <div class="item_delete_C">
    <button type="button" class="delete_btn">
        <svg fill="currentColor" width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22,5H17V2a1,1,0,0,0-1-1H8A1,1,0,0,0,7,2V5H2A1,1,0,0,0,2,7H3.117L5.008,22.124A1,1,0,0,0,6,23H18a1,1,0,0,0,.992-.876L20.883,7H22a1,1,0,0,0,0-2ZM9,3h6V5H9Zm8.117,18H6.883L5.133,7H18.867Z" />
        </svg>
    </button>
    </div>
`;
    const list = document.querySelectorAll('.list');
    list[num].insertBefore(newItem, list[num].firstChild);
    nsdData();
}

//tomato item append
function append_tc_item(text) {
    const tc_tasks = document.querySelector('.tc_tasks');
    const newtaskitem = document.createElement('div');
    newtaskitem.className = 'tc_item';
    newtaskitem.draggable = true;
    newtaskitem.innerHTML = `
            <div class="tc_item_checkbox_C">
                            <button type="button" role="checkbox" class="tc_item_checkbox">
                                <div class="tc_item_checkbox_pt">
                                    <svg fill="currentColor" width="10px" height="10px"
                                        viewBox="0 0 335.765 335.765" xml:space="preserve">
                                        <g>
                                            <g>
                                                <polygon
                                                    points="311.757,41.803 107.573,245.96 23.986,162.364 0,186.393 107.573,293.962 335.765,65.795" />
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div class="tc_item_title">${text}</div>
                        <div class="tc_item_delete_C">
                            <button class="tc_item_delete_btn">
                                <svg width="16" height="16" viewBox="0 0 20 20">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M2 2h16v16H2z"></path>
                                        <path
                                            d="M11.062 10l3.75-3.85c.287-.295.24-.735-.104-.984-.347-.251-.856-.212-1.143.082L10 8.91 6.435 5.25c-.287-.295-.796-.334-1.143-.083-.344.249-.39.69-.104.984L8.938 10l-3.75 3.85c-.287.295-.24.735.104.984.347.251.856.212 1.143-.082L10 11.09l3.565 3.66c.287.295.796.334 1.143.083.344-.249.39-.69.104-.984L11.062 10zM10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                                            fill="currentColor"></path>
                                    </g>
                                </svg>
                            </button>
                        </div>
        `;
    tc_tasks.insertBefore(newtaskitem, tc_tasks.firstChild);
    tcData();
}

setting.addEventListener("click", function () {
    const setting_dialong = document.createElement('div');
    setting_dialong.className = "setting_bg";
    setting_dialong.innerHTML = setting_t;
    document.body.append(setting_dialong);
    setting_inside();
    document.body.classList.add('setting_Open');
});

function setting_inside() {
    const close_setting = document.getElementById('close_setting_C');

    close_setting.addEventListener("click", close_setting_f);

    const buttons = document.querySelectorAll('.setting_b_left_btn');
    const items = document.querySelectorAll('.setting_b_right_item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            buttons.forEach(btn => {
                btn.classList.remove('ischeck');
            });

            items.forEach(item => {
                item.classList.remove('active');
            });

            button.classList.add('ischeck');
            const targetItem = document.getElementById(targetId);
            if (targetItem) {
                targetItem.classList.add('active');
            }
        });
    });

    const edit_username = document.getElementById('edit_username_btn');
    const edit_email = document.getElementById('edit_email_btn');
    const edit_password = document.getElementById('edit_password_btn');

    edit_username.addEventListener("click", function (e) {
        const text = e.target.closest('.edit_C').querySelector('.sbri_username').innerText;
        const dialog = document.createElement('div')
        dialog.className = "setting_edit_bg";
        dialog.innerHTML = `
                <div class="setting_edit_Container">
                    <div class="setting_edit_C_title">修改使用者名稱</div>
                    <div class="edit_input_C">
                        <input type="text" name="username" id="edit_username_input" value="${text}">
                    </div>
                    <div class="setting_edit_C_btnC">
                        <button class="edit_cancel setting_edit_C_btn">取消</button>
                        <button class="setting_edit_C_btn" id="submit_username">確認修改</button>
                    </div>
                </div>
            `;
        document.body.append(dialog);

        dialog.querySelector('.edit_cancel').addEventListener('click', function () {
            dialog.remove();
        });

        dialog.querySelector('#submit_username').addEventListener('click', function () {
            postUsername();
        });

    })

    edit_email.addEventListener("click", function (e) {
        const text = e.target.closest('.edit_C').querySelector('.sbri_email').innerText;
        const dialog = document.createElement('div')
        dialog.className = "setting_edit_bg";
        dialog.innerHTML = `
                <div class="setting_edit_Container">
                    <div class="setting_edit_C_title">修改電子郵件</div>
                    <div class="edit_input_C">
                        <input type="email" name="email" id="edit_email_input" value="${text}">
                    </div>
                    <div class="setting_edit_C_btnC">
                        <button class="edit_cancel setting_edit_C_btn">取消</button>
                        <button class="setting_edit_C_btn" id="submit_email">確認修改</button>
                    </div>
                </div>
            `;
        document.body.append(dialog);

        dialog.querySelector('.edit_cancel').addEventListener('click', function () {
            dialog.remove();
        });

        dialog.querySelector('#submit_email').addEventListener('click', function () {
            postEmail();
        });
    })

    edit_password.addEventListener("click", function () {
        const dialog = document.createElement('div')
        dialog.className = "setting_edit_bg";
        dialog.innerHTML = `
                <div class="setting_edit_Container">
                    <div class="setting_edit_C_title">修改密碼</div>
                    <div class="edit_input_C">
                        <input type="password" name="old_password" id="edit_old_password_input" placeholder="請輸入舊密碼">
                        <input type="password" name="new_password" id="edit_new_password_input" placeholder="請輸入新密碼">
                    </div>
                    <div class="setting_edit_C_btnC">
                        <button class="edit_cancel setting_edit_C_btn">取消</button>
                        <button class="setting_edit_C_btn" id="submit_password">確認修改</button>
                    </div>
                </div>
            `;
        document.body.append(dialog);

        dialog.querySelector('.edit_cancel').addEventListener('click', function () {
            dialog.remove();
        });

        dialog.querySelector('#submit_password').addEventListener('click', function () {
            postPassword();
        });
    })

    const sign_out = document.getElementById('sign_out');
    sign_out.addEventListener("click", function () {
        fetch('./logout.php', {
            method: 'POST',
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    window.location.href = 'login.php';
                }
            })
    })

    const settingBgItems = document.querySelectorAll('.setting_bg_item');
    const bgImage = document.getElementById('bg_img');

    settingBgItems.forEach(item => {
        item.addEventListener('click', function () {
            settingBgItems.forEach(i => i.classList.remove('setting_bg_item_checked'));
            item.classList.add('setting_bg_item_checked');

            const imgSrc = item.querySelector('img').getAttribute('src');
            bgImage.setAttribute('src', imgSrc);

            const index = item.getAttribute('data-index');
            postBg(index);
        });
    });
}

function close_setting_f() {
    const SC = document.querySelector('.setting_bg');
    SC.remove();
    document.body.classList.remove('setting_Open');
}

function postUsername() {
    const username = document.getElementById('edit_username_input').value;
    fetch('./edit_username.php', {
        method: 'POST',
        body: JSON.stringify({ username: username })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                edit_hint("修改成功");
                const sbri_username = document.querySelector('.sbri_username');
                const sidebar_username = document.querySelector('.username');
                const td_username = document.getElementById('td_username');
                sbri_username.innerText = username;
                sidebar_username.innerText = username;
                if (td_username) {
                    td_username.innerText = username;
                    getSetting();
                }

            } else {
                edit_hint("修改失敗");
            }
            document.querySelector('.setting_edit_bg').remove();
        })
        .catch(error => console.error('Error:', error));
}

function postEmail() {
    const email = document.getElementById('edit_email_input').value;
    fetch('./edit_email.php', {
        method: 'POST',
        body: JSON.stringify({ email: email })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                edit_hint("修改成功");
                const sbri_email = document.querySelector('.sbri_email');
                sbri_email.innerText = email;
                getSetting();
            } else {
                edit_hint("用戶已註冊");
            }
            document.querySelector('.setting_edit_bg').remove();
        })
        .catch(error => console.error('Error:', error));
}

function postPassword() {
    const old_password = document.getElementById('edit_old_password_input').value;
    const new_password = document.getElementById('edit_new_password_input').value;
    fetch('./edit_password.php', {
        method: 'POST',
        body: JSON.stringify({ old: old_password, new: new_password })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                edit_hint("修改成功");
            } else {
                edit_hint("修改失敗");
            }
            document.querySelector('.setting_edit_bg').remove();
        })
        .catch(error => console.error('Error:', error));
}

function postBg(index) {
    fetch('./edit_bg.php', {
        method: 'POST',
        body: JSON.stringify({ bg: index })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) { }
        })
        .catch(error => console.error('Error:', error));
}

function edit_hint(text) {
    const success_dialong = document.createElement('div');
    success_dialong.className = "edit_hint_bg";
    success_dialong.innerHTML = `<div class="edit_hint">${text}</div>`;
    document.body.append(success_dialong);
    setTimeout(() => {
        success_dialong.remove();
    }, 3000);
}