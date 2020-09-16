function kliknulJsem() {
    document.getElementById("reakce").innerHTML += "Hurá! ";
    document.getElementById("reakce").style.color = "red";
}

function uzStaci() {
    document.getElementById("reakce").innerHTML = "";
}

function uhni() {
    x = Math.random() * 100;
    y = Math.random() * 100;

    document.getElementById("cestovatel").style.marginLeft = x + "px";
    document.getElementById("cestovatel").style.marginTop = y + "px";
}

function demo() {
    // ZAKLADY SYNTAXE JAVASCRIPTU

    // komentare funguji jako v C#
    
    /*
    vcetne
    viceradkovych
    */

    // zakladni(debuggovaci) vystup je do konzoly
    console.log("Hello World");

    // operatory jsou stejne jako v C#
    // + - * / % += -= == <= >= != atd.

    // DEKLARACE PROMENNYCH

    // 1. nedeklarovat
    console.log(x); // toto je mozne
    x = 8;
    console.log(x);

    // 2. deklarovat pomoci var
    var x;
    // pokud var vynecham, tak ho JavaScript doplni za me
    // funguje tu tzv. hoisting
    // promenna je platna bud v ramci funkce, nebo v celem skriptu

    // 3. deklarovat pomoci let
    //console.log(y); // toto neni mozne
    let y = 3;
    console.log(y);
    // promenna vznikne az v okamziku deklarace (zadny hoisting)
    // promenna je platna v bloku, kde byla deklarovana
    {
        let z = 10;
    }
    //console.log(z); // nelze

    // 4. deklarovat pomoci const
    const pi = 3.14;
    // ma rozsah platnosti jako deklarace pomoci let
    // hodnota musi byt prirazena pri deklaraic a nelze ji zmenit
    //pi = 7; // nelze

    // -> deklarujte pomoci let

    // DATOVE TYPY

    // datove typy v JS nejsou soucasti deklarace
    // ale nejake typy v jazyce jsou

    // 1. string
    let text = "ahoj";
    console.log(typeof text); // string
    // 2. number
    let cislo = 5;
    console.log(typeof cislo); // number
    console.log(typeof pi); // number
    // 3. boolean
    let pravda = true;
    console.log(typeof pravda); // boolean
    // 4. undefined
    let cotoje;
    console.log(typeof cotoje); // nic je typu undefined
    console.log(cotoje);        // nic ma hodnotu undefined

    // vsechno ostatni v JS jsou objekty

    // DATOVE STRUKTURY

    // 1. pole
    let pole = ["pondělí", "úterý", "středa", -6, true, undefined, null];
    console.log(pole);
    console.log(pole[0]);
    console.log(pole[1]);
    console.log(pole[2]);

    // 2. objekty
    let objekt = {1: "pondělí", 2: "úterý", 3: "středa", "pravda": true, true: false, undefined: 1};
    console.log(objekt);
    console.log(objekt[1]);
    console.log(objekt[2]);
    console.log(objekt["pravda"]);
    console.log(objekt[true]);

    // objekty se v JS chovaji jako asociativni pole (tzb. dvojice klic-hodnota)

    // RIDICI STRUKTURY

    if(cislo > 0)
    {
        console.log(cislo + " je kladné číslo.");
    }
    else if(cislo < 0)
    {
        console.log(cislo + " je záporné číslo.");
    }
    else
    {
        console.log(cislo + " je nulové číslo.");
    }

    // if funguje stejne jako v C#

    while(cislo > 0)
    {
        console.log(cislo);
        //cislo = cislo - 1;
        //cislo -= 1;
        cislo--;
    }

    // while a do-while funguji stejne jako v C#

    // for je jinej

    for(let x = 0; x < 10; x++)
    {
        console.log("ahoj");
    }

    // klasika

    console.log(pole);

    for(index in pole)
    {
        console.log(index);
    }
    // zvlastni... proc???

    for(prvek of pole)
    {
        console.log(prvek);
    }
    // for-of se chova jako foreach v C#

    console.log(objekt);

    /*
    for(prvek of objekt)
    {
        console.log(prvek);
    }
    */
    // nefunguje, jsme smutni...

    for(klic in objekt)
    {
        console.log(klic);
    }
    // aha, klice se zjistit daji...

    for(klic in objekt)
    {
        console.log(objekt[klic]);
    }
    // takze hodnoty v objektu se zjistit daji, slava

    // umime JavaScript...?
    // moment, a co metody v OOP?!

    // METODY V JS

    // motivacni demonstrace
    let a = function zdvojnasobit(hodnota) {
        return 2 * hodnota;
    };
    console.log(a(5));
    console.log(a);

    let osoba = {
        "jmeno": "Jakub",
        "prijmeni": "Šenkýř",
        "celeJmeno": function() { // tzv. anonymni funkce
            return this.jmeno + " " + this.prijmeni;
        }
    };

    console.log(osoba.celeJmeno());

    // a to je vse, pratele.
}
