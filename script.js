// script.js
import { teluguWords, keyValuePairs } from "./data.js";

const container = document.querySelector(".container"),
  playground = document.querySelector(".playground"),
  startGame = document.querySelector(".startGame"),
  selectedWords = document.querySelector(".selectedWords"),
  messageElement = document.querySelector(".message"),
  keyboard = document.querySelector("#keyboard"),
  categoriesDiv = document.querySelector(".categories"),
  categoryButtons = document.querySelectorAll(".category"),
  categoryTitle = document.querySelector(".categoryTitle");
const continueGame = document.querySelector(".continueGame");
const endGame = document.querySelector(".endGame"),
  scoreElement = document.querySelector(".score"); // New score element

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

let currentCategory = "";
let randomWord = "";
let selectedKeyValuePairs = {};
let syllables = [];
let availableWordKeys = [];
let incorrectAttempts = 0; // Track wrong guesses
let score = 0;

// Ensure categories and buttons are hidden initially
categoriesDiv.style.display = "none";
continueGame.style.display = "none";
endGame.style.display = "none";

startGame.addEventListener("click", () => {
  startGame.style.display = "none";
  categoriesDiv.style.display = "flex"; // Show categories in a horizontal layout
});

// Handle category selection
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

    // ✅ Enable the keyboard when category is selected
    enableKeyboard();
    // ✅ Show 'End Game' button when category is selected
    endGame.style.display = "inline-block";
  });
});

// 'Continue' Button Click: Show categories & disable keyboard
continueGame.addEventListener("click", () => {
  selectedWords.innerHTML = ""; // ✅ Clear previous boxes
  categoriesDiv.style.display = "flex"; // Show categories
  continueGame.style.display = "none"; // Hide 'Continue' button
  messageElement.textContent = ""; //Clear the message
  disableKeyboard(); // Disable keys until a category is selected
});

// 'End Game' Button Click: Show confirmation before closing
endGame.addEventListener("click", () => {
  const confirmClose = confirm("Are you sure you want to close the game?");
  if (confirmClose) {
    window.close(); // Attempt to close the window
  }
  //to handle in chrome
  setTimeout(() => {
    window.location.href = "thank-you.html"; // Redirect as a fallback
  }, 500);
});

function startTheGame() {
  if (!teluguWords[currentCategory]) {
    console.error(`Error: Category "${currentCategory}" not found.`);
    return;
  }

  playground.style.display = "block";
  categoriesDiv.style.display = "none";

  messageElement.textContent = "";
  // If score is 0 (new game) then reset it to 1000.
  if (score === 0) {
    score = 1000;
  }
  updateScoreDisplay();

  availableWordKeys = Object.keys(teluguWords[currentCategory]);
  startToGuessTheWord();
  resetKeyboard();
}

let completedCategories = new Set(); // Track completed categories
let usedWords = {}; // Track used words for each category

function startToGuessTheWord() {
  selectedWords.innerHTML = "";
  messageElement.textContent = "";
  incorrectAttempts = 0; // Reset attempts for each new word

  // Initialize used words for the category if not already tracked
  if (!usedWords[currentCategory]) {
    usedWords[currentCategory] = new Set();
  }

  // Get available words in the current category
  let wordKeys = Object.keys(teluguWords[currentCategory]);
  let remainingWords = wordKeys.filter(
    (word) => !usedWords[currentCategory].has(word),
  );

  // If no words are left in this category, disable the category
  if (remainingWords.length === 0) {
    completedCategories.add(currentCategory); // Mark category as completed

    messageElement.textContent =
      "✅ ఈ వర్గంలోని అన్ని పదాలు పూర్తయ్యాయి! ఇతర వర్గాలను ఆడండి లేదా ఆట ముగించండి.";

    // Disable the completed category in the UI
    document.querySelectorAll(".category").forEach((category) => {
      if (category.textContent.trim() === currentCategory) {
        category.style.opacity = "0.5";
        category.style.pointerEvents = "none";
      }
    });

    // Check if there are still playable categories
    let remainingCategories =
      Object.keys(teluguWords).length - completedCategories.size;

    if (remainingCategories > 0) {
      continueGame.style.display = "inline-block"; // Show Continue button
    } else {
      messageElement.textContent =
        "🎉 మీరు అన్ని వర్గాలు పూర్తి చేసారు! ఆట ముగించండి లేదా కొత్త గేమ్ ఆడండి.";
      document.querySelector(".categories").style.display = "none"; // Hide categories
      continueGame.style.display = "none"; // Hide continue button
      endGame.style.display = "inline-block"; // Show end game button
    }

    return; // Stop function execution
  }

  // Select a random word that hasn't been used
  const randomIndex = Math.floor(Math.random() * remainingWords.length);
  const randomWordKey = remainingWords[randomIndex];
  usedWords[currentCategory].add(randomWordKey); // Mark word as used

  randomWord = teluguWords[currentCategory][randomWordKey];
  selectedKeyValuePairs = keyValuePairs[currentCategory][randomWordKey];

  // Flatten the values: if a value is an array, push each element individually
  let flattened = [];
  Object.values(selectedKeyValuePairs).forEach((val) => {
    if (Array.isArray(val)) {
      flattened.push(...val);
    } else {
      flattened.push(val);
    }
  });

  // Sort the flattened array based on the order in the randomWord
  syllables = flattened.sort((a, b) => {
    return randomWord.indexOf(a) - randomWord.indexOf(b);
  });

  // Create one box per syllable
  syllables.forEach(() => {
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = "";
    selectedWords.appendChild(div);
  });
}

function createKeyboard() {
  keyboard.innerHTML = "";
  teluguLetters.forEach((letter) => {
    const key = document.createElement("button");
    key.className = "key disabled"; // 🔹 Initially disable keys
    key.innerText = letter;
    key.style.backgroundColor = "orange";
    key.disabled = true; // Set the disabled attribute
    keyboard.appendChild(key);
    key.addEventListener("click", handleKeyPress);
  });
}

function handleKeyPress(event) {
  const key = event.target;
  const boxes = document.querySelectorAll(".selectedWords .box");
  const letter = key.textContent.trim();

  // Disable the key for both correct and wrong guesses
  //  key.disabled = true;
  // Change key color on click (do not disable if it's an array with remaining items)
  key.style.backgroundColor = "orange";

  let value;
  if (selectedKeyValuePairs.hasOwnProperty(letter)) {
    messageElement.textContent = "";
    let correct = false;

    // If the mapped value is an array, use the first element and remove it; only disable if empty
    if (Array.isArray(selectedKeyValuePairs[letter])) {
      if (selectedKeyValuePairs[letter].length > 0) {
        value = selectedKeyValuePairs[letter].shift();
        if (selectedKeyValuePairs[letter].length === 0) {
          key.disabled = true;
          key.style.backgroundColor = "gray";
        }
      } else {
        value = null;
      }
    } else {
      // For single values, get the value and disable the key immediately
      value = selectedKeyValuePairs[letter];
      key.disabled = true;
      key.style.backgroundColor = "gray";
    }

    // Loop through boxes to fill the first empty one that matches the expected syllable
    for (let i = 0; i < syllables.length; i++) {
      if (boxes[i].textContent === "" && syllables[i] === value) {
        boxes[i].textContent = value;
        boxes[i].classList.add("bounce");
        setTimeout(() => boxes[i].classList.remove("bounce"), 1000);
        correct = true;
        incorrectAttempts = 0; // Reset incorrect attempts after a correct guess
        break;
      }
    }

    if (correct) {
      if (isAllFilled(boxes)) {
        messageElement.textContent =
          "🎉 అభినందనలు! మీరు పదాన్ని పూర్తి చేశారు!";
        continueGame.style.display = "inline-block";
        endGame.style.display = "inline-block";
        updateScoreDisplay();
        // Disable all keys after completing the word
        document.querySelectorAll(".key").forEach((key) => {
          key.disabled = true;
          key.style.backgroundColor = "gray";
        });
      }
    }
  } else {
    // Incorrect selection
    incorrectAttempts++;
    messageElement.textContent = `❌ తప్పు! మరోసారి ప్రయత్నించండి. (${incorrectAttempts}/4)`;
    // Disable the incorrect key immediately
    key.disabled = true;
    key.style.backgroundColor = "gray";

    if (incorrectAttempts === 4) {
      revealALetter(boxes);
      messageElement.textContent = "";
      incorrectAttempts = 0;
      if (isAllFilled(boxes)) {
        setTimeout(() => {
          messageElement.textContent =
            "👏 You made a good attempt! Keep trying to improve your skills!";
          continueGame.style.display = "inline-block";
          endGame.style.display = "inline-block";
          updateScoreDisplay();
        }, 500);
      }
    }
  }
}

function revealALetter(boxes) {
  let lastRevealed = false;

  for (let i = 0; i < syllables.length; i++) {
    if (boxes[i].textContent === "") {
      boxes[i].textContent = syllables[i]; // Reveal the correct letter
      boxes[i].classList.add("hint"); // Add a visual effect
      score -= 50; // Deduct 50 points for revealing a letter
      updateScoreDisplay(); // Update the score display
      incorrectAttempts = 0; // ✅ Reset incorrect attempts after revealing a letter
      lastRevealed = isAllFilled(boxes); // ✅ Check if this was the last missing letter
      break; // Reveal only one letter
    }
  }

  // ✅ If the last letter was revealed, display the message and buttons
  if (lastRevealed) {
    setTimeout(() => {
      messageElement.textContent =
        "👏 You made a good attempt! Keep trying to improve your skills!";
      continueGame.style.display = "inline-block";
      endGame.style.display = "inline-block";
      // messageElement.textContent += ` Score: ${score}`;
    }, 500); // Short delay for better UX
  }
}

function isAllFilled(boxes) {
  return Array.from(boxes).every((box) => box.textContent.trim() !== "");
}

function updateScoreDisplay() {
  scoreElement.innerText = `Score: ${score}`;
}

function resetKeyboard() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) => {
    key.disabled = false;
    key.style.backgroundColor = "orange"; // Reset to default color
  });
}

// Function to disable keyboard until category is selected
function disableKeyboard() {
  document.querySelectorAll(".key").forEach((key) => {
    key.classList.add("disabled");
    key.disabled = true;
    key.style.backgroundColor = "gray";
  });
}

// Function to enable keyboard after category selection
function enableKeyboard() {
  document.querySelectorAll(".key").forEach((key) => {
    key.classList.remove("disabled");
    key.disabled = false;
    key.style.backgroundColor = "orange";
  });
}

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
  if (
    event.ctrlKey &&
    (event.key === "u" ||
      event.key === "s" ||
      event.key === "i" ||
      event.key === "j")
  ) {
    event.preventDefault();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  createKeyboard();
});
