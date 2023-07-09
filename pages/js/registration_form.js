function reset() {
    document.getElementById("form").reset();
}

function tfwchanged(){
        document.getElementById("income").hidden = !(document.getElementById("tfw").checked);
}