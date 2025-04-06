const P = "🪨";
const F = "🧻";
const C = "✂️";

function BOT() {
  const options = ["pierre", "feuille", "ciseau"];
  const choixBotAléatoire = Math.floor(Math.random() * options.length);
  return options[choixBotAléatoire];
}
function Jeux(event) {
  const choixJoueur = event.target.id;
  const choixBot = BOT();

  //Résultat
  let result = "";
  let emojiJoueur = "";
  let emojiBOT = "";

  if (choixJoueur === choixBot) {
    result = "Egalité";
  } else if (
    (choixJoueur === "pierre" && choixBot === "ciseau") ||
    (choixJoueur === "ciseau" && choixBot === "feuille") ||
    (choixJoueur === "feuille" && choixBot === "pierre")
  ) {
    result = "Le joueur a gagné.";
  } else {
    result = "Le BOT a gagné.";
  }

  //choix de l'emoji du joueur
  if (choixJoueur === "pierre") {
    emojiJoueur = P;
  } else if (choixJoueur === "feuille") {
    emojiJoueur = F;
  } else {
    emojiJoueur = C;
  }

  //choix de l'emoji du BOT
  if (choixBot === "pierre") {
    emojiBOT = P;
  } else if (choixBot === "feuille") {
    emojiBOT = F;
  } else {
    emojiBOT = C;
  }
  //Affiche les différents choix et le résultat
  document.querySelector("#resultat-choix-joueur").textContent =
    "Le choix du joueur est : " + choixJoueur + emojiJoueur;
  document.querySelector("#resultat-choix-BOT").textContent =
    "Le choix du BOT est : " + choixBot + emojiBOT;
  document.querySelector("#resultat-manche").textContent =
    "Le résultat est : " + result;
}

document.getElementById("pierre").addEventListener("click", Jeux);
document.getElementById("feuille").addEventListener("click", Jeux);
document.getElementById("ciseau").addEventListener("click", Jeux);
