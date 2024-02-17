let char = 'a';
let ascii = char.charCodeAt(0);
let letters = [];
for (let i=0;i<26;i++){
    letters.push(String.fromCharCode(ascii));
    ascii++;
}

function hideElementById(elementId){
    document.getElementById(elementId).classList.add("hidden");
}

function showElementById(elementId){
    document.getElementById(elementId).classList.remove("hidden");
}

function generateRandonChar(){
    let index = Math.round(Math.random()*25);
    return letters[index];
}
function setCharToScreen(char){
    let field = document.getElementById('disp-char');
    field.innerText = char;
}
function getUserInput(){
    document.addEventListener('keyup', function (event){
        let key = event.key;
        console.log(key);
        return key;
    })
}
function setValueById(id, value){
    document.getElementById(id).innerText = value;
}
function getValueById(id){
    return document.getElementById(id).innerText;
}

function setBgbyId(id){
    document.getElementById(id).classList.add('bg-green-400');
}
function removeBgById(id){
    document.getElementById(id).classList.remove('bg-green-400');
}