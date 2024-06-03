const BUTTON1 = document.getElementById("button1");
const BUTTON2 = document.getElementById("button2");
const BUTTON3 = document.getElementById("button3");
const BUTTON4 = document.getElementById("button4");
const BUTTON5 = document.getElementById("button5");
const BUTTON6 = document.getElementById("button6");
const BUTTON7 = document.getElementById("button7");
const BUTTON8 = document.getElementById("button8");
const BUTTON9 = document.getElementById("button9");

const VALIDER = document.getElementById("valider");
const RESET = document.getElementById("reset");

const CHOSEN_NB = document.getElementById("number-typed");
const CHOSEN_PIC = document.getElementById("finished-img");

const STOCK1 = document.getElementById("stock1");
const STOCK2 = document.getElementById("stock2");
const STOCK3 = document.getElementById("stock3");
const STOCK4 = document.getElementById("stock4");
const STOCK5 = document.getElementById("stock5");
const STOCK6 = document.getElementById("stock6");

const FINISHED_SECTION = document.getElementById("finished-section");

BUTTON1.addEventListener("click", () => {
	CHOSEN_NB.innerText = "1";
});

BUTTON2.addEventListener("click", () => {
	CHOSEN_NB.innerText = "2";
});

BUTTON3.addEventListener("click", () => {
	CHOSEN_NB.innerText = "3";
});

BUTTON4.addEventListener("click", () => {
	CHOSEN_NB.innerText = "4";
});

BUTTON5.addEventListener("click", () => {
	CHOSEN_NB.innerText = "5";
});
BUTTON6.addEventListener("click", () => {
	CHOSEN_NB.innerText = "6";
});

BUTTON7.addEventListener("click", () => {
	CHOSEN_NB.innerText = "7";
});

BUTTON8.addEventListener("click", () => {
	CHOSEN_NB.innerText = "8";
});

BUTTON9.addEventListener("click", () => {
	CHOSEN_NB.innerText = "9";
});

VALIDER.addEventListener("click", () => {
	const DRINK = CHOSEN_NB.innerText;

	switch (DRINK) {
		case "1":
			if (parseInt(STOCK1.innerText) > 0) {
				CHOSEN_PIC.src = "./images/coca.png";
				FINISHED_SECTION.classList.add("heaven");
				STOCK1.innerText = parseInt(STOCK1.innerText) - 1;
			}
			break;

		case "2":
			if (parseInt(STOCK2.innerText) > 0) {
				CHOSEN_PIC.src = "./images/light.png";
				FINISHED_SECTION.classList.add("heaven");
				STOCK2.innerText = parseInt(STOCK2.innerText) - 1;
			}
			break;

		case "3":
			if (parseInt(STOCK3.innerText) > 0) {
				CHOSEN_PIC.src = "./images/pepsi.png";
				FINISHED_SECTION.classList.add("heaven");
				STOCK1.innerText = parseInt(STOCK3.innerText) - 1;
			}
			break;

		case "4":
			if (parseInt(STOCK4.innerText) > 0) {
				CHOSEN_PIC.src = "./images/max.png";
				FINISHED_SECTION.classList.add("heaven");
				STOCK4.innerText = parseInt(STOCK4.innerText) - 1;
			}
			break;

		case "5":
			if (parseInt(STOCK5.innerText) > 0) {
				CHOSEN_PIC.src = "./images/fanta.png";
				FINISHED_SECTION.classList.add("heaven");
				STOCK5.innerText = parseInt(STOCK5.innerText) - 1;
			}
			break;

		case "6":
			if (parseInt(STOCK6.innerText) > 0) {
				CHOSEN_PIC.src = "./images/sprite.png";
				FINISHED_SECTION.classList.add("heaven");
				STOCK6.innerText = parseInt(STOCK6.innerText) - 1;
			}
			break;

		default:
			CHOSEN_NB.innerText = "No";
			break;
	}
});

RESET.addEventListener("click", () => {
	CHOSEN_NB.innerText = "";
});
