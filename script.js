// script.js
import { teluguWord, keyValuePairs } from './data.js';

const teluguLetters = [
    "అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ఎ", "ఏ", "ఐ",
    "ఒ", "ఓ", "ఔ", "క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ",
    "జ", "ఝ", "ఞ", "ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ",
    "ద", "ధ", "న", "ప", "ఫ", "బ", "భ", "మ", "య", "ర",
    "ల", "వ", "శ", "ష", "స", "హ", "ళ", "క్ష", "ఱ"
];


const container = document.querySelector(".container"),
    playground = document.querySelector(".playground"),
    startGame = document.querySelector(".startGame"),
    selectedWords = document.querySelector(".selectedWords"),
    resetGame = document.querySelector(".resetGame"),
    messageElement = document.querySelector(".message"),
    keyboard = document.querySelector("#keyboard");

let randomWord = '';
let selectedKeyValuePairs = {};
let syllables = [];
let availableWordKeys = Object.keys(teluguWord); // 🆕 Word tracking

startGame.addEventListener("click", () => {
    if (startGame.innerText === "Start Game") {
        startTheGame();
    } else {
        playground.style.display = "none";
        startGame.innerText = "Start Game";
        resetGame.style.display = "none";
        resetKeyboard(); // 🆕 Re-enable keyboard letters when going back home
    }
});

resetGame.addEventListener("click", () => {
    startTheGame();
});

function startTheGame() {
    playground.style.display = "block";
    startGame.innerText = "Back to Home";
    resetGame.style.display = "inline";
    resetGame.disabled = true;
    messageElement.textContent = "";
    startToGuessTheWord();
    resetKeyboard();
}

function startToGuessTheWord() {
    selectedWords.innerHTML = "";
    messageElement.textContent = "";

    if (availableWordKeys.length === 0) {
        availableWordKeys = Object.keys(teluguWord); // 🔁 Reset after all words used
    }

    const randomIndex = Math.floor(Math.random() * availableWordKeys.length);
    const randomWordKey = availableWordKeys.splice(randomIndex, 1)[0]; // 🎯 No repeats
    randomWord = teluguWord[randomWordKey];
    console.log(randomWord);

    selectedKeyValuePairs = keyValuePairs[randomWordKey];
    syllables = Object.values(selectedKeyValuePairs);

    syllables.forEach(() => {
        let div = document.createElement("div");
        div.classList.add("box");
        div.innerHTML = "";
        selectedWords.appendChild(div);
    });
}

function createKeyboard() {
    keyboard.innerHTML = "";
    teluguLetters.forEach(letter => {
        const key = document.createElement("button");
        key.className = "key";
        key.innerText = letter;
        key.style.backgroundColor = "#90caf9"; 
        keyboard.appendChild(key);
        key.addEventListener("click", handleKeyPress);
    });
}

function handleKeyPress(event) {
    const key = event.target;
    const boxes = document.querySelectorAll(".selectedWords .box");
    const letter = key.textContent.trim();

    key.disabled = true;
    key.style.backgroundColor = "#b0bec5";

    if (selectedKeyValuePairs[letter]) {
        messageElement.textContent = "";
        const values = selectedKeyValuePairs[letter];
        let filled = false;
        for (let i = 0; i < syllables.length; i++) {
            if (syllables[i] === values && boxes[i].textContent === "") {
                boxes[i].textContent = values;
                boxes[i].classList.add("bounce");
                setTimeout(() => boxes[i].classList.remove("bounce"), 1000);
                filled = true;
                break;
            }
        }
        if (filled && isAllFilled(boxes)) {
            resetGame.disabled = false;
            messageElement.textContent = "🎉 Congratulations! Word Completed!";
        }
    } else {
        messageElement.textContent = "Incorrect selection! Try Again!";
    }
}

function isAllFilled(boxes) {
    return Array.from(boxes).every(box => box.textContent.trim() !== "");
}

function resetKeyboard() {
    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
        key.disabled = false;
        key.style.backgroundColor = "#90caf9";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createKeyboard();
});
