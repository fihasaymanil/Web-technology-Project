function updateTime() {

    let now = new Date();

    let dateTime = now.toLocaleString();

    document.getElementById("time").innerHTML = dateTime;

}


setInterval(updateTime, 1000);

updateTime();


function showWelcome() {

    alert("Welcome to Khan Academy! Start your learning journey today.");

}


function changeTheme() {

    document.body.style.background = "#54C0A6";

    document.body.style.color = "white";

}