// =========================================================
// Theme Toggle Button (Light / Dark Mode)
// Requirement: document.body.classList.toggle("dark")
// Colors are strictly handled in CSS via variables on :root & body.dark
// =========================================================
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  
  if (document.body.classList.contains("dark")) {
    themeToggleBtn.textContent = "☀️ Light";
  } else {
    themeToggleBtn.textContent = "🌙 Dark";
  }
});

// =========================================================
// Contact Form Submission (Bonus Section 5)
// - Form stays on the page (preventDefault)
// - Rejects empty email
// - Displays a greeting line with the name the visitor types
// =========================================================
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  // Validate email presence
  if (!email) {
    formMessage.textContent = "Error: Email is required. Please provide your email address.";
    formMessage.className = "form-message error";
    return;
  }

  // Greet visitor by name
  const visitorName = name ? name : "Visitor";
  formMessage.textContent = `Hello, ${visitorName}! Your message has been received.`;
  formMessage.className = "form-message success";

  // Reset inputs
  contactForm.reset();
});

// =========================================================
// Back-to-Top Button (Bonus Section 5)
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
