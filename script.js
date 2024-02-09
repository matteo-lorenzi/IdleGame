// Variables pour suivre l'état du jeu
let resources = 0;
let clickValue = 1;
let upgradeCost = 10;

// Sélection des éléments du DOM
const resourceDisplay = document.getElementById("resourceDisplay");
const clickButton = document.getElementById("clickButton");
const upgradeButton = document.getElementById("upgradeButton");

// Fonction pour mettre à jour l'affichage des ressources
function updateDisplay() {
  resourceDisplay.textContent = resources;
}

// Fonction appelée lorsqu'on clique sur le bouton "Click"
clickButton.addEventListener("click", function () {
  resources += clickValue;
  updateDisplay();
});

// Fonction appelée lorsqu'on clique sur le bouton "Upgrade"
upgradeButton.addEventListener("click", function () {
  if (resources >= upgradeCost) {
    clickValue++;
    resources -= upgradeCost;
    upgradeCost *= 2; // Augmente le coût de l'upgrade
    updateDisplay();
  } else {
    alert("Not enough resources!");
  }
});

// Fonction pour mettre à jour l'affichage au chargement de la page
updateDisplay();

document.addEventListener("DOMContentLoaded", function () {
  const hideButton = document.getElementById("hideButton");
  const showButton = document.getElementById("showButton");
  const dashboard = document.querySelector(".dashboard");

  hideButton.addEventListener("click", function () {
    dashboard.classList.add("hidden");
    hideButton.classList.add("hidden");

    // Lancer l'animation de l'apparition de la flèche après un court délai
    setTimeout(() => {
      showButton.style.opacity = "1"; // Augmenter l'opacité pour afficher en fondu
      showButton.style.display = "inline"; // Afficher la flèche
    }, 350); // Déclencher l'animation après un court délai
  });

  showButton.addEventListener("click", function () {
    dashboard.classList.remove("hidden");
    showButton.style.opacity = "0"; // Réduire l'opacité pour masquer en fondu
    setTimeout(() => {
      showButton.style.display = "none"; // Cacher la flèche après l'animation
    }, 500); // Masquer complètement après la fin de l'animation (0.5s)
  });
});

let timeSinceConnection = 0;

// Sélectionner les éléments à mettre à jour
const timeSinceConnectionDisplay = document.getElementById(
  "timeSinceConnection"
);
const totalResourcesDisplay = document.getElementById("totalResources");

// Fonction pour mettre à jour l'affichage du temps écoulé depuis la connexion
function updateTimeSinceConnection() {
  timeSinceConnection++;
  timeSinceConnectionDisplay.textContent = timeSinceConnection + " seconds";
}

// Fonction pour mettre à jour l'affichage des ressources
function updateTotalResources() {
  totalResourcesDisplay.textContent = resources;
}

// Fonction appelée périodiquement pour mettre à jour le temps depuis la connexion
setInterval(updateTimeSinceConnection, 1000); // Met à jour chaque seconde

// Fonction appelée lorsqu'on clique sur le bouton "Click"
clickButton.addEventListener("click", function () {
  resources += clickValue;
  updateTotalResources();
});
