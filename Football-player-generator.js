//Genertate random number
const randomNumberGenerator = (number) => {
    let randomNumber = Math.floor(Math.random() * number);
    return randomNumber;
};

//The Programmes Message
const completePlayer = {
    postion: ['GK', 'LB', 'RB', 'CB', 'LM', 'RM', 'CM', 'LW', 'RW', 'ST'],
    strength: ['Weak foot', 'Leadership', 'Passing', 'Speed', 'Finishing', 'Heading', 'Dribbling'],
    motivationalWords: ['Keep going', 'Don\'t give up', 'One moment can change the game', 'Work harder than everyone else'],
};

let yourPlayer = [];
for (let attributes in completePlayer) {
    let randomIndex = randomNumberGenerator(completePlayer[attributes].length);
    switch(attributes) {
        case 'postion': 
        yourPlayer.push(`You will play ${completePlayer[attributes][randomIndex]}.`)
        break
        case 'strength': 
        yourPlayer.push(`Your strength is your ${completePlayer[attributes][randomIndex]}.`)
        break
        case 'motivationalWords': 
        yourPlayer.push(`${completePlayer[attributes][randomIndex]}!`)
        break
        default:
            yourPlayer.push('Not enough infomation')
    }
}

function createPlayer(player) {
    const playerMessage = player.join('\n')
    console.log(playerMessage)
} ;

createPlayer(yourPlayer);