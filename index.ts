const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

type GameOptions = "ROCK" | "PAPER" | "SCISSORS";

const rock: GameOptions = "ROCK"
const paper: GameOptions = "PAPER"
const scissors: GameOptions = "SCISSORS";

const options: GameOptions[] = [rock, paper, scissors];

interfazCaptura.question('Choose an option: rock, paper or scissors: ', function(userOption: string): void {
 
    let computerOption: GameOptions = options[Math.floor(Math.random()*options.length)];

    userOption = userOption.toUpperCase();

    if (userOption === rock && computerOption === paper) console.log(`You lose: ${userOption} - ${computerOption}`);
    else if (userOption === paper && computerOption === scissors) console.log(`You lose: ${userOption} - ${computerOption}`);
    else if (userOption === scissors && computerOption === rock) console.log(`You lose: ${userOption} - ${computerOption}`);
    else if (userOption === rock && computerOption === scissors) console.log(`You win: ${userOption} - ${computerOption}`);
    else if (userOption === paper && computerOption === rock) console.log(`You win: ${userOption} - ${computerOption}`);
    else if (userOption === scissors && computerOption === paper) console.log(`You win: ${userOption} - ${computerOption}`);
    else if (userOption === computerOption) console.log(`It is a tie: ${userOption} - ${computerOption}`)
    else console.log("Error: Please, you enter a valid value: Rock, paper or scissors.")
    

    interfazCaptura.close();
});