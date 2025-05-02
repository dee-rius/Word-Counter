const wordToCountUserInput = document.getElementById("word-to-count-input");
let wordToCount = "";

const countButton = document.getElementById("count-button");
countButton.addEventListener('click', countInstancesOfWord);

const userTextInput = document.getElementById("text-input");
userTextInput.addEventListener("change", count)

const outputTexts = Array.from(document.getElementsByClassName("output-text"));

let splitByWords = [];
let numOfWords = 0;

let splitByCharacters = [];
let numofCharacters = 0;
let instancesOfChosenWord = 0;

let storedInputDetails = {
    storedWordToCountInput: "",
    storedTextInput: "",

    storedNumOfWords: "...",
    storedNumOfCharacters: "...",
    storedInstancesOfChosenWord: "..."
}

function countInstancesOfWord(){
    splitByWords = userTextInput.value.split(" ");
    wordToCount = wordToCountUserInput.value;
    instancesOfChosenWord = 0;

    for(let word of splitByWords){
        if(word.toLowerCase() == wordToCount.toLowerCase()){
            instancesOfChosenWord ++;
        }
    }

    for(let outputText of outputTexts){
        if(outputText.id == "instances-of-chosen-word"){
            outputText.textContent = instancesOfChosenWord;
        }
    }
}

function count(){
    numOfWords = 0;
    numofCharacters = 0;

    splitByWords = userTextInput.value.split(" ");
    splitByCharacters = userTextInput.value.split("");

    for(let word of splitByWords){
        numOfWords ++;
    }

    for(let character of splitByCharacters){
        numofCharacters ++;
    }

    for(let outputText of outputTexts){
        if(outputText.id == "number-of-words")
        {
            outputText.textContent = numOfWords;
        }
        else if(outputText.id == "number-of-characters"){
            outputText.textContent = numofCharacters;
        }
    }
}

function storeDetails(){

}

