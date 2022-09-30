var x = Number(prompt("kucaj 1.broj"));
var y = Number(prompt("kucaj 2.broj"));
var interpunkcija = prompt ("kucaj interpunkciju");
var rezultat;

if (interpunkcija == "+"){
    rezultat = Number(x) + Number(y);
}
else if (interpunkcija == "/"){
    rezultat = Number(x) / Number(y) 
}
else if (interpunkcija == "*"){
    rezultat = Number(x) * Number(y) 
}
else if (interpunkcija == "-"){
    rezultat = Number(x) - Number(y) 
}
else {
    rezultat = "Greska";
}
var pokaziRezultat = prompt("Evo ga zeljeni rezultat",rezultat);
console.log(rezultat);
console.log(document);