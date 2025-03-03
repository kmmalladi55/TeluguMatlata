// script.js
import { teluguWords, keyValuePairs } from "./data.js";


const container = document.querySelector(".container"),
  playground = document.querySelector(".playground"),
  startGame = document.querySelector(".startGame"),
  selectedWords = document.querySelector(".selectedWords"),
  resetGame = document.querySelector(".resetGame"),
  messageElement = document.querySelector(".message"),
  keyboard = document.querySelector("#keyboard"),
  categoriesDiv = document.querySelector(".categories"),
  categoryButtons = document.querySelectorAll(".category"),
  categoryTitle = document.querySelector(".categoryTitle");

const teluguLetters = [
  "అ",
  "ఆ",
  "ఇ",
  "ఈ",
  "ఉ",
  "ఊ",
  "ఋ",
  "ఎ",
  "ఏ",
  "ఐ",
  "ఒ",
  "ఓ",
  "ఔ",
  "క",
  "ఖ",
  "గ",
  "ఘ",
  "జ",
  "చ",
  "ఛ",
  "జ",
  "ఝ",
  "ఞ",
  "ట",
  "ఠ",
  "డ",
  "ఢ",
  "ణ",
  "త",
  "థ",
  "ద",
  "ధ",
  "న",
  "ప",
  "ఫ",
  "బ",
  "భ",
  "మ",
  "య",
  "ర",
  "ల",
  "వ",
  "శ",
  "ష",
  "స",
  "హ",
  "ళ",
  "క్ష",
  "ఱ",
];

// const categoryImages = {
//   ప్రదేశాలు: "world-map.jpg", // Replace with actual image URL or file path
//   సినిమాలు: "movie-theme.jpg",
//   సాహిత్యం: "books.jpg",
//   వస్తువులు: "objects.jpg",
// };

let currentCategory = "";
let randomWord = "";
let selectedKeyValuePairs = {};
let syllables = [];
let availableWordKeys = [];
let incorrectAttempts = 0; // Track wrong guesses

// Ensure categories are hidden initially
categoriesDiv.style.display = "none";

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  categoriesDiv.style.display = "flex"; // Show categories in a horizontal layout
});

// Update category buttons with images
categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    currentCategory = event.target.dataset.category.trim();

    if (!teluguWords[currentCategory]) {
      console.error("Category not found:", currentCategory);
      return;
    }

    categoryTitle.innerText = `వర్గం: ${currentCategory}`;
    categoryTitle.style.display = "block";

    // Hide category selection after one is picked
    categoriesDiv.style.display = "none";

    // Start the game with the selected category
    startTheGame();
  });
});

resetGame.addEventListener("click", () => {
  location.reload();
});

function startTheGame() {
  // console.log("Starting game with category:", currentCategory);
  // console.log("Available categories:", Object.keys(teluguWords));

  if (!teluguWords[currentCategory]) {
    console.error(`Error: Category "${currentCategory}" not found.`);
    return;
  }

  playground.style.display = "block";
  categoriesDiv.style.display = "none";
  resetGame.style.display = "inline";
  resetGame.disabled = true;
  messageElement.textContent = "";

  availableWordKeys = Object.keys(teluguWords[currentCategory]);
  startToGuessTheWord();
  resetKeyboard();
}

function startToGuessTheWord() {
  selectedWords.innerHTML = "";
  messageElement.textContent = "";
  incorrectAttempts = 0; // ✅ Reset attempts for each new word

  if (availableWordKeys.length === 0) {
    availableWordKeys = Object.keys(teluguWords[currentCategory]);
  }

  const randomIndex = Math.floor(Math.random() * availableWordKeys.length);
  const randomWordKey = availableWordKeys.splice(randomIndex, 1)[0];
  randomWord = teluguWords[currentCategory][randomWordKey];

  selectedKeyValuePairs = keyValuePairs[currentCategory][randomWordKey];
  syllables = Object.values(selectedKeyValuePairs);

  syllables.forEach(() => {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = "";
    selectedWords.appendChild(div);
  });

  resetGame.disabled = false;
}

function createKeyboard() {
  keyboard.innerHTML = "";
  teluguLetters.forEach((letter) => {
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
    key.style.backgroundColor = "#b0bec5"; // Gray out the key
  
    if (selectedKeyValuePairs.hasOwnProperty(letter)) {
      messageElement.textContent = "";
      let correct = false;
  
      for (let i = 0; i < syllables.length; i++) {
        if (boxes[i].textContent === "" && syllables[i] === selectedKeyValuePairs[letter]) {
          boxes[i].textContent = selectedKeyValuePairs[letter]; // Fill correct syllable
          boxes[i].classList.add("bounce");
          setTimeout(() => boxes[i].classList.remove("bounce"), 1000);
          correct = true;
          incorrectAttempts = 0; // ✅ Reset incorrect attempts after placing a correct letter
          break;
        }
      }
  
      if (correct && isAllFilled(boxes)) {
        resetGame.disabled = false;
        messageElement.textContent = "🎉 అభినందనలు! మీరు పదాన్ని పూర్తి చేశారు!";
      }
    } else {
      incorrectAttempts++; // Increase incorrect attempts
      messageElement.textContent = `❌ తప్పు! మరోసారి ప్రయత్నించండి. (${incorrectAttempts}/4)`;
  
      // Reveal a letter after 4 incorrect attempts
      if (incorrectAttempts === 4) {
        revealALetter(boxes);
        messageElement.textContent = "";
        incorrectAttempts = 0; // ✅ Reset the counter after revealing a letter
      }
    }
  }
  
  // Function to reveal a letter after 4 incorrect attempts
  function revealALetter(boxes) {
    for (let i = 0; i < syllables.length; i++) {
      if (boxes[i].textContent === "") {
        boxes[i].textContent = syllables[i]; // Reveal the correct letter
        boxes[i].classList.add("hint"); // Add a visual effect
        incorrectAttempts = 0; // ✅ Reset incorrect attempts after revealing a letter
        break; // Reveal only one letter
      }
    }
  }
  

function isAllFilled(boxes) {
  return Array.from(boxes).every((box) => box.textContent.trim() !== "");
}

function resetKeyboard() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.disabled = false;
    key.style.backgroundColor = "#90caf9"; // Reset to default color
  });
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "i" || event.key === "j")) {
    event.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createKeyboard();
});
