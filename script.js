const header = document.querySelector("#site-header");
const menuButton = document.querySelector(".menu-button");
const mobileNav = document.querySelector("#mobile-nav");
const mobileLinks = mobileNav.querySelectorAll("a");
const form = document.querySelector("#application-form");
const formStatus = document.querySelector("#form-status");

const setMenuState = (open) => {
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  mobileNav.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
};

menuButton.addEventListener("click", () => {
  setMenuState(menuButton.getAttribute("aria-expanded") !== "true");
});

mobileLinks.forEach((link) => link.addEventListener("click", () => setMenuState(false)));

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}, { passive: true });

const revealItems = document.querySelectorAll(".reveal:not(.is-visible)");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -24px" });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const requiredFields = [...form.querySelectorAll("[required]")];
  const invalidFields = requiredFields.filter((field) => !field.checkValidity());

  requiredFields.forEach((field) => {
    field.setAttribute("aria-invalid", String(!field.checkValidity()));
  });

  formStatus.classList.add("is-visible");

  if (invalidFields.length) {
    formStatus.classList.add("is-error");
    formStatus.textContent = "Complete the highlighted fields before submitting.";
    invalidFields[0].focus();
    return;
  }

  const firstName = form.elements.name.value.trim().split(" ")[0];
  formStatus.classList.remove("is-error");
  formStatus.textContent = `Thanks, ${firstName}. The preview captured your application locally. Connect a form endpoint before publishing.`;
});

form.addEventListener("input", (event) => {
  if (event.target.matches("[required]")) {
    event.target.setAttribute("aria-invalid", "false");
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
