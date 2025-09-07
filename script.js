
// Add a class to the navbar when the user scrolls down
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("top-navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// Smooth scroll and active link highlighting for sidebar links
const sections = document.querySelectorAll(".content-section");
const sidebarLinks = document.querySelectorAll(".sidebar-link");

document.querySelectorAll(".sidebar-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    sidebarLinks.forEach((link) => link.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");

    // Scroll to the corresponding section
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add a scroll event listener to update the active link
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  sidebarLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

