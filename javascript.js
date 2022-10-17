
const selection = ["rock", "paper", "scissors"];

function computerChoice () {
    const random = Math.floor(Math.random() * selection.length);
    return (selection[random]);
}

let computerSelection = computerChoice();

let playerSelction = prompt('What do you choose?').toLowerCase();

function playRound(player, computer) {


    if(player == computer){
        console.log(computer);
        console.log ('It is a tie!');
    }

    else if(player == 'rock' && computer == 'paper'){
        console.log(`Computer chose ${computer}`);
        console.log('Computer wins');
    }

    else if(player == 'paper' && computer == 'scissors'){
        console.log(`Computer chose ${computer}`);
        console.log('Computer wins');
        
    }
    
    else if(player == 'scissors' && computer == 'rock'){
        console.log(`Computer chose ${computer}`);
        console.log('Computer wins');
        
    }
    
    else if(computer == 'scissors' && player == 'rock'){
        console.log(`Computer chose ${computer}`);
        console.log('Player wins');
            
    }
    else if(computer == 'paper' && player == 'scissors'){
        console.log(`Computer chose ${computer}`);
        console.log('player wins');
            
    } 
    else if(computer == 'paper' && player == 'scissors'){
        console.log(`Computer chose ${computer}`);
        console.log('player wins');
            
        }

 }

playRound(playerSelction, computerSelection);