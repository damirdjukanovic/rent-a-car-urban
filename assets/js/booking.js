//koliko putnika ima u autu
function adjustPassengers(change) {
  const input = document.getElementById('passenger-count');
  let value = parseInt(input.value);
  value = Math.max(1, value + change);
  input.value = value;
}

document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const lokacija = document.querySelector("select").value;
  const datumOd = document.querySelectorAll("input[type=datetime-local]")[0].value;
  const datumDo = document.querySelectorAll("input[type=datetime-local]")[1].value;
  const brojPutnika = document.getElementById("passenger-count").value;

  // Snimi sve u localStorage
  localStorage.setItem("lokacija", lokacija);
  localStorage.setItem("datumOd", datumOd);
  localStorage.setItem("datumDo", datumDo);
  localStorage.setItem("brojPutnika", brojPutnika);

  // Idi na novu stranicu sa rezultatima
  window.location.href = "results.html";
});
