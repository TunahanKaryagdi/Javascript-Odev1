let userName = prompt("Adınızı Giriniz");

document.getElementById("myName").innerHTML = userName;

function showTime()
{
    const date = new Date();
    document.getElementById("myClock").innerHTML = `${date}`
}


setInterval(function(){showTime()},1000);


