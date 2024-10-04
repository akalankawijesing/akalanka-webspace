window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  const header = document.getElementById("header");
  const navigationContent = document.getElementById("navigation-content");

  loader.style.transition = "transform 1s, opacity 1s";
  loader.style.transform = "translateY(-100%)";
  loader.style.opacity = "0";

  setTimeout(() => {
    loader.style.display = "none";
    header.style.display = "block";
    navigationContent.style.display = "block";
    navigationContent.style.display = "flex";
  }, 1000);
});

document.querySelector(".menubar").addEventListener("click", function () {
  const navigationContent = document.getElementById("navigation-content");
  navigationContent.style.transition = "transform 0.6s";
  navigationContent.style.transform = "translateY(0)";
});

document.querySelector(".navigation-close").addEventListener("click", function () {
  const navigationContent = document.getElementById("navigation-content");
  navigationContent.style.transition = "transform 0.6s";
  navigationContent.style.transform = "translateY(-100%)";
});

class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    this.txt = this.isDeleting
      ? fullTxt.substring(0, this.txt.length - 1)
      : fullTxt.substring(0, this.txt.length + 1);

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) delta /= 2;
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 100;
    }

    setTimeout(() => this.tick(), delta);
  }
}

window.onload = function () {
  const elements = document.getElementsByClassName("txt-rotate");
  for (let i = 0; i < elements.length; i++) {
    const toRotate = elements[i].getAttribute("data-rotate");
    const period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  
  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0em solid #666; }";
  document.body.appendChild(css);
};

function navigateToSection(sectionId) {
  const navigationContent = document.getElementById("navigation-content");
  const sections = ["header", "blog", "portfolio", "contact", "about", "breaker", "breaker-two"];
  sections.forEach((id) => (document.getElementById(id).style.display = "none"));

  navigationContent.style.transition = "all 0.7s";
  navigationContent.style.transform = "translateY(-100%)";

  setTimeout(() => {
    document.getElementById(sectionId).style.display = "block";
    document.getElementById("breaker").style.display = "block";
    document.getElementById("breaker-two").style.display = "block";
  }, 700);

  setTimeout(() => {
    document.getElementById("breaker").style.display = "none";
    document.getElementById("breaker-two").style.display = "none";
    navigationContent.style.display = "flex";
  }, 2000);
}

document.getElementById("about-link").addEventListener("click", () => navigateToSection("about"));
document.getElementById("contact-link").addEventListener("click", () => navigateToSection("contact"));
document.getElementById("portfolio-link").addEventListener("click", () => navigateToSection("portfolio"));
document.getElementById("blog-link").addEventListener("click", () => navigateToSection("blog"));
document.getElementById("home-link").addEventListener("click", () => navigateToSection("header"));

document.body.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

["menubar", "navigation-close", "a"].forEach((selector) => {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener("mouseenter", () => {
      const cursor = document.querySelector(".cursor");
      cursor.style.transform = "scale(1.4)";
      cursor.style.opacity = "1";
    });

    el.addEventListener("mouseleave", () => {
      const cursor = document.querySelector(".cursor");
      cursor.style.transform = "scale(1)";
      cursor.style.opacity = "0.6";
    });
  });
});
