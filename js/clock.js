let myname = prompt("Lütfen İsminizi Giriniz: ");
isim = document.querySelector("#myName");

isim.innerHTML = `${myname}`;




let month = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
let week = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];

function datetime(){
    let date = new Date();
    let yil = date.getFullYear();
    let ay = date.getMonth();
    let aygun = date.getDate();
    let haftagun = date.getDay();
    let saat = date.getHours();
    if(saat < 10){
        saat = "0" + saat
    }
    let dakika = date.getMinutes();
    if(dakika < 10){
        dakika = "0" + dakika
    }
    let saniye = date.getSeconds();
    if(saniye < 10){
        saniye = "0" + saniye
    }
    let zaman = document.querySelector("#myClock");
    zaman.innerHTML = aygun + " " + month[ay] + " " + yil + " " + week[haftagun] + " " + saat + ":" + dakika + ":" + saniye;
}


datetime();

setInterval(datetime, 1000);


