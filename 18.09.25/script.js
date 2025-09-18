// zad 1
class KontoBankowe {
  saldo = 0;
  deposit(kwota) {
    this.saldo += kwota;
  }

  withdraw(kwota) {
    this.saldo -= kwota;
  }
    getSaldo() {
    return this.saldo;
  }
}

//zad 2
class Foo {
  static ZwrocWiadomosc(imie, nazwisko) {
    if(!nazwisko) {
        return `Mam na imię ${imie}`;
    }
    return `Nazywam się ${imie} ${nazwisko}`;
  }
}

console.log(Foo.ZwrocWiadomosc("Jan")); // do sprawdzenia
console.log(Foo.ZwrocWiadomosc("Jan", "Kowalski")); // do sprawdzenia

//zad 3
class Osoby {
  Powitaj() {
    console.log("Witam");
  }
}

class Uczen extends Osoby {
  constructor(imie, oceny) {
    super();
    this.imie = imie;
    this.oceny = oceny;
  }

  Srednia() {
    let suma = 0;
    for (let ocena of this.oceny) {
      suma += ocena;
    }
    return suma / this.oceny.length;
  }
}

const PrzemekUczen = new Uczen("Przemek", [5, 4, 3]);

//test
PrzemekUczen.Powitaj(); 
console.log(PrzemekUczen.Srednia());

//zad 4
class SrodekTransportu {
    przebieg;
    kolor;
    constructor(przebieg, kolor) {
      if (new.target === SrodekTransportu) {
        throw new Error("SrodekTransportu ma byc abstrakcyjny");
      }
      this.przebieg = przebieg;
      this.kolor = kolor;
    }
}

class Samochod extends SrodekTransportu {
    iloscDrzwi;

  constructor(przebieg, kolor, iloscDrzwi) {
    super(przebieg, kolor);
    this.iloscDrzwi = iloscDrzwi;
  }
}

class Samolot extends SrodekTransportu {
    iloscMiejsc;
    
  constructor(przebieg, kolor, iloscMiejsc) {
    super(przebieg, kolor);
    this.iloscMiejsc = iloscMiejsc;
  }
}

class Lodz extends SrodekTransportu {
    wypornosc;
    
  constructor(przebieg, kolor, wypornosc) {
    super(przebieg, kolor);
    this.wypornosc = wypornosc;
  }
}

//zad 5
class Psowate {
    constructor() {
      if (new.target === Psowate) {
        throw new Error("Psowate ma byc abstrakcyjny");
      }
    }
    dajGlos(){
        throw new Error("metoda abstakcyjna dajGlos musi byc stworzona w podklasie") 
    }
}

class Szczeniak extends Psowate {
    dajGlos(){
        return "hau hau pi pi (odglosy malego psa)"
    }
}

const Pies =  Object.create(Psowate.prototype);

Pies.dajGlos = function() {
    return "hau hau (odglosy psa)"
}

class Wilk extends Psowate {
    dajGlos(){
        return "Auuuuuuuuuuuuu (odglosy wilka)"
    }
}

//zad 6
// podobno ma "udawac ze dziala" (?), taka informacje dostalem
class InterfejsDlaArtysty{
    tworzDzielo(){};
    kontempluj(){};
}
class JakasKlasa{
    tworzDzielo(){
        console.log("tworzysz dzielo");
    }
}

const jakasKlasa = new JakasKlasa();
function checkInterface(object, interfaceObject) {
    const proto = Object.getPrototypeOf(interfaceObject);
    const methodNames = Object.getOwnPropertyNames(proto).filter(
        name => typeof proto[name] === "function" && name !== "constructor"
    );
    for (const method of methodNames) {
        if (typeof object[method] !== "function") {
            return false; // brak metody z interfejsu
        }
    }
    return true; // wszystkie metody z interfejsu sa zaimplementowane
}

console.log(checkInterface(jakasKlasa, new InterfejsDlaArtysty()));
const invalidObject = {kontempluj() { console.log("kontempluj") }};
console.log(checkInterface(invalidObject, new InterfejsDlaArtysty()));

//zad 7
class Uzytkownik {
    static uzytkownicy = [];
    haslo;
    constructor() {
        const haslo = document.getElementById("haslo").value;
        this.haslo = haslo;
        Uzytkownik.uzytkownicy.push(this);
    }
    static czyHasloOdpowiednioTrudne() {
        const haslo = document.getElementById("haslo").value;
        if (haslo.length < 8) {
            return false; // za krotkie
        }
        if (!/[0-9]/.test(haslo)) {
            return false; // brak cyfry
        }
        return true; // haslo git
    }
}

//zad 8
class KalkulatorProsty{
    static dodaj(a, b) {
        return a + b;
    }

    static odejmij(a, b) {
        return a - b;
    }

    static pomnoz(a, b) {
        return a * b;
    }

    static podziel(a, b) {
        if (b === 0) {
            throw new Error("Nie można dzielić przez zero");
        }
        return a / b;
    }

    static poteguj(a, b) {
        return Math.pow(a, b);
    }

    static pierwiastkuj(a) {
        if (a < 0) {
            throw new Error("Nie można pierwiastkować liczby ujemnej");
        }
        return Math.sqrt(a);
    }
    
}