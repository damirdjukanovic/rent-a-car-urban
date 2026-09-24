let trenutniJezik = document.documentElement.lang;

const tekstovi = {
  bs: {
    sjedista: "sjedišta",
    mjenjac: "Mjenjač",
    klima: ["Klima", "Bez klime"],
    cijenaPoDanu: "Cijena po danu",
    naUpit: "na upit",
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
      "Kombi":"Kombi"
    }
  },
  en: {
    sjedista: "seats",
    mjenjac: "Transmission",
    klima: ["A/C", "No A/C"],
    cijenaPoDanu: "Price per day",
    naUpit: "on request",
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
      "Kombi":"Van"
    }
  }
};




let svaVozila = [
  {
    "naziv": "Mercedes-Benz Vito 116 CDI 2020",
    "tip": "Kombi",
    "godina": 2020,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 9,
    "slike": ["assets/img/Mercedes-Vito-116-CDI-2020.jpg"]
  },
  {
    "naziv": "Mercedes-Benz Vito 114 CDI 2020",
    "tip": "Kombi",
    "godina": 2020,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 9,
    "slike": ["assets/img/Mercedes-Vito-114-CDI-2020.jpg"]
  },
  {
    "naziv": "Mercedes-Benz Vito 116 CDI 2019",
    "tip": "Kombi",
    "godina": 2019,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 9,
    "slike": ["assets/img/Mercedes-Vito-116-CDI-2019.jpg"]
  },
  {
    "naziv": "Volkswagen Touran 2019",
    "tip": "Ekonomska",
    "godina": 2019,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 7,
    "slike": ["assets/img/Volkswagen-Touran-2019.jpg"]
  },
  {
    "naziv": "Volkswagen Touran 2015",
    "tip": "Ekonomska",
    "godina": 2015,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 7,
    "slike": ["assets/img/Volkswagen-Touran-2015.jpg"]
  },
  {
    "naziv": "Volkswagen Passat B7 Variant 2012",
    "tip": "Ekonomska",
    "godina": 2012,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 5,
    "slike": ["assets/img/Volkswagen-Passat-B7-Variant-2012.jpg"]
  },
  {
    "naziv": "Volkswagen Passat CC 2011",
    "tip": "Ekonomska",
    "godina": 2011,
    "gorivo": "Dizel",
    "klima": true,
    "mjenjac": "Automatik",
    "sjedista": 4,
    "slike": ["assets/img/Volkswagen-Passat-CC-2011.jpg"]
  }
];

// Najnovija vozila = godište 2019 i novije
let najnovijaVozila = svaVozila.filter(v => v.godina >= 2019);

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

  const t = tekstovi[trenutniJezik];

  lista.forEach((auto, index) => {
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
            <p>${t.cijenaPoDanu}: <span class="text-blue-800 font-bold">${t.naUpit}</span></p>
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
