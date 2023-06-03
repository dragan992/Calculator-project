/*
1.Hocemo kad kliknemo da na neki dugmic sa brojevima da se ispise gore na ekranu taj broj
2.Onda cemo da implementiramo na C da stagod da si uneo, svede se na 0
3.Bekspejs da se brise poslednji unet broj
4.Kad kliknemo matematicke operacije, da nam napise posle prvog broja znak te operacije 
4a.Ako user pritisne neku matematicku operaciju, a da nije prethodno uneo broj, da se pokaze greska invalid format
4b.Ako kliknemo jednako posle unete matematicke operacije neke, da se ispise greska, invalid format used
4c. Ako je samo 0 isto da ispise error
4d. Ako ne postoje 2 broja ispisi gresku
5.Kada user klikne prvi broj, pa matematicku operaciju i drugi broj i kada klikne jednako, da mu se ispise tacan rezultat
5a.Ako user deli prvi broj sa nulom, da mu se ispise greska can't divide by zero 
*/

// 1. da ne mozes da upisujes nulu ako je vec nula

// 2. da kada ukucas neki broj, da ti se skine nula i da krene normalno da pises broj

// 3. Na C ponisti broj, i da nakon toga bude opet 0 (hint: trebas da implementiras pomocu druge funkcije)

const ekran = document.getElementById("ekran");
const error = document.getElementById('error-message');
let sign = '';
function dodajBroj(broj) {
    let prebaciBrojUString = broj.toString();

    if (ekran.innerText === "0" && prebaciBrojUString !== "0") {
        ekran.innerText = broj;
        showHideError(false, '');
    }
    else if (ekran.innerText !== "0") {
        ekran.innerText += broj;
        showHideError(false, '');
    }
    else return;
}


const brisanje = document.getElementById("C");

function ocistiEkran() {
    ekran.innerText = "0";
    showHideError(false, '');
}

// function brisiPoslednje() {
//     let brisac = ekran.innerText;
//     let brisko = brisac.slice(0,-1);
//     console.log(brisko);
//     if (brisko === "") {
//         ekran.innerText = "0";
//     }
//     else ekran.innerText = brisko;
// } 

function brisiPoslednje() {
    ekran.innerText = ekran.innerText.length === 1 ? "0" : ekran.innerText.slice(0, -1);
    showHideError(false, '');
}

function znakoviInterpunkcije(znak) {
    if(areThereTwoNumbers(ekran.innerText)) {
        showHideError(true, 'You shall not pass');
        return;
    }
    let proba = lastCharacterInString(ekran.innerText);
    if (ekran.innerText === "0") {
        showHideError(true, 'invalid format')
    }
    else if (proba === znak || isSign(proba)) {
        showHideError(true, 'invalid format')
    } else {
       
        ekran.innerText += znak;
        showHideError(false, '');
    }
}

function isSign(sign) {
    switch(sign) {
        case '*':
        case '+':
        case '-':
        case '/':
           return true;
        default: 
            return false;
    }
}

function showHideError(isShow, erorMsg) {
    const display = isShow ? 'display: flex' : 'display: none'; 
    error.setAttribute('style', display);
    error.innerText = erorMsg;
}

function lastCharacterInString(str) {
    return str.slice(-1);
}

function jednakost() {
    
    const lastChar = lastCharacterInString(ekran.innerText);
    if(isSign(lastChar)) {
        showHideError(true, 'invalid format');
    } else if (ekran.innerText.length === 1 && lastChar === '0') {
        showHideError(true, 'You need to type some number first');
    } else if(!areThereTwoNumbers(ekran.innerText)) {
        showHideError(true, 'One number is missing')
    } else {
        calculate(ekran.innerText);
    }

    
}

function areThereTwoNumbers(str) {
    let arr = divideTwoNumbers(str);
    return arr.length > 1;
}

function calculate(str) {
    const arr = divideTwoNumbers(str);
    let total = 0;
    if(sign === '*') {
        total = +arr[0] * +arr[1];
    } else if(sign === '/') {
        total = +arr[0] / +arr[1];
    }
    else if(sign === '-') {
        total = +arr[0] - +arr[1];
    }
     else if(sign === '+') {
        total = +arr[0] + +arr[1];
    }
    ekran.innerText = total;
}

function divideTwoNumbers(str) {
    let indexOfSign = 0;
    const arr = [];
    for(let i = 1; i < str.length ; i++) {
        if(isSign(str[i])) {
            indexOfSign = i;
            sign = str[i];
        } 
    }
    
    let firstNumber = str.substring(0, indexOfSign);
    console.log(firstNumber);
    let secondNumber = str.substring(indexOfSign + 1, str.length);
    if(firstNumber && secondNumber) {
        arr.push(firstNumber);
        arr.push(secondNumber);
    }

    return arr;
}


// FINAL EXAM 


// AKO POSTOJE 2 BROJA, NE MOZES VISE DA KORISTIS MATEMATICKE OPERACIJE,
//  I UKOLIKO USER POSLE DRUGOG BROJA PROBA DA STAVI NEKU OD METAMATICKIH OPERACIJA ISPISI MU GRESKU 'BATO DES POSO'