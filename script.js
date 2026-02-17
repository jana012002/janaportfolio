// Reveal sections on scroll
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Dark Mode toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
}
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";
  document.body.style.overflow = "hidden"; // Prevent scrolling background
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
  document.body.style.overflow = "auto";
}
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";

  // Hide all other sections
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    if (sec.id !== "resume") {
      sec.style.display = "none";
    }
  });

  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";

  // Show all sections back
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.style.display = "block";
  });

  document.body.style.overflow = "auto";
}
function openResume() {
  document.getElementById("resumeModal").style.display = "flex";

  // Hide other sections
  document.querySelectorAll("section").forEach(sec => {
    if (sec.id !== "resume") {
      sec.style.display = "none";
    }
  });

  document.body.style.overflow = "hidden";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";

  // Show back all other sections
  document.querySelectorAll("section").forEach(sec => {
    sec.style.display = "block";
  });

  document.body.style.overflow = "auto";
}
function openResume() {
  document.getElementById("resumeModal").style.display = "block";
  document.body.classList.add("modal-open");
  document.body.style.overflow = "hidden";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
  document.body.classList.remove("modal-open");
  document.body.style.overflow = "auto";
}
function openResume() {
  document.getElementById("resumeModal").classList.add("show");
}

function closeResume() {
  document.getElementById("resumeModal").classList.remove("show");
}
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if(menuToggle){
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
function openResume() {
  document.getElementById("resumeModal").style.display = "block";
  document.querySelector(".social-container").style.display = "none";
}

function closeResume() {
  document.getElementById("resumeModal").style.display = "none";
  document.querySelector(".social-container").style.display = "flex";
}
