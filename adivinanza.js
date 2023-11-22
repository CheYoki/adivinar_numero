const generarNumeroAleatorio = () => {
	return Math.floor(Math.random() * 100) + 1;
}

const verificarAdivinanza = (numSecret, numAdiv) => {
	if (numSecret === numAdiv) {
		console.log("¡Felicitaciones!");
	} else if (numAdiv > numSecret) {
		console.log("Demasiado alto.");
	} else {
		console.log("Demasiado corto.")
	}
}

module.exports = {
	generarNumeroAleatorio,
	verificarAdivinanza
};