// small helpers for UX
document.getElementById('year').textContent = new Date().getFullYear();

// set contact links (email and LinkedIn already in HTML - this ensures current)
const emailLink = document.getElementById('email-link');
const linkedinLink = document.getElementById('linkedin-link');

emailLink.href = "mailto:arav012g@gmail.com";
emailLink.textContent = "arav012g@gmail.com";
linkedinLink.href = "https://www.linkedin.com/in/arav012g/";

// keyboard shortcut: press "p" to jump to projects
document.addEventListener('keydown', (e) => {
  if (e.key === 'p' || e.key === 'P') {
    location.hash = '#projects';
  }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    if (mobileNav.hasAttribute('hidden')) {
      mobileNav.removeAttribute('hidden');
    } else {
      mobileNav.setAttribute('hidden', '');
    }
  });
}

// Project modal handling (single project: Pixel Run)
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalShort = document.getElementById('modal-short');
const modalOverview = document.getElementById('modal-overview');
const modalTech = document.getElementById('modal-tech');
const modalBuild = document.getElementById('modal-build');
const modalLive = document.getElementById('modal-live');
const modalCode = document.getElementById('modal-code');
const modalClose = document.querySelector('.modal-close');

const projectsData = {
  "pixel-run": {
    title: "Pixel Run",
    short: "A pixel-art endless runner with procedurally generated obstacles and scoring.",
    overview: "Pixel Run is a lightweight runner game designed to explore simple game loops, procedural obstacle generation, and performance-friendly rendering. Players dodge obstacles and collect power-ups to increase their score.",
    tech: ["HTML5 Canvas", "JavaScript (game loop & physics)", "Procedural obstacle generation", "Local score storage"],
    build: "Built with vanilla JS and canvas for lightweight performance. Key features: randomized obstacle patterns, incremental difficulty, and local high-score storage. Designed to be demo-friendly and small in size.",
    live: "#", // replace with live demo URL if you have one
    code: "#"  // replace with code repo URL if you have one
  }
};

// open modal when clicking view buttons
document.querySelectorAll('.view-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-project');
    openProjectModal(id);
  });
});

function openProjectModal(id) {
  const p = projectsData[id];
  if (!p) return;
  modalTitle.textContent = p.title;
  modalShort.textContent = p.short;
  modalOverview.textContent = p.overview;
  modalTech.innerHTML = '';
  p.tech.forEach(t => {
    const li = document.createElement('li');
    li.textContent = t;
    modalTech.appendChild(li);
  });
  modalBuild.textContent = p.build;
  modalLive.href = p.live;
  modalCode.href = p.code;

  modal.setAttribute('aria-hidden', 'false');
}

function closeProjectModal() {
  modal.setAttribute('aria-hidden', 'true');
}

modalClose.addEventListener('click', closeProjectModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeProjectModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProjectModal();
});
