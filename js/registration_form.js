function reset() {
    document.getElementById("form").reset();
    document.getElementById("income").hidden = true;
}

function tfwchanged(){
        document.getElementById("income").hidden = !(document.getElementById("tfw").checked);
}