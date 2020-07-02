function copyUrl() {
    const copyUrl = document.getElementById('input_url');
    copyUrl.select();
    copyUrl.setSelectionRange(0, 99999);
    document.execCommand("copy");

    document.getElementById('p_message').innerHTML = '주소가 복사되었습니다!';
    document.getElementById('p_message').style.color = 'yellow';
}

let share_bt_opened = false,
    about_bt_opened = false;

function viewShare() {
    divCounterTarget = document.getElementById('div_about');
    divTarget = document.getElementById('div_share');
    
    divCounterTarget.style.display = 'none';
    about_bt_opened = false;
    
    if (!share_bt_opened) {
        divTarget.style.display = 'block';
        share_bt_opened = true;
    } else {
        divTarget.style.display = 'none';
        share_bt_opened = false;
    }
}

function viewAbout() {
    divCounterTarget = document.getElementById('div_share');
    divTarget = document.getElementById('div_about');
    
    divCounterTarget.style.display = 'none';
    share_bt_opened = false;

    if (!about_bt_opened) {
        divTarget.style.display = 'block';
        about_bt_opened = true;
    } else {
        divTarget.style.display = 'none';
        about_bt_opened = false;
    }
}
