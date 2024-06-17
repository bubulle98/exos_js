const COLORS = ["green", "indigo", "hotpink", "navy", "gold", "firebrick"];
const COLOR_ROWS = document.querySelectorAll(".color-row");
const RED_SQUARES = document.querySelectorAll(".red-square");
const WHITE_SQUARES = document.querySelectorAll(".white-square");
const CHECK_BUTTON = document.querySelector("#check-button");
const REFRESH_BUTTON = document.querySelector("#refresh-button");
const REPLAY_BUTTON = document.querySelector("#replay-button");
const MODAL = document.querySelector(".modal");
const MODAL_CONTENT = document.querySelector(".modal-content");

let colorIndex;
let rowIndex;
let currentRow;
let currentRowPegs;

let computerOriginal = [];
let computerCopy = [];
let playerPattern = [];

let redPointsNb;
let whitePointsNb;

gameInitialization();

function gameInitialization() {
	colorIndex = 0;
	rowIndex = 0;
	currentRow = COLOR_ROWS[rowIndex];
	currentRowPegs = Array.from(currentRow.children);
	computerPatternCreation();
	rowActivation();
	checkButtonActivation();
	refreshButtonActivation();
	replayButtonActivation(REPLAY_BUTTON);
}

function computerPatternCreation() {
	for (i = 0; i < 4; i++) {
		computerOriginal[i] = COLORS[Math.floor(Math.random() * 6)];
	}
	console.log(computerOriginal);
}

function rowActivation() {
	currentRowPegs.forEach((peg) => {
		peg.addEventListener("click", colorSwitch);
		peg.style.cursor = "pointer";
	});
}

function colorSwitch(e) {
	let peg = e.target;
	peg.style.backgroundColor = COLORS[colorIndex];
	colorIndex++;
	if (colorIndex >= 6) colorIndex = 0;
}

function checkButtonActivation() {
	CHECK_BUTTON.addEventListener("click", checking);
}

function checking() {
	computerCopy = computerOriginal.slice();
	playerPatternFilling();
	if (
		playerPattern.some((elem) => {
			return elem == "";
		})
	) {
		MODAL.style.display = "flex";
		MODAL_CONTENT.children[0].innerText = "WARNING";
		MODAL_CONTENT.children[1].innerText =
			"You must select a color for each peg.";
			MODAL_CONTENT.children[3].style.display = "none";
		modalClosing();
	} else {
		redPointsNb = redPointsCounting(playerPattern, computerCopy);
		whitePointsNb = whitePointsCounting(playerPattern, computerCopy);
		redPointsShowing();
		whitePointsShowing();
		console.log(redPointsNb);
		console.log(whitePointsNb);
		if (redPointsNb >= 4) {
			rowDesactivation();
			refreshButtonDesactivation();
			checkButtonDesactivation();
			MODAL.style.display = "flex";
			MODAL_CONTENT.children[0].innerText = "YOU WON";
			modalContentFilling();
			modalClosing();
		} else {
			nextRow();
		}
	}
}

function playerPatternFilling() {
	currentRowPegs.forEach((peg, pegIndex) => {
		playerPattern[pegIndex] = peg.style.backgroundColor;
	});
	console.log(playerPattern);
}

function redPointsCounting(array1, array2) {
	let points = 0;
	array1.forEach((peg, pegIndex) => {
		if (array1[pegIndex] === array2[pegIndex]) {
			points++;
			array1[pegIndex] = "tic";
			array2[pegIndex] = "tac";
		}
	});
	return points;
}

function whitePointsCounting(array1, array2) {
	let points = 0;
	array1.forEach((peg) => {
		if (array2.includes(peg)) {
			points++;
			array2[array2.indexOf(peg)] = "toc";
		}
	});
	return points;
}

function redPointsShowing() {
	for (i = 0; i < redPointsNb; i++) {
		const POINT = document.createElement("div");
		POINT.classList.add("red-point");
		RED_SQUARES[rowIndex].appendChild(POINT);
	}
}

function whitePointsShowing() {
	for (i = 0; i < whitePointsNb; i++) {
		const POINT = document.createElement("div");
		POINT.classList.add("white-point");
		WHITE_SQUARES[rowIndex].appendChild(POINT);
	}
}

function refreshButtonDesactivation() {
	REFRESH_BUTTON.removeEventListener("click", rowColorsRemoval);
}

function checkButtonDesactivation() {
	CHECK_BUTTON.removeEventListener("click", checking);
}

function nextRow() {
	rowDesactivation();
	rowIndex++;
	if (rowIndex === 12) {
		refreshButtonDesactivation();
		checkButtonDesactivation();
		MODAL.style.display = "flex";
		MODAL_CONTENT.children[0].innerText = "GAME OVER";
		modalContentFilling();
		modalClosing();
	} else {
		currentRow = COLOR_ROWS[rowIndex];
		currentRowPegs = Array.from(currentRow.children);
		rowActivation();
	}
}

function rowDesactivation() {
	currentRowPegs.forEach((peg) => {
		peg.removeEventListener("click", colorSwitch);
		peg.style.cursor = "default";
	});
}

function refreshButtonActivation() {
	REFRESH_BUTTON.addEventListener("click", rowColorsRemoval);
}

function rowColorsRemoval() {
	currentRowPegs.forEach((peg) => {
		peg.style.backgroundColor = "";
	});
}

function replayButtonActivation(button) {
	button.addEventListener("click", () => {
		COLOR_ROWS.forEach((row) => {
			let rowPegs = Array.from(row.children);
			rowPegs.forEach((peg) => {
				peg.style.backgroundColor = "";
			});
		});
		RED_SQUARES.forEach((square) => {
			square.innerHTML = "";
		});
		WHITE_SQUARES.forEach((square) => {
			square.innerHTML = "";
		});
		rowDesactivation();
		gameInitialization();
		if (MODAL.style.display !== "none") {MODAL.style.display = "none";}
	});
}

function modalContentFilling() {
	MODAL_CONTENT.children[1].innerHTML = `The pattern was: <div class="peg" style="background-color:${computerOriginal[0]}"></div><div class="peg" style="background-color:${computerOriginal[1]}"></div><div class="peg" style="background-color:${computerOriginal[2]}"></div><div class="peg" style="background-color:${computerOriginal[3]}"></div><br>
    Click on replay to try again.`;
	replayButtonActivation(MODAL_CONTENT.children[3]);
}

function modalClosing() {
	MODAL_CONTENT.children[2].addEventListener("click", () => {
		MODAL.style.display = "none";
	});
	window.addEventListener("click", modalClosingThroughWindow);
}

function modalClosingThroughWindow(e) {
	if (e.target == MODAL) {
		MODAL.style.display = "none";
	}
}
