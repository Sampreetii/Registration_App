function onclickbtn() {
    document.getElementById("myModal").style.display = "block";
}


function onclickclose(){
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("myModal");
    if (event.target == modal) {
        console.log(event);
        modal.style.display = "none";
      }
}
