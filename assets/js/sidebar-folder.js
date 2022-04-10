function spread(count){
    let submenu = document.getElementById('submenu-' + count);
    if(submenu){
        if(submenu.classList.contains('hide')) submenu.classList.remove('hide');    //평소에는 숨겨져있다가, 마우스 갔다댈시 나타남
        else submenu.classList.add('hide');
    }

    let spreadIcon = document.getElementById('spread-icon-' + count);
    if(spreadIcon){
        if(spreadIcon.innerHTML == 'arrow_right') {
            spreadIcon.innerHTML = 'arrow_drop_down';
            spreadIcon.style.color = 'grey';
        }else{
            spreadIcon.innerHTML = 'arrow_right';
            spreadIcon.style.color = 'white';
        } 
    }
}