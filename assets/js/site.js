const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeColor = document.querySelector('meta[name="theme-color"]');

function updateThemeControl() {
  const dark = root.getAttribute("data-theme") === "dark";

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    themeToggle.title = dark ? "Switch to light theme" : "Switch to dark theme";
  }

  if (themeIcon) {
    themeIcon.textContent = dark ? "☀" : "☾";
  }

  if (themeColor) {
    themeColor.setAttribute("content", dark ? "#171417" : "#fbf8f7");
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", (event) => {
    event.stopImmediatePropagation();
    const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    try {
      localStorage.setItem("theme", nextTheme);
    } catch (error) {
      // The theme still works for the current page when storage is unavailable.
    }

    if (nextTheme === "dark") {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }

    updateThemeControl();
  }, true);
}
updateThemeControl();

const profileToggle = document.querySelector(".author__urls-wrapper > button");
if (profileToggle) {
  profileToggle.addEventListener("click", () => {
    requestAnimationFrame(() => {
      profileToggle.setAttribute("aria-expanded", String(profileToggle.classList.contains("open")));
    });
  });
}

const navToggle = document.querySelector(".greedy-nav__toggle");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    requestAnimationFrame(() => {
      const expanded = navToggle.classList.contains("close");
      navToggle.setAttribute("aria-expanded", String(expanded));
      navToggle.setAttribute("aria-label", expanded ? "Close navigation menu" : "Open navigation menu");
    });
  });
}

const researchLinks = Array.from(document.querySelectorAll(".research-toc a"));
const researchSections = researchLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (researchLinks.length && researchSections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

    if (!visible) return;

    researchLinks.forEach((link) => {
      const isCurrent = link.getAttribute("href") === `#${visible.target.id}`;
      if (isCurrent) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }, {
    rootMargin: "-18% 0px -62% 0px",
    threshold: 0
  });

  researchSections.forEach((section) => observer.observe(section));
}
