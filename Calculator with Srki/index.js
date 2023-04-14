console.log("Ide gas");

/*
1.Hocemo kad kliknemo da na neki dugmic sa brojevima da se ispise gore na ekranu taj broj
2.Onda cemo da implementiramo na C da stagod da si uneo, svede se na 0
3.Bekspejs da se brise poslednji unet broj
4.Kad kliknemo matematicke operacije, da nam napise posle prvog broja znak te operacije 
4a.Ako user pritisne neku matematicku operaciju, a da nije prethodno uneo broj, da se pokaze greska invalid format
4b.Ako kliknemo jednako posle unete matematicke operacije neke, da se ispise greska, invalid format used
5.Kada user klikne prvi broj, pa matematicku operaciju i drugi broj i kada klikne jednako, da mu se ispise tacan rezultat
5a.Ako user deli prvi broj sa nulom, da mu se ispise greska can't divide by zero 
*/
const ekran = document.getElementById("ekran");

function dodajBroj(broj) {
    let prebaciBrojUString = broj.toString();

    if (ekran.innerText === "0" && prebaciBrojUString !== "0") {
        ekran.innerText = broj;
    }
    if (ekran.innerText !== "0") {
        ekran.innerText += broj;
    }
}


const brisanje = document.getElementById("C");

function ocistiEkran() {
    ekran.innerText = "0"
}

// 1. da ne mozes da upisujes nulu ako je vec nula

// 2. da kada ukucas neki broj, da ti se skine nula i da krene normalno da pises broj

// 3. Na C ponisti broj, i da nakon toga bude opet 0 (hint: trebas da implementiras pomocu druge funkcije)