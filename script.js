// scroll to sections

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// reveal anims

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
    }
});
}, { threshold: 0.35 }); // activates when 35% of the element is visible

reveals.forEach(el => revealObserver.observe(el));

// lateral bar indicator

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const activeId = entry.target.id;

      navLinks.forEach((link) => {
        link.classList.remove("text-violet-300");
        link.classList.add("text-neutral-500");

        if (link.getAttribute("href") === "#" + activeId) {
          link.classList.remove("text-neutral-500");
          link.classList.add("text-violet-300");
        }
      });
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => navObserver.observe(section));