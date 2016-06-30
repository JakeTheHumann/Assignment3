// Assignment 3, Part 2
/*
// The Rock, Paper, Scissors Game
function chooseWisley() {
    var usersChoice = window.prompt('Let\'s play the game! Please enter rock, paper or scissors below:', 'rock');
    if (usersChoice !== 'rock' && usersChoice !== 'paper' && usersChoice !== 'scissors') {
        window.alert('Please enter valid input: "rock", "paper" or "scissors".');
    } else {
        return usersChoice;
    }
}
var usersChoice = chooseWisley();
while (usersChoice === undefined) {
    usersChoice = chooseWisley();
}
window.console.log('usersChoice ' + usersChoice);
var computersChoice = Math.floor(Math.random() * 3);
if (computersChoice === 0) {
    computersChoice = 'rock';
} else if (computersChoice === 1) {
    computersChoice = 'paper';
} else if (computersChoice === 2) {
    computersChoice = 'scissors';
} else {
    window.console.log('Randomizer error');
}
window.console.log('computersChoice ' + computersChoice);

if (computersChoice === usersChoice) {
    window.alert('Your choice: ' + usersChoice + '\n' + 'Computer\'s choice: ' + computersChoice + '\n' + 'It\'s a tie! Reload this page to try again.');
} else if ((usersChoice === 'rock' && computersChoice === 'scissors') || (usersChoice === 'scissors' && computersChoice === 'paper') || (usersChoice === 'paper' && computersChoice === 'rock')) {
    window.alert('Your choice: ' + usersChoice + '\n' + 'Computer\'s choice: ' + computersChoice + '\n' + 'You Win! Congratulations! Reload this page to play again.');
} else if ((computersChoice === 'rock' && usersChoice === 'scissors') || (computersChoice === 'scissors' && usersChoice === 'paper') || (computersChoice === 'paper' && usersChoice === 'rock')) {
    window.alert('Your choice: ' + usersChoice + '\n' + 'Computer\'s choice: ' + computersChoice + '\n' + 'You Lose! What an idiot! Reload this page to try again.');
}
*/

//The Basic Calculator



























