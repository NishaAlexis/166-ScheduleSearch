function toggle() {
    let rows = document.getElementsByClassName("hidden_row")
    for (var i=0; i < rows.length; i++){
        if( rows[i].style.display=='none' ){
            rows[i].style.display = '';
            trigger.innerHTML = "Hide";
        }else{
            rows[i].style.display = 'none';
            trigger.innerHTML = "Show All";
        }
    }
}

