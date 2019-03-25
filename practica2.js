const Programador = require('./programador');
const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
// Creamor un programador
const prog = new Programador([{hora: "21:04",temperatura: 22},{hora: "21:05",temperatura: 18},{hora: "18:00",temperatura: 22},{hora: "23:00",temperatura: 20}]);


// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);

// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());
// Configuramos el termostato con el nuevo evento
termostato.on('ideal', () => termostato.indicarTemperaturaIdeal());


// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));

// Configurar la temp ideal a 20 grados:
termostato.indicarTemperaturaIdeal(20);

// Encender el termostato:
termostato.encender();

