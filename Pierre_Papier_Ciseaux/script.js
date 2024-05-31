const PIERRE_SELECTION = document.querySelector(".pierre");
const FEUILLE_SELECTION = document.querySelector(".feuille");
const CISEAUX_SELECTION = document.querySelector(".ciseaux");
const RANDOM_SELECTION = document.querySelector(".random-selection img");
const PLAYER_SCORE_P = document.querySelector(".player-score");
const COMPUTER_SCORE_P = document.querySelector(".computer-score");
const RESULT = document.querySelector(".result");
const REJOUER = document.querySelector(".rejouer");
const EFFACER = document.querySelector(".effacer");

let playerScore = parseInt(PLAYER_SCORE_P.innerText);
let computerScore = parseInt(COMPUTER_SCORE_P.innerText);

const IMAGES_SRC = [
	"./images/pierre.png",
	"./images/feuille.png",
	"./images/les-ciseaux.png",
];

function scrollImages(images, duration) {
	let index = 0;
	const monInterval = setInterval(() => {
		RANDOM_SELECTION.src = images[index];
		index = (index + 1) % images.length; // Passer à l'image suivante dans le tableau
	}, 175); // Changer l'image toutes les 175 millisecondes
	setTimeout(() => {
		clearInterval(monInterval); // Arrêter le défilement des images
	}, duration); // Arrêter le défilement après la durée spécifiée
}

function changeSize(selection, pasSelection1, pasSelection2) {
	selection.classList.toggle("selected");
	pasSelection1.classList.toggle("not-selected");
	pasSelection2.classList.toggle("not-selected");
}

function message() {
	setTimeout(() => {
		if (playerScore === 3) {
			RESULT.innerText = "Vous avez gagné cette manche";
		} else if (computerScore === 3) {
			RESULT.innerText = "L'ordinateur a gagné cette manche";
		} else {
			RESULT.innerText = "Cliquez sur une image pour jouer";
		}
	}, 4000);
}

PIERRE_SELECTION.addEventListener("click", () => {
	if (playerScore < 3 && computerScore < 3) {
		changeSize(PIERRE_SELECTION, CISEAUX_SELECTION, FEUILLE_SELECTION);
		scrollImages(IMAGES_SRC, 1000);
		let randomNumber = Math.ceil(Math.random() * 3);
		switch (randomNumber) {
			case 1:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/pierre.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "Egalité héhé...";
				}, 1500);
				break;
			case 2:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/feuille.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "C'est perdu, poil au pus!";
					COMPUTER_SCORE_P.innerText = computerScore + 1;
					computerScore++;
				}, 1500);
				break;
			case 3:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/les-ciseaux.png";
					RESULT.innerText = "C'est gagné, poil au nez!";
					PLAYER_SCORE_P.innerText = playerScore + 1;
					playerScore++;
				}, 1175);
				setTimeout(() => {}, 1500);
				break;
			default:
				console.log("Error with the randomNumber switch");
		}

		setTimeout(() => {
			RESULT.innerText = " ";
			RANDOM_SELECTION.src = "./images/point-dinterrogation.png";
			changeSize(PIERRE_SELECTION, CISEAUX_SELECTION, FEUILLE_SELECTION);
		}, 3000);
		message();
	}
});

FEUILLE_SELECTION.addEventListener("click", () => {
	if (playerScore < 3 && computerScore < 3) {
		changeSize(FEUILLE_SELECTION, PIERRE_SELECTION, CISEAUX_SELECTION);
		scrollImages(IMAGES_SRC, 1000);
		let randomNumber = Math.ceil(Math.random() * 3);
		switch (randomNumber) {
			case 1:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/pierre.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "C'est gagné, poil au nez!";
					PLAYER_SCORE_P.innerText = playerScore + 1;
					playerScore++;
				}, 1500);
				break;
			case 2:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/feuille.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "Egalité héhé...";
				}, 1500);
				break;
			case 3:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/les-ciseaux.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "C'est perdu, poil au pus!";
					COMPUTER_SCORE_P.innerText = computerScore + 1;
					computerScore++;
				}, 1500);
				break;
			default:
				console.log("Error with the randomNumber switch");
		}
		setTimeout(() => {
			RESULT.innerText = " ";
			RANDOM_SELECTION.src = "./images/point-dinterrogation.png";
			changeSize(FEUILLE_SELECTION, PIERRE_SELECTION, CISEAUX_SELECTION);
		}, 3000);
		message();
	}
});

CISEAUX_SELECTION.addEventListener("click", () => {
	if (playerScore < 3 && computerScore < 3) {
		changeSize(CISEAUX_SELECTION, FEUILLE_SELECTION, PIERRE_SELECTION);
		scrollImages(IMAGES_SRC, 1000);
		let randomNumber = Math.ceil(Math.random() * 3);
		switch (randomNumber) {
			case 1:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/pierre.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "C'est perdu, poil au pus!";
					COMPUTER_SCORE_P.innerText = computerScore + 1;
					computerScore++;
				}, 1500);
				break;
			case 2:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/feuille.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "C'est gagné, poil au nez!";
					PLAYER_SCORE_P.innerText = playerScore + 1;
					playerScore++;
				}, 1500);
				break;
			case 3:
				setTimeout(() => {
					RANDOM_SELECTION.src = "./images/les-ciseaux.png";
				}, 1175);
				setTimeout(() => {
					RESULT.innerText = "Egalité héhé...";
				}, 1500);
				break;
			default:
				console.log("Error with the randomNumber switch");
		}

		setTimeout(() => {
			RESULT.innerText = " ";
			RANDOM_SELECTION.src = "./images/point-dinterrogation.png";
			changeSize(CISEAUX_SELECTION, FEUILLE_SELECTION, PIERRE_SELECTION);
		}, 3000);
		message();
	}
});

REJOUER.addEventListener("click", () => {
	playerScore = 0;
	computerScore = 0;
	PLAYER_SCORE_P.innerText = playerScore;
	COMPUTER_SCORE_P.innerText = computerScore;
	RESULT.innerText = "Cliquez sur une image pour jouer";
});
