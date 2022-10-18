const selection = ["rock", "paper", "scissors"];

let playerScore = 0;

let computerScore = 0;

function computerChoice () {
    const random = Math.floor(Math.random() * selection.length);
    return (selection[random]);
}

function playRound(player, computer) {
    if(player == computer){
        console.log(`Computer also chose ${computer}`);
        console.log ('It is a tie!');
    }

    else if(player == 'rock' && computer == 'paper'){
        console.log(`Computer chose ${computer}`);
        console.log('Computer wins');
        computerScore++;
    }

    else if(player == 'paper' && computer == 'scissors'){
        console.log(`Computer chose ${computer}`);
        console.log('Computer wins');
        computerScore++;
    }
    
    else if(player == 'scissors' && computer == 'rock'){
        console.log(`Computer chose ${computer}`);
        console.log('Computer wins');
        computerScore++;
    }
    
    else if(computer == 'scissors' && player == 'rock'){
        console.log(`Computer chose ${computer}`);
        console.log('Player wins');
        playerScore++;
    }
    else if(computer == 'paper' && player == 'scissors'){
        console.log(`Computer chose ${computer}`);
        console.log('player wins');
        playerScore++;
    } 
    else if(computer == 'paper' && player == 'scissors'){
        console.log(`Computer chose ${computer}`);
        console.log('player wins');
        playerScore++;
        }

 }


function game () { 


    for (let i = 0; i < 5; i++) {
    let computerSelection = computerChoice();
    let playerSelction = prompt('What do you choose?').toLowerCase();
    playRound(playerSelction, computerSelection);
    }

    if(playerScore > computerScore){
        console.log("player wins!")
    }
    
    else if(computerScore > playerScore){
        console.log("Computer wins!")
    }

    else {
        console.log("It's a tie!")
    }
}

game ();