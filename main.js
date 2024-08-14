const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
  const isVisible = primaryNav.hasAttribute("data-visible");

  primaryNav.toggleAttribute("data-visible");
  navToggle.setAttribute("aria-expanded", isVisible ? "false" : "true");
  primaryHeader.toggleAttribute("data-overlay");

  // Toggle between hamburger and close icons
  const hamburgerIcon = navToggle.querySelector(".icon-hamburger");
  const closeIcon = navToggle.querySelector(".icon-close");
  hamburgerIcon.style.display = isVisible ? "block" : "none";
  closeIcon.style.display = isVisible ? "none" : "block";
});
