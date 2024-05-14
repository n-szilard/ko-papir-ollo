let koKep = document.getElementById("ko");
let papirKep = document.getElementById("papir");
let olloKep = document.getElementById("ollo");
let jatekosPont = 0;
let gepPont = 0;

function ko() {
    koKep.style.border = "3px solid red";
    papirKep.style.border = "none";
    olloKep.style.border = "none";
    jatek("ko");
}

function papir() {
    koKep.style.border = "none";
    papirKep.style.border = "3px solid red";
    olloKep.style.border = "none";
    jatek("papir");

}

function ollo() {
    koKep.style.border = "none";
    papirKep.style.border = "none";
    olloKep.style.border = "3px solid red";
    jatek("ollo");
}

function jatek(valasztott) {
    let eredmenyElem = document.getElementById("eredmeny");

    let elemek = ["ko", "papir", "ollo"];
    let gepValasztott = elemek[getRandomInt(3)];

    let gepValasztottKep = document.getElementById("gepValasztas");
    gepValasztottKep.src = "./kepek/" + gepValasztott + ".png"


    eredmeny(valasztott, gepValasztott, eredmenyElem);

    document.getElementById("jatekosPont").innerHTML = jatekosPont;
    document.getElementById("gepPont").innerHTML = gepPont;
}

function eredmeny(valasztott, gepValasztott, eredmenyElem) {
    if (valasztott == gepValasztott) {
        eredmenyElem.innerHTML = "Eredmény: döntetlen";
    } else if (valasztott == "ko" && gepValasztott == "papir") {
        eredmenyElem.innerHTML = "Eredmény: Vesztettél";
        gepPont++;
    } else if (valasztott == "ko" && gepValasztott == "ollo") {
        eredmenyElem.innerHTML = "Eredmény: Nyertél";
        jatekosPont++;
    } else if (valasztott == "papir" && gepValasztott == "ko") {
        eredmenyElem.innerHTML = "Eredmény: Nyertél";
        jatekosPont++;
    } else if (valasztott == "papir" && gepValasztott == "ollo") {
        eredmenyElem.innerHTML = "Eredmény: Vesztettel";
        gepPont++;
    } else if (valasztott == "ollo" && gepValasztott == "ko") {
        eredmenyElem.innerHTML = "Eredmény: Vesztettel";
        gepPont++;
    } else if (valasztott == "ollo" && gepValasztott == "papir") {
        eredmenyElem.innerHTML = "Eredmény: Nyertél";
        jatekosPont++;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
