const content = window.MANOKRITI_CONTENT;

if (content) {
  document.querySelectorAll("[data-content]").forEach((element) => {
    const key = element.dataset.content;
    if (Object.prototype.hasOwnProperty.call(content.text, key)) {
      // These content values are authored in content.js and intentionally support
      // <br> for line breaks in short labels/headlines.
      element.innerHTML = content.text[key];
    }
  });

  document.querySelectorAll("[data-image]").forEach((element) => {
    const key = element.dataset.image;
    if (Object.prototype.hasOwnProperty.call(content.images, key)) {
      element.src = content.images[key];
    }
  });

  document.querySelectorAll("[data-link]").forEach((element) => {
    const key = element.dataset.link;
    if (Object.prototype.hasOwnProperty.call(content.links, key)) {
      element.href = content.links[key];
    }
  });
}

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("open");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();
