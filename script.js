window.addEventListener("DOMContentLoaded", function () {
  const introductionSection = document.getElementById("introduction");
  const sections = document.querySelectorAll(".animated-section");
  const screenHeight = window.innerHeight;

  // Add 'active' class to introduction section when page is loaded
  introductionSection.classList.add("active");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    sections.forEach(function (section) {
      const sectionPosition = section.offsetTop;

      if (scrollPosition >= sectionPosition - screenHeight * 0.75) {
        section.classList.add("active");
      }
    });
  });
});

const bubble = document.querySelector(".bubble");
let colorIndex = 0;

// Array of colors to cycle through (orange and red)
const colors = ["#FFA500", "#FF0000"];

// Function to change bubble color
function changeBubbleColor() {
  bubble.style.borderColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Change bubble color initially
changeBubbleColor();

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const viewportHeight = window.innerHeight;
  let bubbleColor = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const sectionTop = rect.top;
    const sectionBottom = rect.bottom;
    const sectionHeight = rect.height;

    // Check if the bubble is within the section
    if (sectionTop < viewportHeight && sectionBottom > 0) {
      changeBubbleColor(); // Change bubble color when it enters a new section
    }
  });
});

// Function to create a bubble
function createBubble(className) {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble", className);
  document.body.appendChild(bubble);
}

// Create bubbles with different starting positions
createBubble("bottom-left");
createBubble("bottom-right");
createBubble("middle-left");

function scrollToContact() {
  const contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: "smooth" });
}

const introHeading = document.getElementById("intro-heading");
const text = "Hi all, I'm Huzaifa 👋";
let index = 0;

function writeText() {
  introHeading.textContent += text[index];
  index++;

  if (index < text.length) {
    setTimeout(writeText, 100); // Adjust the speed as needed
  }
}

writeText();
function scrollToProject() {
  const projectsSection = document.getElementById("projects");
  projectsSection.scrollIntoView({ behavior: "smooth" });
}
