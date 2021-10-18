let username = prompt("İsim giriniz");
let greeting = document.querySelector("#myName")
greeting.innerHTML = `${username}`

function showTime()
{
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay();
    
    if (session == 1) {
        session = "Pazartesi";
    } else if (session == 2) {
        session = "Salı";
    } else if (session == 3) {
        session = "Çarşamba";
    } else if (session == 4) {
        session = "Perşembe";
    } else if (session == 5) {
        session = "Cuma";
    } else if (session == 6) {
        session = "Cumartesi";
    } else if (session == 7) {
        session = "Pazar";
    }
    
    h = h > 10 ? h : "0" + h;
    m = m > 10 ? m : "0" + m;
    s = s > 10 ? s : "0" + s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime,1000);
    
}

showTime();