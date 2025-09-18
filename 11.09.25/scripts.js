function sprawdzWiek() {
  var wiek = document.getElementById("wiek").value;
  if (wiek >= 18) {
    alert("Jesteś pełnoletni");
  } else {
    alert("Nie jesteś pełnoletni");
  }
}

function listaZakupow() {
  var produkty = ["mleko", "cukier", "jajka"];
  var zakupy = [];

  for (var i = 0; i < produkty.length; i++) {
    var id = produkty[i];
    if (document.getElementById(id).checked) {
      zakupy.push(id);
    }
  }

  if (zakupy.length > 0) {
    document.getElementById("wynik").innerText =
      "Lista zakupów: " + zakupy.join(", ");
  } else {
    document.getElementById("wynik").innerText = "Wszystko masz :)";
  }
}

function komunikat() {
  var imie = document.getElementById("imie").value;
  var wiek = document.getElementById("wiekImienia").value;

  if (imie === "" || wiek == "") {
    alert("Wypelnij wszystkie pola");
  } else if (imie === "Przemysław" && wiek == "17") {
    alert("Z toba sie kolego nie przywitam");
  } else {
    alert("Witam " + imie + ", masz " + wiek + " lat");
  }
}

// Część 2

function przeciwnaWartosc() {
  var liczba = document.getElementById("przeciwna").value;
  var przeciwna = przeciwnaLiczba(Number(liczba));
  document.getElementById("przeciwnaWynik").innerText =
    "Przeciwna liczba do twojej to: " + przeciwna;
}
function przeciwnaLiczba(liczba) {
  return -liczba;
}

function obliczObwodKola() {
  var promien = document.getElementById("promienKola").value;

  const obwod =
    promien <= 0
      ? () => "Promień nie może być niedodatni"
      : () => (2 * Math.PI * promien).toFixed(2);

  alert("Obwód koła wynosi: " + obwod());
}

function policzZbiór(zbiorLiczb) {
  var suma = 0.0;
  var min = zbiorLiczb[0];
  var max = zbiorLiczb[0];
  for (var i = 0; i < zbiorLiczb.length; i++) {
    suma += zbiorLiczb[i];
    if (zbiorLiczb[i] < min) {
      min = zbiorLiczb[i];
    }
    if (zbiorLiczb[i] > max) {
      max = zbiorLiczb[i];
    }
  }
  var srednia = suma / zbiorLiczb.length;
  return {
    min: min,
    max: max,
    srednia: srednia.toFixed(2),
  };
}

// Dodatkowe zadania

function losowanie() {
  var tablica = [];
  for (var i = 0; i < 10; i++) {
    tablica.push(Math.floor(Math.random() * 101));
  }

  var parzysteTablica = [];
  for (var i = 0; i < 10; i++) {
    if (tablica[i] % 2 === 0) {
      parzysteTablica.push(tablica[i]);
    }
  }
  document.getElementById("wynikLosowania").innerText =
    "Wylosowana tablica: " +
    tablica +
    "\nTablica parzystych: " +
    parzysteTablica;
}

function literki() {
  var tekst = document.getElementById("literki").value;

  var odwroconyTekst = tekst.split("").reverse().join("");
  document.getElementById("literki").value = odwroconyTekst;

  var ilosc = {};
  var litery = "aąbcćdeęfghijklłmnńoóprsśtuwyzźżqvx";

  for (var i = 0; i < tekst.length; i++) {
    var char = tekst[i].toLowerCase();
    if (litery.includes(char)) {
      if (!ilosc[char]) ilosc[char] = 0;
      ilosc[char]++;
    }
  }

  var wynik = "<p>Ilość liter:</p><ul>";
  for (var litera of litery) {
    if (ilosc[litera]) {
      wynik += "<li>" + litera + ": " + ilosc[litera] + "</li>";
    }
  }
  wynik += "</ul>";

  document.getElementById("wynikLiterki").innerHTML = wynik;
}

var wynikQuizu = 0;
var pytania = [
  {
    pytanie: "Jaki jest stolica Polski?",
    odpowiedzi: ["Warszawa", "Kraków", "Gdańsk", "Wrocław"],
    poprawna: 0,
  },
  {
    pytanie: "Ile wynosi 2 + 2?",
    odpowiedzi: ["3", "4", "5", "6"],
    poprawna: 1,
  },
  {
    pytanie: "Jaki jest największy ocean na Ziemi?",
    odpowiedzi: ["Atlantycki", "Spokojny", "Indyjski", "Arktyczny"],
    poprawna: 1,
  },
];

function rozpocznijQuiz() {
  wynikQuizu = 0;
  pytanieIndex = randomIndex = Math.floor(Math.random() * pytania.length);
  pokazPytanie(pytanieIndex);
}

function pokazPytanie(index) {
  var pytanie = pytania[index];
  document.getElementById("pytanie").innerText = pytanie.pytanie;

  var odpowiedziSelect = document.getElementById("odpowiedzi");
  odpowiedziSelect.innerHTML = "";
  pytanie.odpowiedzi.forEach(function (odpowiedz, i) {
    var option = document.createElement("option");
    option.value = i;
    option.innerText = odpowiedz;
    odpowiedziSelect.appendChild(option);
  });
}
function sprawdzOdpowiedz() {
  var pytanie = pytania[pytanieIndex];
  var wybranaOdpowiedz = document.getElementById("odpowiedzi").value;
  if (parseInt(wybranaOdpowiedz) === pytanie.poprawna) {
    document.getElementById("wynikQuizu").innerHTML = "Poprawna odpowiedź!";
  } else {
    document.getElementById("wynikQuizu").innerHTML = "Błędna odpowiedź!";
  }
}
