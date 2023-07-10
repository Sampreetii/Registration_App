function reset() {
    document.getElementById("form").reset();
    document.getElementById("income").hidden = true;
}

function tfwchanged(){
        document.getElementById("income").hidden = !(document.getElementById("tfw").checked);
}

function onformsubmit() {
    if(!document.getElementsByName("user_email")[0].value || !document.getElementsByName("user_address")[0]) {
        alert('Required fields missing!');
    } else {
        alert('Account Created Successfully! Redirecting to main page...');
        window.location.href = "https://msit.edu.in/"
    }
}