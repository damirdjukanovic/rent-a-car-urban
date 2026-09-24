let slike = [];
let currentIndex = 0;

const datumOd = localStorage.getItem("datumOd");
const datumDo = localStorage.getItem("datumDo");
const lokacija = localStorage.getItem("lokacija");

const odDate = new Date(datumOd);
const doDate = new Date(datumDo);

const razlikaMS = doDate - odDate;
const trajanjeDana = Math.ceil(razlikaMS / (1000 * 60 * 60 * 24));

const jezik = window.location.pathname.includes("reservation-en") ? "en" : "bs";


// Cijena vozila je "na upit" - ukupna cijena se ne računa
const naUpit = jezik === "en" ? "on request" : "na upit";

function izracunajUkupnuCijenu() {
  return naUpit;
}




document.addEventListener("DOMContentLoaded", () => {
  const vozilo = JSON.parse(localStorage.getItem("odabranoVozilo"));

  if (!vozilo) {
    alert(jezik === "en" ? "No vehicle selected!" : "Nijedno vozilo nije odabrano!");
    window.location.href = jezik === "en" ? "index.html" : "index-bs.html";
    return;
  }

  slike = Array.isArray(vozilo.slike) && vozilo.slike.length > 0 ? vozilo.slike : [vozilo.slika];
  const imaViseSlika = slike.length > 1;

  // Chevroni u modalu samo ako ima više slika
  document.querySelectorAll('#image-modal button[onclick^="promijeniSlikuModal"]').forEach(btn => {
    btn.classList.toggle("hidden", !imaViseSlika);
  });

  document.getElementById("vozilo-detalji").innerHTML = `
  <div class="bg-white rounded-xl shadow overflow-hidden w-full relative">
    <div class="absolute top-3 left-3 z-10">
      <span class="bg-green-600 text-white text-xs px-3 py-1 rounded-full">${vozilo.tip}</span>
    </div>
    <div class="relative w-full h-56">
      <img id="vozilo-slider-img" src="${slike[0]}" alt="${vozilo.naziv}" 
          class="w-full h-56 object-cover rounded-t-xl cursor-pointer" />
      ${imaViseSlika ? `
      <button onclick="promijeniSliku(-1)"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 shadow hover:bg-white">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button onclick="promijeniSliku(1)"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 rounded-full p-2 shadow hover:bg-white">
        <i class="fa-solid fa-chevron-right"></i>
      </button>` : ''}
    </div>
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-900">${vozilo.naziv}</h2>
      <p class="text-gray-500 mb-4">${vozilo.godina} ${jezik === "en" ? "model year" : "godište"}</p>
      <div class="grid grid-cols-2 gap-3 text-sm text-blue-800 mb-4">
        <p><i class="fa-solid fa-gas-pump mr-1"></i> ${vozilo.gorivo}</p>
        <p><i class="fa-solid fa-snowflake mr-1"></i> ${vozilo.klima ? (jezik === "en" ? "A/C" : "Klima") : (jezik === "en" ? "No A/C" : "Bez klime")}</p>
        <p><i class="fa-solid fa-gear mr-1"></i> ${vozilo.mjenjac}</p>
        <p><i class="fa-solid fa-door-open mr-1"></i> ${jezik === "en" ? "5 doors" : "5 vrata"}</p>
        <p><i class="fa-solid fa-users mr-1"></i> ${vozilo.sjedista} ${jezik === "en" ? "seats" : "sjedišta"}</p>
      </div>
      <hr class="my-2" />
      <div class="text-sm font-medium text-gray-600">
        <p>
  ${jezik === "en" ? "Price per day:" : "Cijena po danu:"}
  <span class="text-blue-800 font-bold">${naUpit}</span>
</p>
      </div>
    </div>
  </div>
`;


  const img = document.getElementById("vozilo-slider-img");
  img.addEventListener("click", () => {
    otvoriModal(currentIndex);
  });

  // --- INFORMACIJE O REZERVACIJI ---


  document.getElementById("rezervacija-info").innerHTML = `
  <div class="bg-white p-6 rounded-xl shadow">
    <h2 class="text-lg font-bold text-gray-900 mb-4">${jezik === "en" ? "Reservation Information" : "Informacije o rezervaciji"}</h2>
    <div class="space-y-4 text-sm text-gray-800">
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-location-dot text-blue-700 mt-1"></i>
        <div>
          <p class="font-semibold">${jezik === "en" ? "Pickup Location" : "Lokacija preuzimanja"}</p>
          <p class="text-gray-600">${lokacija || (jezik === "en" ? "Unknown" : "Nepoznato")}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-calendar-days text-blue-700 mt-1"></i>
        <div>
          <p class="font-semibold">${jezik === "en" ? "Pickup Date" : "Datum preuzimanja"}</p>
          <p class="text-gray-600">${odDate.toLocaleString("bs-BA")}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-calendar-check text-blue-700 mt-1"></i>
        <div>
          <p class="font-semibold">${jezik === "en" ? "Return Date" : "Datum vraćanja"}</p>
          <p class="text-gray-600">${doDate.toLocaleString("bs-BA")}</p>
        </div>
      </div>
      <div class="flex items-start gap-3">
        <i class="fa-solid fa-clock text-blue-700 mt-1"></i>
        <div>
          <p class="font-semibold">${jezik === "en" ? "Rental Duration" : "Trajanje najma"}</p>
          <p class="text-gray-600">${isNaN(trajanjeDana) ? (jezik === "en" ? "Unknown" : "Nepoznato") : trajanjeDana + (jezik === "en" ? ' days' : ' dana')}</p>
        </div>
      </div>
    </div>
  </div>
`;

  // --- TREBATE POMOĆ ---
  document.getElementById("support-info").innerHTML = `
  <div class="bg-blue-50 border border-blue-100 p-6 rounded-xl flex gap-4 shadow">
    <div>
      <i class="fa-solid fa-headset text-blue-600 text-3xl"></i>
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-1">${jezik === "en" ? "Need help?" : "Trebate pomoć?"}</h3>
      <p class="text-gray-600 text-sm">${jezik === "en" ? "Our support team is available 24/7 to answer all your questions." : "Naš tim za podršku je dostupan 24/7 da odgovori na sva vaša pitanja."}</p>
      <div class="mt-2 text-blue-700 font-bold text-sm space-y-1">
        <p><i class="fa-solid fa-phone mr-2"></i> +387 61 240 699</p>
        <p><i class="fa-solid fa-phone mr-2"></i> +387 61 437 249</p>
      </div>
    </div>
  </div>
`;



  // --- PREGLED I POTVRDA ---
  document.getElementById("checkout-box").innerHTML = `
  <div class="bg-white p-6 rounded-xl shadow">
    <h2 class="text-lg font-bold text-gray-900 mb-4">${jezik === "en" ? "Review and Confirmation" : "Pregled i potvrda"}</h2>
    <div class="flex justify-between text-sm text-gray-700 mb-2">
  <span>${jezik === "en" ? `Vehicle rental (${trajanjeDana} ${trajanjeDana === 1 ? 'day' : 'days'})` : `Najam vozila (${trajanjeDana} ${trajanjeDana === 1 ? 'dan' : 'dana'})`}</span>
  <span class="font-semibold">${naUpit}</span>

</div>

    <hr class="my-2">
    <div class="flex justify-between text-base font-semibold text-gray-900 mb-4">
      <span>${jezik === "en" ? "Total to Pay" : "Ukupno za plaćanje"}</span>
      <span class="text-blue-700">${naUpit}</span>

    </div>
    <div class="space-y-2 text-sm mb-4">
      <div class="flex items-start gap-2">
        <input type="checkbox" id="uslovi" class="mt-1 accent-blue-600">
        <label for="uslovi">${jezik === "en" ? 'I accept the <a href="#" class="text-blue-600 underline">terms of use and privacy policy</a>.' : 'Prihvatam <a href="#" class="text-blue-600 underline">uslove korištenja i politiku privatnosti</a>.'}</label>
      </div>
      <div class="flex items-start gap-2">
        <input type="checkbox" id="dozvola" class="mt-1 accent-blue-600">
        <label for="dozvola">${jezik === "en" ? "I confirm that I am at least 21 years old and have held a valid driver's license for at least 2 years." : "Potvrđujem da imam najmanje 21 godinu i vozačku dozvolu važeću najmanje 2 godine."}</label>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <button class="bg-gray-100 text-gray-800 font-semibold py-2 rounded hover:bg-gray-200 transition">
        ${jezik === "en" ? "Back to Search" : "Nazad na pretragu"}
      </button>
      <button id="potvrdiBtn" class="bg-blue-800 text-white font-semibold py-2 rounded hover:bg-blue-900 transition">
        ${jezik === "en" ? "Confirm Reservation" : "Potvrdi rezervaciju"}
      </button>
    </div>
  </div>
`;

  const dugmePotvrdi = document.getElementById('potvrdiBtn');
  const forma = document.getElementById('reservation-form');

  dugmePotvrdi?.addEventListener('click', function (e) {
    e.preventDefault();

    const uslovi = document.getElementById("uslovi");
    const dozvola = document.getElementById("dozvola");
    const vozilo = JSON.parse(localStorage.getItem("odabranoVozilo"));

    if (!vozilo) {
      alert("Nijedno vozilo nije odabrano!");
      return;
    }

    if (!validirajPolja() || !uslovi.checked || !dozvola.checked) {
  alert(jezik === "en"
    ? "Please fix all form errors and accept the terms."
    : "Molimo ispravite greške u formi i prihvatite uslove.");
  return;
}



    const formData = new FormData(forma);
    const podaci = {
      ime: formData.get("ime"),
      prezime: formData.get("prezime"),
      email: formData.get("email"),
      telefon: formData.get("telefon"),
      vozacka: formData.get("vozacka"),
      drzava: formData.get("drzava"),
      djecije_sjediste: document.querySelector('input[name="djecije_sjediste"]')?.checked ? "Da" : "Ne",
      vozilo: vozilo.naziv,
      datum_od: odDate.toLocaleDateString("bs-BA"),
      datum_do: doDate.toLocaleDateString("bs-BA"),
      lokacija: lokacija,
        ukupna_cijena: naUpit,
        cijena: null,

        valuta: jezik === "bs" ? "KM" : "€"  // ✅ OVO DODAJEŠ

    };

    window.posaljiRezervaciju(podaci, forma);

  });
});


function validirajPolja() {
  let isValid = true;

  const ime = document.getElementById("ime");
  const prezime = document.getElementById("prezime");
  const email = document.querySelector('input[name="email"]');
  const telefon = document.querySelector('input[name="telefon"]');
  const vozacka = document.querySelector('input[name="vozacka"]');

  const drzava = document.getElementById("drzava");
const drzavaErr = document.getElementById("drzava-error");



  const imeErr = document.getElementById("ime-error");
  const prezimeErr = document.getElementById("prezime-error");
  const emailErr = document.getElementById("email-error");
  const telefonErr = document.getElementById("telefon-error");
  const vozackaErr = document.getElementById("vozacka-error");

  // Validacija imena
  if (!/^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,}$/.test(ime.value.trim())) {
    imeErr.classList.remove("hidden");
    isValid = false;
  } else {
    imeErr.classList.add("hidden");
  }

  // Prezime
  if (!/^[A-ZČĆŽŠĐ][a-zčćžšđ]{1,}$/.test(prezime.value.trim())) {
    prezimeErr.classList.remove("hidden");
    isValid = false;
  } else {
    prezimeErr.classList.add("hidden");
  }

  // Email
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value.trim())) {
    emailErr.classList.remove("hidden");
    isValid = false;
  } else {
    emailErr.classList.add("hidden");
  }

  // Telefon (npr. +38761234567 ili 061234567)
  if (!/^\+?\d{6,15}$/.test(telefon.value.trim())) {
    telefonErr.classList.remove("hidden");
    isValid = false;
  } else {
    telefonErr.classList.add("hidden");
  }

  // Vozačka
  if (vozacka.value.trim().length < 5) {
    vozackaErr.classList.remove("hidden");
    isValid = false;
  } else {
    vozackaErr.classList.add("hidden");
  }
  

  // Drzava izdavanja


  if (!drzava.value) {
  drzavaErr.classList.remove("hidden");
  isValid = false;
} else {
  drzavaErr.classList.add("hidden");
}


  return isValid;
}


document.getElementById("reservation-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  const podaci = {
    ime: form.querySelector('input[type="text"]').value,
    prezime: form.querySelectorAll('input[type="text"]')[1].value,
    datum_od: localStorage.getItem("datumOd") || "N/A",
    datum_do: localStorage.getItem("datumDo") || "N/A",
    vozilo: localStorage.getItem("vozilo") || "N/A",
    ukupna_cijena: naUpit
  };

  posaljiRezervaciju(podaci, form);
});


// Navigacija slika
function prikaziSliku(index) {
  const img = document.getElementById("vozilo-slider-img");
  if (img) img.src = slike[index];
}

function promijeniSliku(smjer) {
  currentIndex += smjer;
  if (currentIndex < 0) currentIndex = slike.length - 1;
  if (currentIndex >= slike.length) currentIndex = 0;
  prikaziSliku(currentIndex);
}

// Modal funkcije
function otvoriModal(index) {
  currentIndex = index;
  document.getElementById("modal-image").src = slike[currentIndex];
  document.getElementById("image-modal").classList.remove("hidden");
}

function zatvoriModal() {
  document.getElementById("image-modal").classList.add("hidden");
}

function promijeniSlikuModal(smjer) {
  currentIndex += smjer;
  if (currentIndex < 0) currentIndex = slike.length - 1;
  if (currentIndex >= slike.length) currentIndex = 0;
  document.getElementById("modal-image").src = slike[currentIndex];
}

// Zatvaranje modala klikom van slike
document.getElementById("modal-overlay").addEventListener("click", zatvoriModal);

// Navigacija tastaturom
document.addEventListener("keydown", function (e) {
  const modal = document.getElementById("image-modal");
  if (modal.classList.contains("hidden")) return;

  if (e.key === "ArrowLeft") {
    promijeniSlikuModal(-1);
  } else if (e.key === "ArrowRight") {
    promijeniSlikuModal(1);
  } else if (e.key === "Escape") {
    zatvoriModal();
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const lang = document.documentElement.lang;
  const t = {
    bs: { valuta: "KM", kurs: 2.0 },
    en: { valuta: "€", kurs: 1.0 }
  }[lang === "en" ? "en" : "bs"];

  const djecijeEl = document.getElementById("djecije-cijena");

  if (djecijeEl) djecijeEl.textContent = `${(10 * t.kurs).toFixed(0)} ${t.valuta} / dan`;
});
