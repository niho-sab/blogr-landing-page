// Mobile dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector(".dropdown-btn");
  const content = dropdown.querySelector(".dropdown-content");

  btn.addEventListener("click", () => {
    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
      content.classList.remove("show");
    } else {
      // Close all other dropdowns
      dropdowns.forEach(d => {
        d.classList.remove("active");
        d.querySelector(".dropdown-content").classList.remove("show");
      });
      // Open clicked dropdown
      dropdown.classList.add("active");
      content.classList.add("show");
    }
  });
});

// Hamburger menu toggle
const hamburgerBtn = document.querySelector(".hamburger-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileNav = document.querySelector(".mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  mobileNav.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  mobileNav.classList.remove("show");
});


