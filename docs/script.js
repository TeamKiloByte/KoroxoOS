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
const heroTitle = document.querySelector(".hero h1");
const glassHeader = document.getElementById("glass-header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // tweak this threshold if needed
  const triggerPoint = 120;

  if (scrollY > triggerPoint) {
    glassHeader.classList.add("active");

    // subtle shrink + fade hero
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(-20px) scale(0.92)";
  } else {
    glassHeader.classList.remove("active");

    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0) scale(1)";
  }
});
