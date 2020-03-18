const { Scanner } = require("./lib/scanner");

log = {
	debug: function(msg) {
		// console.log(msg);
	},
	warn: function(msg) {
		// console.log(msg);
	},
	error: function(msg) {
		// console.log(msg);
	},
	info: function(msg) {
		// console.log(msg);
	},
	log: function(msg) {
		console.log(msg);
	},
}

function setupScanner() {
	const scanner = new Scanner("e7:2e:00:31:c4:af", {
		log: log,
		restartDelay: 10000
	});

	scanner.on("temperatureChange", (temperature, peripheral) => {
		const { address, id } = peripheral;
		this.log.log(`[${address || id}] Temperature: ${temperature}C`);
	});

	scanner.on("humidityChange", (humidity, peripheral) => {
		const { address, id } = peripheral;
		this.log.log(`[${address || id}] Humidity: ${humidity}%`);
	});

	scanner.on("batteryChange", (batteryLevel, peripheral) => {
		const { address, id } = peripheral;
		this.log.log(`[${address || id}] Battery level: ${batteryLevel}%`);
	});

	scanner.on("error", error => {
		this.log.error(error);
	});

	return scanner;
}

setupScanner();