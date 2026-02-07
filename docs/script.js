// Smooth scroll & active link
const links = document.querySelectorAll(".sidebar nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-toggle").checked = false;
  });
});

// Highlight active section
window.addEventListener("scroll", () => {
  let fromTop = window.scrollY + 120;

  links.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.style.opacity = "1";
    } else {
      link.style.opacity = "0.6";
    }
  });
});
