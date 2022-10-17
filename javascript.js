let computerSelection;

let playerSelction = prompt('What do you choose?')

const selection = ["Rock", "Paper", "Scissors"];


function computerChoice () {
    const random = Math.floor(Math.random() * selection.length);
    console.log(selection[random]);
}

computerChoice();