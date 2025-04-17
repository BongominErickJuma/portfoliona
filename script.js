// DOM Elements
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = document.querySelectorAll("#nav-links a");
const navbar = document.querySelector(".navbar");
const textElement = document.querySelector(".typewriter-text");
const cursor = document.querySelector(".cursor");

// Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("open");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.classList.remove("open");
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Typewriter Effect
function initTypewriter() {
  const text = "I craft modern, responsive web apps.";
  let i = 0;
  const speed = 100;

  // Calculate text width first to prevent layout shift
  textElement.style.visibility = "hidden";
  textElement.style.position = "absolute";
  textElement.textContent = text;
  const textWidth = textElement.offsetWidth;
  textElement.textContent = "";
  textElement.style.visibility = "visible";
  textElement.style.position = "static";

  function type() {
    if (i < text.length) {
      textElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      cursor.style.display = "none";
    }
  }

  cursor.style.display = "none";
  setTimeout(() => {
    cursor.style.display = "inline-block";
    type();
  }, 500);
}

// Initialize all effects
document.addEventListener("DOMContentLoaded", () => {
  initTypewriter();
});
