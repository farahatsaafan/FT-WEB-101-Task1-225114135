// =========================================================
// THEME TOGGLE (Dark / Light Mode)
// Requirement:
// - Give the button an id. Find it, listen for click, then:
//   document.body.classList.toggle("dark")
// - JavaScript DOES NOT set colours. All colours change in CSS
//   via CSS variables on :root and body.dark.
// =========================================================
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeText = document.getElementById("theme-text");

themeToggleBtn.addEventListener("click", function () {
  // Toggle the 'dark' class on the body element
  document.body.classList.toggle("dark");

  // Update button label & icon accordingly
  const isDarkMode = document.body.classList.contains("dark");
  if (isDarkMode) {
    if (themeIcon) themeIcon.textContent = "☀️";
    if (themeText) themeText.textContent = "Light Mode";
  } else {
    if (themeIcon) themeIcon.textContent = "🌙";
    if (themeText) themeText.textContent = "Dark Mode";
  }
});

// =========================================================
// CONTACT FORM HANDLING
// Bonus Requirements (Section 5):
// - The form stays on the page (preventDefault)
// - An empty email is rejected
// - A line that says hello with the name the visitor types
// =========================================================
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (e) {
  // Prevent page refresh so form stays on the page
  e.preventDefault();

  const nameVal = nameInput.value.trim();
  const emailVal = emailInput.value.trim();

  // Validate that email is not empty
  if (!emailVal) {
    formMessage.textContent = "Please enter your email address to submit.";
    formMessage.className = "form-message error";
    return;
  }

  // Display greeting message with the visitor's typed name
  const greetingName = nameVal !== "" ? nameVal : "there";
  formMessage.textContent = `Hello, ${greetingName}! Thank you for reaching out.`;
  formMessage.className = "form-message success";

  // Reset the form input fields
  contactForm.reset();
});

// =========================================================
// BACK TO TOP BUTTON
// Bonus Requirement (Section 5):
// - Smooth scroll to top of the page
// =========================================================
const backToTopBtn = document.getElementById("back-to-top");

if (backToTopBtn) {
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
