function start() {
    hideElementById("home");
    hideElementById('result');
    showElementById('playground');
    setValueById('life', 5);
    setValueById('score', 0);
    play();
};

function calculation(event) {
    let char = getValueById('disp-char');
    char = char.toLowerCase();
    let userInput = event.key.toLowerCase();
    let life = parseInt(getValueById('life'));
    let score = getValueById('score');
    console.log(typeof (life), life);


    if (char === userInput) {
        score++;
        removeBgById(char);
        play();
    }
    else {
        life--;
        document.addEventListener('keyup', calculation);
    }
    setValueById('life', life);
    setValueById('score', score);
    if (life === 0) {
        removeBgById(char);
        gameOver(score);
    }


}

document.addEventListener('keyup', calculation)

function play() {
    let char = generateRandonChar();
    setCharToScreen(char);
    setBgbyId(char);
}

function gameOver(score) {
    hideElementById('playground');
    showElementById('result');
    setValueById('final-score', score);

}