let blocked = false;
function red(){
    let newWin = window.open('login_check.html', 'pop', 'width=1000, height=1000');
    if(newWin == null){
        alert('팝업이 차단되어 있습니다. 팝업 차단을 해제해 주세요');
    }
    newWin.moveBy(100, 100);
}