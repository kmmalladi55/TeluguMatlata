const scriptURL =
  "https://script.google.com/macros/s/AKfycbxSTwfbYFbAwAg4P-sIMH7pyuPxVfkaRLmbZqmWQcK_tbDwWcZP8wq75rPVUWvr3LT3cg/exec";
const form = document.forms["RegistrationForm"];
const submitButton = document.getElementById("submit");
const skipButton = document.getElementById("skipRegistration");

// ✅ Check if the user is returning to the feedback page
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const score = urlParams.get("score");

  if (score !== null) {
    showFeedbackForm(score);
    checkIfFeedbackAlreadySubmitted(); // 🔹 Check if feedback was already submitted
  }

  // ✅ Hide Skip Button on Feedback Form
  if (document.getElementById("gameFeedbackSection").style.display === "block") {
    if (skipButton) skipButton.style.display = "none"; // Remove skip button if on feedback form
  }
});

// ✅ Restrict Age Input: Only Numbers & Max 99
document.addEventListener("DOMContentLoaded", function () {
  const ageInput = document.querySelector("input[name='Age']");
  ageInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (this.value !== "" && parseInt(this.value) > 99) {
      alert("Age cannot be more than 99 years!");
      this.value = ""; // Clear the invalid input
    }
  });
});

// ✅ Handle Skip Registration Button
if (skipButton) {
  skipButton.addEventListener("click", function () {
    localStorage.setItem("SkippedRegistration", "true"); // Mark registration as skipped
    window.location.href = "game.html"; // Redirect to the game
  });
}

// ✅ Function to Disable Submit Button if User Returns
function checkIfFeedbackAlreadySubmitted() {
  if (localStorage.getItem("FeedbackSubmitted")) {
    submitButton.disabled = true; // ❌ Disable submit button
    submitButton.value = "Feedback Already Submitted"; // Update button text
    submitButton.style.backgroundColor = "#ccc"; // Grey out the button
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const helpButton = document.getElementById("helpButton");
  const helpModal = document.getElementById("helpModal");
  const closeModal = document.querySelector(".modal .close");

  // ✅ Function to Temporarily Remove Required Attributes
  function toggleRequiredFields(remove) {
    document.querySelectorAll("input[required]").forEach((input) => {
      if (remove) {
        input.dataset.required = "true"; // Store original required state
        input.removeAttribute("required");
      } else if (input.dataset.required === "true") {
        input.setAttribute("required", "true"); // Restore required attribute
        delete input.dataset.required;
      }
    });
  }

  // ✅ Open Help Modal
  helpButton.addEventListener("click", function () {
    toggleRequiredFields(true); // Remove required attributes
    helpModal.style.display = "block";
  });

  // ✅ Close Help Modal when clicking the close button
  closeModal.addEventListener("click", function () {
    toggleRequiredFields(false); // Restore required attributes
    helpModal.style.display = "none";
  });

  // ✅ Close Modal if user clicks outside of it
  window.addEventListener("click", function (event) {
    if (event.target === helpModal) {
      toggleRequiredFields(false); // Restore required attributes
      helpModal.style.display = "none";
    }
  });
});




// ✅ Function to Ensure Fresh Start
function redirectToFreshStart() {
  localStorage.clear(); // Clear stored data
  window.location.href = "registration.html"; // Redirect to fresh registration
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  submitButton.disabled = true; // ✅ Prevent multiple submissions
  submitButton.value = "Submitting..."; // ✅ Show progress message

  if (document.getElementById("gameFeedbackSection").style.display === "none") {
    // ✅ User is registering, clear SkippedRegistration (if exists)
    localStorage.removeItem("SkippedRegistration");

    // ✅ Store Registration Details in `localStorage`
    localStorage.setItem("FullName", form.FullName.value);
    localStorage.setItem("Email", form.Email.value);
    localStorage.setItem("Age", form.Age.value);

    // ✅ Start Game Immediately
    window.location.href = "game.html";
  } else {
    // ✅ Send All 6 Fields to Google Sheets (After Feedback Submission)

    // Remove `required` attributes before submitting feedback
    document
      .querySelectorAll(
        "input[name='FullName'], input[name='Email'], input[name='Age']",
      )
      .forEach((input) => input.removeAttribute("required"));

    // ✅ Ensure stored data exists before submission
    const storedFullName = localStorage.getItem("FullName") || "";
    const storedEmail = localStorage.getItem("Email") || "";
    const storedAge = localStorage.getItem("Age") || "";

    if (!storedFullName || !storedEmail || !storedAge) {
      alert("Error: Registration details are missing!");
      redirectToFreshStart();
      return;
    }

    const feedbackFormData = new FormData();
    feedbackFormData.append("FullName", storedFullName);
    feedbackFormData.append("Email", storedEmail);
    feedbackFormData.append("Age", storedAge);
    feedbackFormData.append("Score", form.Score.value);
    feedbackFormData.append("Feedback", form.Feedback.value);

    try {
      await fetch(scriptURL, { method: "POST", body: feedbackFormData });

      // ✅ Mark Feedback as Submitted
      localStorage.setItem("FeedbackSubmitted", "true");

      // ✅ Show "Thank You" Message, Then Redirect for Fresh Start
      document.body.innerHTML = "<h2>✅ Thank you for playing! Closing window...</h2>";

      setTimeout(() => {
        localStorage.clear(); // ✅ Ensure all stored data is cleared
        window.location.href = "registration.html"; // ✅ Redirect for fresh start
      }, 500);
    } catch (error) {
      console.error("Error!", error.message);
      alert("There was an error submitting the feedback. Please try again.");
      submitButton.disabled = false; // ✅ Re-enable button if error
      submitButton.value = "Submit";
    }
  }
});

// ✅ Function to Show Feedback Form
// ✅ Function to Show Feedback Form
function showFeedbackForm(score) {
  if (localStorage.getItem("SkippedRegistration") === "true") {
      window.location.href = "game.html"; // Redirect user to game if they skipped registration
      return;
  }

  document.getElementById("formTitle").textContent = "Thank you for playing!";
  
  // Hide registration fields
  document.querySelectorAll(
      "input[name='FullName'], input[name='Email'], input[name='Age']"
  ).forEach((input) => {
      input.style.display = "none";
      input.removeAttribute("required");
  });

  // ✅ Hide Help Button when feedback form is displayed
  const helpButton = document.getElementById("helpButton");
  if (helpButton) {
      helpButton.style.display = "none";
  }

  // Show feedback fields
  document.getElementById("gameFeedbackSection").style.display = "block";
  document.getElementById("scoreField").value = score;
}


// ✅ Prevent Context Menu (Right-Click) & Certain Key Combinations
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// document.addEventListener("keydown", (event) => {
//   if (
//     event.ctrlKey &&
//     (event.key === "u" ||
//       event.key === "s" ||
//       event.key === "i" ||
//       event.key === "j")
//   ) {
//     event.preventDefault();
//   }
// });
