// --- COMPTEUR DE VISITES ---
let compteur = 0;
const btnVisit = document.querySelector("#btn-visit");
const message = document.querySelector("#message");

btnVisit.addEventListener("click", function() {
  compteur++;
  message.textContent = "Vous avez compté " + compteur + " visite(s).";
});

// --- MODE SOMBRE / CLAIR ---
const btnTheme = document.querySelector("#btn-theme");

btnTheme.addEventListener("click", function() {
  document.body.classList.toggle("sombre");

  if (document.body.classList.contains("sombre")) {
    btnTheme.textContent = "☀️ Mode clair";
  } else {
    btnTheme.textContent = "🌙 Mode sombre";
  }
});