const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks for your message. We will get back to you shortly.");
    form.reset();
  });
}
