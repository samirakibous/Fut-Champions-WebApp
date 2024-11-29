const initialPlayers = {
  "players": [
    {
      "name": "Lionel Messi",
      "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
      "position": "RW",
      "nationality": "Argentina",
      "flag": "https://cdn.sofifa.net/flags/ar.png",
      "club": "Inter Miami",
      "logo": "https://cdn.sofifa.net/meta/team/239235/120.png",
      "rating": 93,
      "pace": 85,
      "shooting": 92,
      "passing": 91,
      "dribbling": 95,
      "defending": 35,
      "physical": 65
    },
    {
      "name": "Cristiano Ronaldo",
      "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
      "position": "ST",
      "nationality": "Portugal",
      "flag": "https://cdn.sofifa.net/flags/pt.png",
      "club": "Al Nassr",
      "logo": "https://cdn.sofifa.net/meta/team/2506/120.png",
      "rating": 91,
      "pace": 84,
      "shooting": 94,
      "passing": 82,
      "dribbling": 87,
      "defending": 34,
      "physical": 77
    },
    {
      "name": "Kevin De Bruyne",
      "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
      "position": "CM",
      "nationality": "Belgium",
      "flag": "https://cdn.sofifa.net/flags/be.png",
      "club": "Manchester City",
      "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
      "rating": 91,
      "pace": 74,
      "shooting": 86,
      "passing": 93,
      "dribbling": 88,
      "defending": 64,
      "physical": 78
    },
    {
      "name": "Kylian Mbappé",
      "photo": "https://cdn.sofifa.net/players/231/747/25_120.png",
      "position": "ST",
      "nationality": "France",
      "flag": "https://cdn.sofifa.net/flags/fr.png",
      "club": "Real Madrid",
      "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
      "rating": 92,
      "pace": 97,
      "shooting": 89,
      "passing": 80,
      "dribbling": 92,
      "defending": 39,
      "physical": 77
    },
    {
      "name": "Virgil van Dijk",
      "photo": "https://cdn.sofifa.net/players/203/376/25_120.png",
      "position": "CB",
      "nationality": "Netherlands",
      "flag": "https://cdn.sofifa.net/flags/nl.png",
      "club": "Liverpool",
      "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
      "rating": 90,
      "pace": 75,
      "shooting": 60,
      "passing": 70,
      "dribbling": 72,
      "defending": 92,
      "physical": 86
    },
    {
      "name": "Antonio Rudiger",
      "photo": "https://cdn.sofifa.net/players/205/452/25_120.png",
      "position": "CB",
      "nationality": "Germany",
      "flag": "https://cdn.sofifa.net/flags/de.png",
      "club": "Real Madrid",
      "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
      "rating": 88,
      "pace": 82,
      "shooting": 55,
      "passing": 73,
      "dribbling": 70,
      "defending": 86,
      "physical": 86
    },
    {
      "name": "Neymar Jr",
      "photo": "https://cdn.sofifa.net/players/190/871/25_120.png",
      "position": "LW",
      "nationality": "Brazil",
      "flag": "https://cdn.sofifa.net/flags/br.png",
      "club": "Al-Hilal",
      "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
      "rating": 90,
      "pace": 91,
      "shooting": 83,
      "passing": 86,
      "dribbling": 94,
      "defending": 37,
      "physical": 61
    },
    {
      "name": "Mohamed Salah",
      "photo": "https://cdn.sofifa.net/players/192/985/25_120.png",
      "position": "RW",
      "nationality": "Egypt",
      "flag": "https://cdn.sofifa.net/flags/eg.png",
      "club": "Liverpool",
      "logo": "https://cdn.sofifa.net/meta/team/8/120.png",
      "rating": 89,
      "pace": 93,
      "shooting": 87,
      "passing": 81,
      "dribbling": 90,
      "defending": 45,
      "physical": 75
    },
    {
      "name": "Joshua Kimmich",
      "photo": "https://cdn.sofifa.net/players/212/622/25_120.png",
      "position": "CM",
      "nationality": "Germany",
      "flag": "https://cdn.sofifa.net/flags/de.png",
      "club": "Bayern Munich",
      "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
      "rating": 89,
      "pace": 70,
      "shooting": 75,
      "passing": 88,
      "dribbling": 84,
      "defending": 84,
      "physical": 81
    },
    {
      "name": "Jan Oblak",
      "photo": "https://cdn.sofifa.net/players/200/389/25_120.png",
      "position": "GK",
      "nationality": "Slovenia",
      "flag": "https://cdn.sofifa.net/flags/si.png",
      "club": "Atletico Madrid",
      "logo": "https://cdn.sofifa.net/meta/team/7980/120.png",
      "rating": 91,
      "diving": 89,
      "handling": 90,
      "kicking": 78,
      "reflexes": 92,
      "speed": 50,
      "positioning": 88
    },
    {
      "name": "Luka Modrić",
      "photo": "https://cdn.sofifa.net/players/177/003/25_120.png",
      "position": "CM",
      "nationality": "Croatia",
      "flag": "https://cdn.sofifa.net/flags/hr.png",
      "club": "Real Madrid",
      "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
      "rating": 88,
      "pace": 74,
      "shooting": 78,
      "passing": 89,
      "dribbling": 90,
      "defending": 72,
      "physical": 65
    },
    {
      "name": "Vinicius Junior",
      "photo": "https://cdn.sofifa.net/players/238/794/25_120.png",
      "position": "LW",
      "nationality": "Brazil",
      "flag": "https://cdn.sofifa.net/flags/br.png",
      "club": "Real Madrid",
      "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
      "rating": 89,
      "pace": 91,
      "shooting": 88,
      "passing": 85,
      "dribbling": 94,
      "defending": 39,
      "physical": 61
    },
    {
      "name": "Brahim Diáz",
      "photo": "https://cdn.sofifa.net/players/231/410/25_120.png",
      "position": "LW",
      "nationality": "Morocco",
      "flag": "https://cdn.sofifa.net/flags/ma.png",
      "club": "Real Madrid",
      "logo": "https://cdn.sofifa.net/meta/team/3468/120.png",
      "rating": 82,
      "pace": 85,
      "shooting": 74,
      "passing": 78,
      "dribbling": 85,
      "defending": 31,
      "physical": 56
    },
    {
      "name": "Karim Benzema",
      "photo": "https://cdn.sofifa.net/players/165/153/25_120.png",
      "position": "ST",
      "nationality": "France",
      "flag": "https://cdn.sofifa.net/flags/fr.png",
      "club": "Al-Ittihad",
      "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
      "rating": 90,
      "pace": 77,
      "shooting": 90,
      "passing": 83,
      "dribbling": 88,
      "defending": 40,
      "physical": 78
    },
    {
      "name": "Erling Haaland",
      "photo": "https://cdn.sofifa.net/players/239/085/25_120.png",
      "position": "ST",
      "nationality": "Norway",
      "flag": "https://cdn.sofifa.net/flags/no.png",
      "club": "Manchester City",
      "logo": "https://cdn.sofifa.net/players/239/085/25_120.png",
      "rating": 91,
      "pace": 89,
      "shooting": 94,
      "passing": 65,
      "dribbling": 80,
      "defending": 45,
      "physical": 88
    },
    {
      "name": "N'Golo Kanté",
      "photo": "https://cdn.sofifa.net/players/215/914/25_120.png",
      "position": "CDM",
      "nationality": "France",
      "flag": "https://cdn.sofifa.net/flags/fr.png",
      "club": "Al-Ittihad",
      "logo": "https://cdn.sofifa.net/meta/team/476/120.png",
      "rating": 87,
      "pace": 77,
      "shooting": 66,
      "passing": 75,
      "dribbling": 82,
      "defending": 88,
      "physical": 82
    },
    {
      "name": "Alphonso Davies",
      "photo": "https://cdn.sofifa.net/players/234/396/25_120.png",
      "position": "LB",
      "nationality": "Canada",
      "flag": "https://cdn.sofifa.net/flags/ca.png",
      "club": "Bayern Munich",
      "logo": "https://cdn.sofifa.net/meta/team/503/120.png",
      "rating": 84,
      "pace": 96,
      "shooting": 68,
      "passing": 77,
      "dribbling": 82,
      "defending": 76,
      "physical": 77
    },
    {
      "name": "Yassine Bounou",
      "photo": "https://cdn.sofifa.net/players/209/981/25_120.png",
      "position": "GK",
      "nationality": "Morocco",
      "flag": "https://cdn.sofifa.net/flags/ma.png",
      "club": "Al-Hilal",
      "logo": "https://cdn.sofifa.net/meta/team/7011/120.png",
      "rating": 84,
      "diving": 81,
      "handling": 82,
      "kicking": 77,
      "reflexes": 86,
      "speed": 38,
      "positioning": 83
    },
    {
      "name": "Bruno Fernandes",
      "photo": "https://cdn.sofifa.net/players/212/198/25_120.png",
      "position": "CM",
      "nationality": "Portugal",
      "flag": "https://cdn.sofifa.net/flags/pt.png",
      "club": "Manchester United",
      "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
      "rating": 88,
      "pace": 75,
      "shooting": 85,
      "passing": 89,
      "dribbling": 84,
      "defending": 69,
      "physical": 77
    },
    {
      "name": "Jadon Sancho",
      "photo": "https://cdn.sofifa.net/players/233/049/25_120.png",
      "position": "LW",
      "nationality": "England",
      "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
      "club": "Manchester United",
      "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
      "rating": 84,
      "pace": 85,
      "shooting": 74,
      "passing": 78,
      "dribbling": 88,
      "defending": 34,
      "physical": 63
    },
    {
      "name": "Trent Alexander-Arnold",
      "photo": "https://cdn.sofifa.net/players/231/281/25_120.png",
      "position": "RB",
      "nationality": "England",
      "flag": "https://cdn.sofifa.net/flags/gb-eng.png",
      "club": "Liverpool",
      "rating": 87,
      "pace": 76,
      "shooting": 66,
      "passing": 89,
      "dribbling": 80,
      "defending": 79,
      "physical": 71
    },
    {
      "name": "Achraf Hakimi",
      "photo": "https://cdn.sofifa.net/players/235/212/25_120.png",
      "position": "RB",
      "nationality": "Morocco",
      "flag": "https://cdn.sofifa.net/flags/ma.png",
      "club": "Paris Saint-Germain",
      "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
      "rating": 84,
      "pace": 91,
      "shooting": 76,
      "passing": 80,
      "dribbling": 80,
      "defending": 75,
      "physical": 78
    },
    {
      "name": "Youssef En-Nesyri",
      "photo": "https://cdn.sofifa.net/players/235/410/25_120.png",
      "position": "ST",
      "nationality": "Morocco",
      "flag": "https://cdn.sofifa.net/flags/ma.png",
      "club": "Fenerbahçe",
      "logo": "https://cdn.sofifa.net/meta/team/88/120.png",
      "rating": 83,
      "pace": 82,
      "shooting": 82,
      "passing": 63,
      "dribbling": 77,
      "defending": 36,
      "physical": 80
    },
    {
      "name": "Noussair Mazraoui",
      "photo": "https://cdn.sofifa.net/players/236/401/25_120.png",
      "position": "LB",
      "nationality": "Morocco",
      "flag": "https://cdn.sofifa.net/flags/ma.png",
      "club": "Manchester United",
      "logo": "https://cdn.sofifa.net/meta/team/14/120.png",
      "rating": 81,
      "pace": 78,
      "shooting": 66,
      "passing": 77,
      "dribbling": 83,
      "defending": 77,
      "physical": 71
    },
    {
      "name": "Ismael Saibari",
      "photo": "https://cdn.sofifa.net/players/259/480/25_120.png",
      "position": "CM",
      "nationality": "Morocco",
      "flag": "https://cdn.sofifa.net/flags/ma.png",
      "club": "PSV",
      "logo": "https://cdn.sofifa.net/meta/team/682/120.png",
      "rating": 83,
      "pace": 89,
      "shooting": 78,
      "passing": 80,
      "dribbling": 86,
      "defending": 55,
      "physical": 84
    },
    {
      "name": "Gianluigi Donnarumma",
      "photo": "https://cdn.sofifa.net/players/230/621/25_120.png",
      "position": "GK",
      "nationality": "Italy",
      "flag": "https://cdn.sofifa.net/flags/it.png",
      "club": "Paris Saint-Germain",
      "logo": "https://cdn.sofifa.net/meta/team/591/120.png",
      "rating": 89,
      "diving": 88,
      "handling": 84,
      "kicking": 75,
      "reflexes": 90,
      "speed": 50,
      "positioning": 85
    }
  ]
}



//=============================================//

//charger les joueurs depuis localStorage ou initialiser avec les données intégrées
let playersArray = JSON.parse(localStorage.getItem('players'))?.players || initialPlayers.players;

//sauvegarder les données si elles n'existent pas déjà
if (!localStorage.getItem('players')) {
  localStorage.setItem('players', JSON.stringify({ players: initialPlayers.players }));
}

// function afficherJoueurs() {
//   const playersContainer = document.getElementById('players-list');
//   playersContainer.innerHTML = '';
//   playersArray.forEach(player => {
//     const playerDiv = document.createElement('div');
//     playerDiv.innerHTML = `
//       <img src="${player.photo}" alt="${player.name}" style="width:50px;height:50px;">
//       <strong>${player.name}</strong> - ${player.position}
//       <p>Note : ${player.rating}</p>
//     `;
//     playersContainer.appendChild(playerDiv);
//   });
// }
// afficherJoueurs();


//=============================================//

const titleContainer = document.getElementById('squadTitle');
const saveButton = document.getElementById('saveTitle');
const titre = document.getElementById('title');

function afficherTitre(titleValue) {
  const titleElement = document.createElement('div');
  titleElement.innerHTML = `${titleValue}`;
  titleElement.style.color = 'white';
  titleElement.style.fontSize = '24px';
  titleElement.style.fontWeight = 'bold';
  titleElement.style.fontFamily = 'Arial, sans-serif';
  titleElement.style.padding = '5px'
  titleContainer.innerHTML = '';
  titleContainer.appendChild(titleElement);
}

saveButton.addEventListener('click', function () {
  const titleValue = titre.value.trim();
  if (titleValue) {
    localStorage.setItem('squadTitle', titleValue);
    afficherTitre(titleValue);
  } else {
    alert("Veuillez entrer un titre valide.");
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const savedTitle = localStorage.getItem('squadTitle');
  if (savedTitle) {
    afficherTitre(savedTitle);
  }
});

//=============================================//
let addPlayerButtons = document.querySelectorAll('.butt');
let playerForm = document.getElementById('player-form');
let closeFormButton = document.getElementById('close-form');
addPlayerButtons.forEach(button => {
  button.addEventListener('click', () => {
    playerForm.classList.remove('hidden');
  });
});
closeFormButton.addEventListener('click', () => {
  playerForm.classList.add('hidden');
});

//=================================================//
let formation = document.getElementById("formation");
formation.addEventListener('click', function () {
  const selectedFormation = formation.value;
  document.getElementById('formation-433').classList.add('hidden');
  document.getElementById('formation-442').classList.add('hidden');
  if (selectedFormation === '4-3-3') {
    document.getElementById('formation-433').classList.remove('hidden');
  } else if (selectedFormation === '4-4-2') {
    document.getElementById('formation-442').classList.remove('hidden');
  }
})

//=================================================// 
let addFormContainer = document.querySelector('.addFrmContainer');

function afficherForm() {
  addFormContainer.classList.remove('hidden');
}

//==================================================
const cards = document.querySelector('.cards');

function populatePlayers(array) {
  cards.innerHTML = '';

  array.forEach(player => {
    console.log(player);

    const div = document.createElement('div');
    div.classList.add('relative', 'text-black');


    div.innerHTML = `
     <img src="src/assets/img/badge_gold.webp" alt="">
     <!-- position and number -->
     <div class="player_positoin flex flex-col absolute top-[25%] left-[15%]">
         <p class="text-[10px] lg:text-sm font-bold">${player.rating}</p>
         <p class="text-[8px] lg:text-xs">${player.position}</p>
     </div>
     <!-- image -->
     <div
         class="player_image w-2/3 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <img src="${player.photo}" alt="">
     </div>
     <!-- name and more -->
     <div class="w-4/5 flex flex-col items-center absolute top-[62%] left-[10%]">
         <p class="text-[8px] lg:text-xs md:text-xs font-bold">${player.name.split(' ')[1]}</p>
         <div>
             <span> ${player.position === 'GK' ? 'DIV' : 'PAC'}</span> 
             <span> ${player.position === 'GK' ? player.diving : player.pace}</span> 
</div>
         <!-- flags -->
         <div class="palyer_statistics w-full flex flex-row justify-center gap-2">
             <img src="${player.flag}" width="10%" alt="">
             <img src="${player.logo}" width="10%" alt="">
         </div>
     </div>
                          
  `;


    cards.appendChild(div);
  })
}

let players = localStorage.getItem('players')
players = JSON.parse(players).players
console.log(players);

if (players.length > 0) {

  populatePlayers(players)
}
//================================================
const positionSelect = document.getElementById('position');
const nonGKFields = document.querySelectorAll('.non-gk');
const specificGKFields = document.querySelectorAll('.specific-gk');

positionSelect.addEventListener('change', () => {
  const selectedPosition = positionSelect.value;

  if (selectedPosition === 'GK') {
    specificGKFields.forEach(field => field.classList.remove('hidden')); 
    nonGKFields.forEach(field => field.classList.add('hidden')); 
  } else {
    specificGKFields.forEach(field => field.classList.add('hidden'));
    nonGKFields.forEach(field => field.classList.remove('hidden'));
  }
});


//==================================================
//récupérer les elements de DOM
const fullNameInput = document.getElementById('Full-Name');
const photoInput = document.getElementById('Photo');
const positionInput = document.getElementById('position');
const nationalityInput = document.getElementById('Nationality');
const flagInput = document.getElementById('Flag');
const clubInput = document.getElementById('Club');
const logoInput = document.getElementById('Logo');
const ratingInput = document.getElementById('Rating');
const divingInput = document.getElementById('diving');
const handlingInput = document.getElementById('handling');
const kickingInput = document.getElementById('kicking');
const reflexesInput = document.getElementById('reflexes');
const speedInput = document.getElementById('speed');
const positioningInput = document.getElementById('positioning');
const paceInput = document.getElementById('Pace');
const shootingInput = document.getElementById('Shooting');
const passingInput = document.getElementById('Passing');
const dribblingInput = document.getElementById('Dribbling');
const defendingInput = document.getElementById('Defending');
const physicalInput = document.getElementById('Phisycal');
const formContainer = document.getElementById('Addplayer-form');

//===================================================
function ajouterJoueur(e) {
  e.preventDefault(); // Empêche le rechargement de la page
  const name = fullNameInput.value;
  const photo = photoInput.value;
  const position = positionInput.value;
  const nationality = nationalityInput.value;
  const flag = flagInput.value;
  const club = clubInput.value;
  const logo = logoInput.value;
  const rating = parseInt(ratingInput.value) || 0;

  let newPlayer = { name, photo, position, nationality, flag, club, logo, rating };

  // Champs pour le goal keeper
  if (position === 'GK') {
    newPlayer.diving = parseInt(divingInput.value) || 0;
    newPlayer.handling = parseInt(handlingInput.value) || 0;
    newPlayer.kicking = parseInt(kickingInput.value) || 0;
    newPlayer.reflexes = parseInt(reflexesInput.value) || 0;
    newPlayer.speed = parseInt(speedInput.value) || 0;
    newPlayer.positioning = parseInt(positioningInput.value) || 0;
  } else {
    newPlayer.pace = parseInt(paceInput.value) || 0;
    newPlayer.shooting = parseInt(shootingInput.value) || 0;
    newPlayer.passing = parseInt(passingInput.value) || 0;
    newPlayer.dribbling = parseInt(dribblingInput.value) || 0;
    newPlayer.defending = parseInt(defendingInput.value) || 0;
    newPlayer.physical = parseInt(physicalInput.value) || 0;
  }

  playersArray.push(newPlayer);
  localStorage.setItem('players', JSON.stringify({ players: playersArray }));
  populatePlayers(playersArray);

  // Vider le formulaire pour une nouvelle saisie
  formContainer.reset();
  addFormContainer.classList.add('hidden');
}

//====================================================
// // Sélectionner toutes les cartes de joueur
// const playerCards = document.querySelectorAll('.player_card');
// const playersOnField = {}; // Suivi des positions déjà occupées

// playerCards.forEach(card => {
//     card.addEventListener('click', () => {
//         const playerName = card.querySelector('.font-bold').innerText;
//         const playerImage = card.querySelector('.player_image img').src;
//         const playerPosition = card.querySelector('.player_positoin p:nth-child(2)').innerText.trim();
//         const playerRating = card.querySelector('.player_positoin p:first-child').innerText;

//         // Vérifier si la position est déjà occupée
//         if (playersOnField[playerPosition]) {
//             alert(`Position ${playerPosition} déjà occupée.`);
//             return;
//         }

//         // Chercher la position correspondante sur le terrain
//         const positionElement = document.querySelector(`.butt[data-position="${playerPosition}"]`);
//         if (positionElement) {
//             const parent = positionElement.parentElement;
//             parent.innerHTML = `
//                 <div class="relative text-black">
//                     <img src="src/assets/img/badge_gold.webp" alt="" class="w-full h-full object-contain">
//                     <div class="player_positoin absolute top-[25%] left-[15%]">
//                         <p class="text-[10px] lg:text-sm font-bold">${playerRating}</p>
//                         <p class="text-[8px] lg:text-xs">${playerPosition}</p>
//                     </div>
//                     <div class="player_image w-2/3 absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//                         <img src="${playerImage}" alt="${playerName}">
//                     </div>
//                     <div class="w-4/5 flex flex-col items-center absolute top-[62%] left-[10%]">
//                         <p class="text-[8px] lg:text-xs md:text-xs font-bold">${playerName}</p>
//                     </div>
//                 </div>
//             `;
//             playersOnField[playerPosition] = true; // Marquer la position comme occupée
//         } else {
//             alert("Position non trouvée sur le terrain.");
//         }
//     });
// });

//====================================================================
function showError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.add('border-red-500'); 
  input.classList.add('ring-red-500', 'focus:ring-red-500');
  small.classList.remove('hidden'); 
  small.innerText = message; 
}

function hideError(input) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.classList.remove('border-red-500'); 
  input.classList.remove('ring-red-500', 'focus:ring-red-500');
  small.classList.add('hidden'); 
}



function toggleButton(isValid) {
  const button = document.getElementById('addP');
  if (isValid) {
      button.disabled = false;
      button.classList.remove('opacity-50', 'cursor-not-allowed');
      button.classList.add('bg-blue-500', 'hover:bg-blue-700', 'cursor-pointer');
  } else {
      button.disabled = true;
      button.classList.remove('bg-blue-500', 'hover:bg-blue-700', 'cursor-pointer');
      button.classList.add('opacity-50', 'cursor-not-allowed');
  }
}
function validateForm() {
  let isValid = true;

  //nom complet 
  const nameValue = fullNameInput.value.trim();
  if (nameValue.length < 8 || !nameValue.includes(" ") || !/^[a-zA-Z\s]+$/.test(nameValue)) {
      showError(fullNameInput, "donner au moins 8lettres et un espace");
      isValid = false;
  } else {
      hideError(fullNameInput);
  }

  //nationalité
  if (!/^[a-zA-Z\s]+$/.test(nationalityInput.value.trim())) {
      showError(nationalityInput, "saisir uniquement des lettres.");
      isValid = false;
  } else {
      hideError(nationalityInput);
  }

  //photo
  if (!/^(https?:\/\/[^\s]+)$/.test(photoInput.value.trim())) {
      showError(photoInput, "L'URL de la photo est invalide.");
      isValid = false;
  } else {
      hideError(photoInput);
  }

  //champs numérique
  const numericFields = positionInput.value === 'GK'
      ? [ratingInput, divingInput, handlingInput, kickingInput, reflexesInput, speedInput, positioningInput]
      : [ratingInput, paceInput, shootingInput, passingInput, dribblingInput, defendingInput, physicalInput];

  numericFields.forEach(field => {
      if (isNaN(field.value) || field.value.trim() === '' || field.value < 1 || field.value > 100) {
          showError(field, "Ce champ doit être un nombre valide entre 1 et 100.");
          isValid = false;
      } else {
          hideError(field);
      }
  });

  toggleButton(isValid);
  return isValid;
}


//===========================validation=================================
let AddplayerForm = document.getElementById('Addplayer-form');
//=============================search=========================================
 




