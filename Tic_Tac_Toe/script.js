const CELLS = document.querySelectorAll(".cell");
const RESULT = document.querySelector(".result");
const REPLAY = document.querySelector("svg");

clickableCells();

function clickableCells() {
	CELLS.forEach((cell) => {
		cell.addEventListener("click", play);
	});
}

function unclickableCells() {
	CELLS.forEach((cell) => {
		cell.removeEventListener("click", play);
	});
}

function winnerCheck(letter) {
	if (
		(CELLS[0].innerText == CELLS[1].innerText &&
			CELLS[1].innerText == CELLS[2].innerText &&
			CELLS[0].innerText == letter) ||
		(CELLS[3].innerText == CELLS[4].innerText &&
			CELLS[4].innerText == CELLS[5].innerText &&
			CELLS[3].innerText == letter) ||
		(CELLS[6].innerText == CELLS[7].innerText &&
			CELLS[7].innerText == CELLS[8].innerText &&
			CELLS[6].innerText == letter) ||
		(CELLS[0].innerText == CELLS[3].innerText &&
			CELLS[3].innerText == CELLS[6].innerText &&
			CELLS[0].innerText == letter) ||
		(CELLS[1].innerText == CELLS[4].innerText &&
			CELLS[4].innerText == CELLS[7].innerText &&
			CELLS[1].innerText == letter) ||
		(CELLS[2].innerText == CELLS[5].innerText &&
			CELLS[5].innerText == CELLS[8].innerText &&
			CELLS[2].innerText == letter) ||
		(CELLS[0].innerText == CELLS[4].innerText &&
			CELLS[4].innerText == CELLS[8].innerText &&
			CELLS[0].innerText == letter) ||
		(CELLS[2].innerText == CELLS[4].innerText &&
			CELLS[4].innerText == CELLS[6].innerText &&
			CELLS[2].innerText == letter)
	) {
		RESULT.innerText = letter + " a gagné";
		unclickableCells();
	} 
}

function play(e) {
	unclickableCells();
	const PLAYERCHOICE = e.target;
	if (PLAYERCHOICE.innerText == "") {
		// If the cell is empty
		PLAYERCHOICE.innerText = "X";
		winnerCheck("X");
		// If no one has won so far
		if (RESULT.innerText == "") {
			// Loop until an empty cell is found
			for (let i = 0; i < 100; i++) {
				let randomCellIndex = Math.floor(Math.random() * 9);
				if (CELLS[randomCellIndex].innerText == "") {
					setTimeout(() => {
						CELLS[randomCellIndex].innerText = "O";
						clickableCells();
						winnerCheck("O");
					}, 1000);
					// Exit the loop once an empty cell is found
					break; // break is inside the if condition
				}
			}
		}
	} else {
		clickableCells();
	}
}

REPLAY.addEventListener("click", () => {
	RESULT.innerText = "";
	CELLS.forEach((cell) => {
		cell.innerHTML = "";
	});
	clickableCells();
});

// Version sans loop de comment mettre un O dans une random cell vide:

// let randomCellIndex = Math.floor(Math.random() * 9); // on met un O random
// console.log(randomCellIndex);
// console.log(CELLS);
// if (CELLS[randomCellIndex].innerText == "") {
// 	setTimeout(() => {
// 		CELLS[randomCellIndex].innerText = "O";
// 		winnerCheck();
// 	}, 1000);
// } else {
// 	let randomCellIndex2 = Math.floor(Math.random() * 9);
// 	if (CELLS[randomCellIndex2].innerText == "") {
// 		setTimeout(() => {
// 			CELLS[randomCellIndex2].innerText = "O";
// 			winnerCheck();
// 		}, 1000);
// 	} else {
// 		let randomCellIndex3 = Math.floor(Math.random() * 9);
// 		if (CELLS[randomCellIndex3].innerText == "") {
// 			setTimeout(() => {
// 				CELLS[randomCellIndex3].innerText = "O";
// 				winnerCheck();
// 			}, 1000);
// 		} else {
// 			let randomCellIndex4 = Math.floor(Math.random() * 9);
// 			if (CELLS[randomCellIndex4].innerText == "") {
// 				setTimeout(() => {
// 					CELLS[randomCellIndex4].innerText = "O";
// 					winnerCheck();
// 				}, 1000);
// 			} else {
// 				let randomCellIndex5 = Math.floor(Math.random() * 9);
// 				if (CELLS[randomCellIndex5].innerText == "") {
// 					setTimeout(() => {
// 						CELLS[randomCellIndex5].innerText = "O";
// 						winnerCheck();
// 					}, 1000);
// 				} else {
// 					console.log("merde");
// 				}
// 			}
// 		}
// 	}
// }
