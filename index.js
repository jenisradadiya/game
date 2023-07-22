let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio('./audio/1st.wav');
let audio2 = new Audio('./audio/2nd.wav');
let audio3 = new Audio('./audio/3rd.wav');

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").style.display = "none";
    document.getElementById("gameArea").style.display = "none";
};
const startGame = () => {
        document.getElementById("welcomeScreen").style.display = "none";
        document.getElementById("gameArea").style.display = "block";
    }
    //new game
const startNewGame = () => {
        document.getElementById("newGameButton").style.display = "inline";
        userNumberUpdate.setAttribute("disabled", true);
    }
    //reload
const newGameBegain = () => {
        audio.play();
        window.location.reload();
    }
    //main logic
const compareGuess = () => {

    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess;

    // check the value low or high
    if (userGuess.length < maxGuess) {
        audio.play();
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is High 😮";
            audio.play();
            userNumberUpdate.value = "";
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = "Your guess is Low 😧";
            audio.play();
            userNumberUpdate.value = "";
        } else {
            userGuessUpdate.innerHTML = " It's Correct😎";
            audio2.play();
            userNumberUpdate.value = "";
            startNewGame();
        }
    } else {
        if (userNumber > computerGuess) {
            userGuessUpdate.innerHTML = `You loose! correct number is ${computerGuess}😶`;
            audio3.play();
            userNumberUpdate.value = "";
            startNewGame();
        } else if (userNumber < computerGuess) {
            userGuessUpdate.innerHTML = `You loose! correct number is ${computerGuess}😶`;
            audio3.play();
            userNumberUpdate.value = "";
            startNewGame();
        } else {
            userGuessUpdate.innerHTML = " It's Correct😎";
            audio2.play();
            userNumberUpdate.value = "";
            startNewGame();
        }
    }
    document.getElementById("attempts").innerHTML = userGuess.length;

};
const EasyMode = () => {
    maxGuess = 10;
    audio.play();
    startGame();
}
const HardMode = () => {
    maxGuess = 5;
    audio.play();
    startGame();
}