const lang = document.documentElement.lang; // koristi <html lang="en"> iz HTML-a

const tekst = {
  bs: {
    zauzeto: "Zauzeto",
    dostupno: "Dostupno",
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
      "Automatski": "Automatski",
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
    },
    valuta: "KM",
    kurs:2.00
  },
  en: {
      zauzeto: "Unavailable",
    dostupno: "Available",
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
    },
    valuta:"€",
    kurs:1.00
  }
};


const t = tekst[lang === "en" ? "en" : "bs"];
k=t.kurs;

let unosOd = localStorage.getItem("datumOd") ? new Date(localStorage.getItem("datumOd")) : new Date();
let unosDo = localStorage.getItem("datumDo") ? new Date(localStorage.getItem("datumDo")) : new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
let brojPutnika = parseInt(localStorage.getItem("brojPutnika")) || 1;
let currentPage = 1;
const itemsPerPage = 6;
let filteredList = [];
let rezervacije = [];

document.getElementById("form-lokacija").value = localStorage.getItem("lokacija");
document.getElementById("form-datum-od").value = localStorage.getItem("datumOd");
document.getElementById("form-datum-do").value = localStorage.getItem("datumDo");
document.getElementById("form-putnici").value = localStorage.getItem("brojPutnika");

async function ucitajRezervacije() {
  const res = await fetch("https://retoolapi.dev/qSVURz/urbandrive");
  const data = await res.json();
  rezervacije = data.map(r => {
    const [odStr, doStr] = r.datum_rezervacije.split(" - ");
    return {
      naziv: r.vozilo,
      datumOd: new Date(odStr),
      datumDo: new Date(doStr)
    };
  });
}

function jeZauzeto(auto, odPerioda, doPerioda) {
  return rezervacije.some(r => {
    if (r.naziv !== auto.naziv) return false;
    return !(doPerioda <= r.datumOd || odPerioda >= r.datumDo);
  });
}

trenutniTip = "Svi";
trenutniMjenjac = "Svi";
trenutniSjedista = "Svi";

document.querySelectorAll("input[name=tip]").forEach(r => r.addEventListener("change", () => {
  trenutniTip = r.value;
  filtrirajIPrikazi();
}));

document.querySelectorAll("input[name=mjenjac]").forEach(r => r.addEventListener("change", () => {
  trenutniMjenjac = r.value;
  filtrirajIPrikazi();
}));

document.getElementById("filter-sjedista").addEventListener("change", e => {
  trenutniSjedista = e.target.value;
  filtrirajIPrikazi();
});

function getBadgeColor(tip) {
  switch (tip.toLowerCase()) {
    case 'suv': return 'bg-green-500';
    case 'ekonomska': return 'bg-blue-500';
    case 'kombi': return 'bg-yellow-500';
    case 'gradski': return 'bg-pink-500';
    case 'karavan': return 'bg-indigo-500';
    default: return 'bg-gray-500';
  }
}

function resetujFiltere() {
  document.querySelector("input[name=tip][value='Svi']").checked = true;
  document.querySelector("input[name=mjenjac][value='Svi']").checked = true;
  document.getElementById("filter-sjedista").value = "Svi";
  trenutniTip = trenutniMjenjac = trenutniSjedista = "Svi";
  filtrirajIPrikazi();
}

function filtrirajIPrikazi() {
  const dostupna = [];
  const zauzeta = [];

  svaVozila.forEach(auto => {
    if (auto.sjedista < brojPutnika) return;
    if (trenutniTip !== "Svi" && auto.tip !== trenutniTip) return;
    if (trenutniMjenjac !== "Svi" && auto.mjenjac !== trenutniMjenjac) return;
    if (trenutniSjedista !== "Svi") {
      if (trenutniSjedista === "7+" && auto.sjedista < 7) return;
      if (trenutniSjedista !== "7+" && auto.sjedista != parseInt(trenutniSjedista)) return;
    }

    if (jeZauzeto(auto, unosOd, unosDo)) {
      zauzeta.push(auto);
    } else {
      dostupna.push(auto);
    }
  });

  filteredList = [...dostupna, ...zauzeta];
  currentPage = 1;
  prikaziTrenutnuStranicu();
}

function prikaziTrenutnuStranicu() {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = filteredList.slice(start, end);
  prikaziVozilaZaPeriod(pageItems);
  prikaziPaginaciju();
}

function prikaziPaginaciju() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  if (totalPages <= 1) return;

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "«";
  prevBtn.className = `px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border text-gray-700 hover:bg-blue-100'}`;
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      prikaziTrenutnuStranicu();
    }
  });
  pagination.appendChild(prevBtn);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = `px-3 py-1 rounded ${i === currentPage ? 'bg-blue-600 text-white' : 'bg-white border text-gray-700'} hover:bg-blue-100`;
    btn.addEventListener("click", () => {
      currentPage = i;
      prikaziTrenutnuStranicu();
    });
    pagination.appendChild(btn);
  }

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "»";
  nextBtn.className = `px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white border text-gray-700 hover:bg-blue-100'}`;
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      prikaziTrenutnuStranicu();
    }
  });
  pagination.appendChild(nextBtn);
}

function prikaziVozilaZaPeriod(lista) {
  const container = document.getElementById("rezultati-container");
  container.innerHTML = "";

  lista.forEach(auto => {
    const zauzet = jeZauzeto(auto, unosOd, unosDo);
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow overflow-hidden w-full relative";

    card.innerHTML = `
      <div class="absolute top-3 left-3 z-10">
        <span class="text-white text-xs px-3 py-1 rounded-full ${getBadgeColor(auto.tip)}">${t.tipOpcije[auto.tip] || auto.tip}</span>
      </div>
      <div class="absolute top-3 right-3 z-10">
        <span class="text-xs px-3 py-1 rounded-full ${zauzet ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'}">
  ${zauzet ? t.zauzeto : t.dostupno}
</span>
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
          <button onclick='pokreniRezervaciju(${JSON.stringify(auto).replace(/"/g, "&quot;")})'
            class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm ${zauzet ? 'opacity-50 cursor-not-allowed' : ''}"
            ${zauzet ? 'disabled' : ''}>
            ${t.rezervisi}
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("search-update-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const novaLokacija = document.getElementById("form-lokacija").value;
  const noviOd = document.getElementById("form-datum-od").value;
  const noviDo = document.getElementById("form-datum-do").value;
  const noviPutnici = document.getElementById("form-putnici").value;

  localStorage.setItem("lokacija", novaLokacija);
  localStorage.setItem("datumOd", noviOd);
  localStorage.setItem("datumDo", noviDo);
  localStorage.setItem("brojPutnika", noviPutnici);

  unosOd = new Date(noviOd);
  unosDo = new Date(noviDo);
  brojPutnika = parseInt(noviPutnici);

  filtrirajIPrikazi();
});

// Inicijalno učitavanje rezervacija iz API-ja
(async () => {
  await ucitajRezervacije();
  filtrirajIPrikazi();
})();

