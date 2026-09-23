let trenutniJezik = document.documentElement.lang;

const tekstovi = {
  bs: {
    sjedista: "sjedišta",
    mjenjac: "Mjenjač",
    klima: ["Klima", "Bez klime"],
    cijenaPoDanu: "Cijena po danu",
    rezervisi: "Rezerviši",
    vrata: "vrata",
    godiste: "godište",
    mjenjacOpcije: {
      "Automatik": "Automatik",
      "Automatski": "Automatik",
      "Manuelni": "Manuelni"
    },
    gorivoOpcije: {
      "Dizel": "Dizel",
      "Benzin": "Benzin"
    },
     tipOpcije:{
      "Ekonomska": "Ekonomska",
      "SUV":"SUV",
      "Luksuzna":"Luksuzna",
      "Kombi":"Kombi"
    }
  },
  en: {
    sjedista: "seats",
    mjenjac: "Transmission",
    klima: ["A/C", "No A/C"],
    cijenaPoDanu: "Price per day",
    rezervisi: "Reserve",
    vrata: "doors",
    godiste: "model year",
    mjenjacOpcije: {
      "Automatik": "Automatic",
      "Automatski": "Automatic",
      "Manuelni": "Manual"
    },
    gorivoOpcije: {
      "Dizel": "Diesel",
      "Benzin": "Petrol"
    },
    tipOpcije:{
      "Ekonomska": "Economy",
      "SUV":"SUV",
      "Luksuzna":"Luxury",
      "Kombi":"Van"
    }
  }
};




let najnovijaVozila = [{
  "naziv": "Mercedes Vito Vip 2020",
  "tip": "Kombi",
  "godina": 2020,
  "gorivo": "Dizel",
  "klima": true,
  "mjenjac": "Automatik",
  "sjedista": 9,
  "cijena": 120,
  "slike": [
    "assets/img/Mercedes-Vito-Vip-2022-1.jpg",
    "assets/img/Mercedes-Vito-Vip-2022-2.jpg",
    "assets/img/Mercedes-Vito-Vip-2022-3.jpg"
  ]
},
{
  "naziv": "Mercedes V Klasa VIP",
  "tip": "Kombi",
  "godina": 2020,
  "gorivo": "Dizel",
  "klima": true,
  "mjenjac": "Automatik",
  "sjedista": 8,
  "cijena": 130,
  "slike": [
    "assets/img/Mercedes-V-klasa-VIP-1.jpg",
    "assets/img/Mercedes-V-klasa-VIP-2.jpg",
    "assets/img/Mercedes-V-klasa-VIP-3.jpg"
  ]
},
{
  "naziv": "Porshe Cayenne 2012",
  "tip": "SUV",
  "godina": 2012,
  "gorivo": "Benzin",
  "klima": true,
  "mjenjac": "Automatik",
  "sjedista": 5,
  "cijena": 90,
  "slike": [
    "assets/img/Porshe-cayenne-2012-1.jpeg",
    "assets/img/Porshe-cayenne-2012-2.jpeg",
    "assets/img/Porshe-cayenne-2012-3.webp"
  ]
},
{
  "naziv": "Volkswagen Touran 2020",
  "tip": "Ekonomska",
  "godina": 2020,
  "gorivo": "Dizel",
  "klima": true,
  "mjenjac": "Automatik",
  "sjedista": 7,
  "cijena": 60,
  "slike": [
    "assets/img/Volkswagen-Touran-2020-1.jpg",
    "assets/img/Volkswagen-Touran-2020-2.jpg",
    "assets/img/Volkswagen-Touran-2020-3.jpg"
  ]
},
{
  "naziv": "Seat Leon 2013",
  "tip": "Ekonomska",
  "godina": 2013,
  "gorivo": "Dizel",
  "klima": true,
  "mjenjac": "Manuelni",
  "sjedista": 5,
  "cijena": 30,
  "slike": [
    "assets/img/Seat-Leon-2013-1.jpg",
    "assets/img/Seat-Leon-2013-2.jpg",
    "assets/img/Seat-Leon-2013-3.jpg"
  ]
},
{
  "naziv": "Passat CC 2010",
  "tip": "Luksuzna",
  "godina": 2010,
  "gorivo": "Benzin",
  "klima": true,
  "mjenjac": "Automatik",
  "sjedista": 5,
  "cijena": 35,
  "slike": [
    "assets/img/Passat-CC-2010-1.jpg",
    "assets/img/Passat-CC-2010-2.jpg",
    "assets/img/Passat-CC-2010-3.jpg"
  ]
}


];

let svaVozila = [
  // === najnovijaVozila ===
  {
    "naziv": "Mercedes Vito Vip 2020",
    "tip": "Kombi",
    "godina": 2020,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 9,
    "cijena": 120,
    "slike": [
      "assets/img/Mercedes-Vito-Vip-2022-1.jpg",
      "assets/img/Mercedes-Vito-Vip-2022-2.jpg",
      "assets/img/Mercedes-Vito-Vip-2022-3.jpg"
    ]
  },
  {
    "naziv": "Mercedes V Klasa VIP",
    "tip": "Kombi",
    "godina": 2020,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 8,
    "cijena": 130,
    "slike": [
      "assets/img/Mercedes-V-klasa-VIP-1.jpg",
      "assets/img/Mercedes-V-klasa-VIP-2.jpg",
      "assets/img/Mercedes-V-klasa-VIP-3.jpg"
    ]
  },
  {
    "naziv": "Porshe Cayenne 2012",
    "tip": "SUV",
    "godina": 2012,
    "gorivo": "Benzin",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 5,
    "cijena": 90,
    "slike": [
      "assets/img/Porshe-cayenne-2012-1.jpeg",
      "assets/img/Porshe-cayenne-2012-2.jpeg",
      "assets/img/Porshe-cayenne-2012-3.webp"
    ]
  },
  {
    "naziv": "Volkswagen Touran 2020",
    "tip": "Ekonomska",
    "godina": 2020,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 7,
    "cijena": 60,
    "slike": [
      "assets/img/Volkswagen-Touran-2020-1.jpg",
      "assets/img/Volkswagen-Touran-2020-2.jpg",
      "assets/img/Volkswagen-Touran-2020-3.jpg"
    ]
  },
  {
    "naziv": "Seat Leon 2013",
    "tip": "Ekonomska",
    "godina": 2013,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Manuelni",
    "sjedista": 5,
    "cijena": 30,
    "slike": [
      "assets/img/Seat-Leon-2013-1.jpg",
      "assets/img/Seat-Leon-2013-2.jpg",
      "assets/img/Seat-Leon-2013-3.jpg"
    ]
  },
  {
    "naziv": "Passat CC 2010",
    "tip": "Luksuzna",
    "godina": 2010,
    "gorivo": "Benzin",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 5,
    "cijena": 35,
    "slike": [
      "assets/img/Passat-CC-2010-1.jpg",
      "assets/img/Passat-CC-2010-2.jpg",
      "assets/img/Passat-CC-2010-3.jpg"
    ]
  },

  // === ostatak ===
  {
    "naziv": " Mercedes Vito 2010",
    "tip": "Kombi",
    "godina": 2010,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 8,
    "cijena": 60,
    "slike": [
      "assets/img/Mercedes-Vito-2010-1.jpg",
      "assets/img/Mercedes-Vito-2010-2.jpg",
      "assets/img/Mercedes-Vito-2010-3.jpg"
    ]
  },
  {
    "naziv": "Mercedes Vito 2014",
    "tip": "Kombi",
    "godina": 2014,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 8,
    "cijena": 70,
    "slike": [
      "assets/img/Mercedes-Vito-2014-1.jpg",
      "assets/img/Mercedes-Vito-2014-2.jpg",
      "assets/img/Mercedes-Vito-2014-3.jpg"
    ]
  },
  {
    "naziv": "Passat 2014",
    "tip": "Ekonomska",
    "godina": 2014,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 5,
    "cijena": 35,
    "slike": [
      "assets/img/Passat-2014-1.jpg",
      "assets/img/Passat-2014-2.jpg",
      "assets/img/Passat-2014-3.jpg"
    ]
  },
  {
    "naziv": "Škoda Fabia",
    "tip": "Ekonomska",
    "godina": 2015,
    "gorivo": "Benzin",
    "klima": true,
    "mjenjac": "Manuelni",
    "sjedista": 5,
    "cijena": 30,
    "slike": [
      "assets/img/skoda.jpg",
      "assets/img/Skoda-Fabia-2015-2.jpg"
    ]
  },
  {
    "naziv": "Volkswagen Touran 2015",
    "tip": "Ekonomska",
    "godina": 2015,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 7,
    "cijena": 45,
    "slike": [
      "assets/img/Volkswagen-Touran-2015-1.jpg",
      "assets/img/Volkswagen-Touran-2015-2.jpg",
      "assets/img/Volkswagen-Touran-2015-3.jpg"
    ]
  },
  {
    "naziv": "Volkswagen Touran 2017",
    "tip": "Ekonomska",
    "godina": 2017,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Manuelni",
    "sjedista": 7,
    "cijena": 60,
    "slike": [
      "assets/img/Volkswagen-Touran-2017-1.jpg",
      "assets/img/Volkswagen-Touran-2017-2.jpg",
      "assets/img/Volkswagen-Touran-2017-3.jpg"
    ]
  }
];

let trenutnaLista = najnovijaVozila;

let trenutniTip = 'Svi';
let trenutniMjenjac = 'Svi';
let trenutniIzbor = 'najnovija'; // prati da li su prikazana najnovija ili sva vozila




if (document.getElementById('vozila-container')) {
  prikaziVozila(najnovijaVozila);
}

function prikaziVozila(lista) {
  trenutnaLista = lista;
  const container = document.getElementById('vozila-container');
  container.innerHTML = '';

  const kurs = 2;
  const t = tekstovi[trenutniJezik];

  lista.forEach((auto, index) => {
    const cijenaPrikaz = trenutniJezik === "bs"
      ? `${(auto.cijena * kurs).toFixed(2)} KM`
      : `${auto.cijena} €`;

    const card = document.createElement('div');
    card.className = "bg-white max-w-sm w-full mx-auto rounded-xl shadow overflow-hidden relative transform transition-transform duration-300 hover:scale-[1.02]";

    card.innerHTML = `
      <div class="absolute top-3 left-3 z-10">
        <span class="text-white text-xs px-3 py-1 rounded-full ${getBadgeColor(auto.tip)}">${t.tipOpcije[auto.tip] || auto.tip}</span>
      </div>
      <img src="${auto.slike ? auto.slike[0] : auto.slika}" alt="${auto.naziv}" class="w-full h-48 object-cover rounded-t-xl" />
      <div class="p-6">
        <h2 class="text-xl font-bold text-gray-900">${auto.naziv}</h2>
        <p class="text-gray-500 mb-4">${auto.godina} ${t.godiste}</p>
        <div class="grid grid-cols-2 gap-3 text-sm text-blue-800 mb-4">
          <p><i class="fa-solid fa-gas-pump mr-1"></i> ${t.gorivoOpcije[auto.gorivo] || auto.gorivo}</p>
          <p><i class="fa-solid fa-snowflake mr-1"></i> ${auto.klima ? t.klima[0] : t.klima[1]}</p>
          <p><i class="fa-solid fa-gear mr-1"></i> ${t.mjenjacOpcije[auto.mjenjac] || auto.mjenjac}</p>
          <p><i class="fa-solid fa-door-open mr-1"></i> 5 ${t.vrata}</p>
          <p><i class="fa-solid fa-users mr-1"></i> ${auto.sjedista} ${t.sjedista}</p>
        </div>
        <hr class="my-2" />
        <div class="flex items-center justify-between">
          <div class="text-sm font-medium text-gray-600">
            <p>${t.cijenaPoDanu}: <span class="text-blue-800 font-bold">${cijenaPrikaz}</span></p>
          </div>
          <button class="rezervisi-btn bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm"
            data-index="${index}">
            ${t.rezervisi}
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Dodavanje event listenera za dugmad
  document.querySelectorAll('.rezervisi-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const index = parseInt(e.target.dataset.index);
      const auto = trenutnaLista[index];
      localStorage.setItem("odabranoVozilo", JSON.stringify(auto));
      otvoriModal();
    });
  });
}






function pokreniProvjeru(auto) {
  localStorage.setItem("odabranoVozilo", JSON.stringify(auto));
  otvoriModal();
}



function getBadgeColor(tip) {
  switch (tip.toLowerCase()) {
    case 'suv': return 'bg-green-500';
    case 'luksuzna': return 'bg-purple-500';
    case 'ekonomska': return 'bg-blue-500';
    case 'kombi': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
}


const filterDugmad = document.querySelectorAll('.filter-btn');
filterDugmad.forEach(btn => {
  btn.addEventListener('click', () => {
    const tip = btn.dataset.tip;

    filterDugmad.forEach(b => b.classList.replace('bg-blue-600', 'bg-gray-200'));
    filterDugmad.forEach(b => b.classList.replace('text-white', 'text-gray-700'));

    btn.classList.replace('bg-gray-200', 'bg-blue-600');
    btn.classList.replace('text-gray-700', 'text-white');

    if (tip === "Najnovija") {
      trenutniIzbor = 'najnovija';
    } else {
      trenutniIzbor = 'sva';
    }

    trenutniTip = tip === "Najnovija" || tip === "Sva" ? 'Svi' : tip;

    filtriraj(); // koristi filtraciju da spojiš sve filtere
  });
});


const mjenjacDugmad = document.querySelectorAll('.mjenjac-btn');
mjenjacDugmad.forEach(btn => {
  btn.addEventListener('click', () => {
    trenutniMjenjac = btn.dataset.mjenjac;
    
    mjenjacDugmad.forEach(b => {
      b.classList.remove('bg-blue-600', 'text-white');
      b.classList.add('bg-gray-200', 'text-gray-700');
    });

    btn.classList.remove('bg-gray-200', 'text-gray-700');
    btn.classList.add('bg-blue-600', 'text-white');

    filtriraj();
  });
});


document.getElementById('filter-sjedista').addEventListener('change', filtriraj);

function filtriraj() {
  const sjedista = document.getElementById('filter-sjedista').value;

  // Počni od originalne baze
  let filtrirani = trenutniIzbor === 'najnovija' ? [...najnovijaVozila] : [...svaVozila];


  // Tip
  if (trenutniTip !== 'Svi') {
    filtrirani = filtrirani.filter(v => v.tip.toLowerCase() === trenutniTip.toLowerCase());
  }

  // Mjenjač
  if (trenutniMjenjac !== 'Svi') {
    filtrirani = filtrirani.filter(v => v.mjenjac === trenutniMjenjac);
  }

  // Sjedišta
  if (sjedista !== 'Svi') {
    filtrirani = sjedista === '7+'
      ? filtrirani.filter(v => v.sjedista >7)
      : filtrirani.filter(v => v.sjedista.toString() === sjedista);
  }

  prikaziVozila(filtrirani);
}



function pokreniRezervaciju(auto) {
  localStorage.setItem("odabranoVozilo", JSON.stringify(auto));
  otvoriModal(); // otvara modal za provjeru dostupnosti

  if (trenutniJezik === "en") {
    window.location.href = "reservation-en.html";
  } else {
    window.location.href = "reservation.html"; // Default for 'bs' or any other language
  }
}

function otvoriModal() {
  const modal = document.getElementById('rezervacija-modal');
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    console.error("Modal sa id='rezervacija-modal' nije pronađen!");
  }
}


function zatvoriModal() {
  const modal = document.getElementById('rezervacija-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.getElementById('rezultat-provjere').innerText = "";
    document.getElementById('provjera-form').reset();
  }
}


function jeZauzeto(naziv, od, doVracanja) {
  if (!od || !doVracanja) return false;

  const odDate = new Date(od);
  const doDate = new Date(doVracanja);
  if (isNaN(odDate) || isNaN(doDate)) return false;

  return rezervacije.some(r => {
    if (r.naziv.trim().toLowerCase() !== naziv.trim().toLowerCase()) return false;
    const rOd = new Date(r.od);
    const rDo = new Date(r.do);
    return odDate < rDo && doDate > rOd; // Preklapanje
  });
}
