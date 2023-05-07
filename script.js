let mouths = [ '👄', '👅', '👃', '🐽', '💋', '🕳️', '👁️', '🌶️', '🧄', '🥖', '🧀', '🌭', '🥟', '🌀', '💧', '🐸', '📍', '🛡️', '✔️', '➰', '➿', '〰️', '💠' ]; 

const mouth = document.getElementById('mouth');
const button = document.getElementById('spin');

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

function animateMouths(repeat) {
	mouth.innerText = mouths[repeat];
	repeat--;

	if (repeat > 0) {
		setTimeout( () => {
			animateMouths(repeat);
		}, 100);
	}
}

function shuffleMouths(repeat) {

	shuffleArray(mouths);
	animateMouths(repeat);
}

button.addEventListener('click', () => {
	shuffleMouths(5);
});