let piedra = "PIEDRA", papel = "PAPEL", tijera = "TIJERA";

const opciones = [piedra, papel, tijera];


const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

interfazCaptura.question('Selecciona una opción: Piedra, papel o tijera: ', function(userOption){
 
    let computerOption = opciones[Math.floor(Math.random()*opciones.length)];

    userOption = userOption.toUpperCase();

    if (userOption === piedra && computerOption === papel) {
        console.log(`Perdiste: ${userOption} - ${computerOption}`);

    } else if (userOption === papel && computerOption === tijera) {
        console.log(`Perdiste: ${userOption} - ${computerOption}`);

    } else if (userOption === tijera && computerOption === piedra) {
        console.log(`Perdiste: ${userOption} - ${computerOption}`);

    } else if (userOption === piedra && computerOption === tijera) {
        console.log(`Ganaste: ${userOption} - ${computerOption}`);

    } else if (userOption === papel && computerOption === piedra) {
        console.log(`Ganaste: ${userOption} - ${computerOption}`);

    } else if (userOption === tijera && computerOption === papel) {
        console.log(`Ganaste: ${userOption} - ${computerOption}`);

    } else if (userOption === computerOption) {
        console.log(`Es un empate: ${userOption} - ${computerOption}`)

    } else {
        console.log("Error: Por favor ingresa un valor correcto.")
    }

    interfazCaptura.close();
});