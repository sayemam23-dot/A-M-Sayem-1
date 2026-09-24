/* =========================================================
   A M SAYEM — PORTFOLIO SCRIPT
   ---------------------------------------------------------
   EDIT THIS SECTION TO UPDATE YOUR PORTFOLIO
   Everything in `portfolioData` below drives the Projects,
   Research, Experience, Skills, Certifications and
   Achievements sections. Add a new item to the matching
   array and it will appear on the site automatically —
   you do not need to touch the HTML or the render code.
   ========================================================= */

const portfolioData = {

  personal: {
    name: "A M Sayem",
    tagline: "ITM Student | FinTech | Product & Project Management",
    email: "amsayem3@gmail.com",
    linkedin: "https://www.linkedin.com/in/amsayem",
    github: "https://github.com/sayemam23-dot",
    resume: "assets/resume/Sayem-CV.pdf"
  },

  // Add a new project by copying the object shape below.
  // Only real projects belong here — leave placeholders out
  // of this array; the empty-state card is shown automatically.
  projects: [
    {
      name: "RentAll BD",
      category: "Startup Concept",
      description: "A peer-to-peer rental marketplace concept for underutilised physical items in Bangladesh.",
      role: "Co-founder & CTO",
      tools: ["Product Strategy", "Business Modeling", "Google AI Studio (prototype)"],
      outcome: "1st Runner-up — Startup InnovateX",
      github: "",
      demo: "",
      caseStudy: "#rentall-bd",
      featured: true
    },
    {
      name: "ধার দে (Dhar De)",
      category: "DIU Team Project",
      description: "A full-stack Bengali debt-tracking web app with SmartSettle™ counter-debt netting, a Shame Board, gamification, and per-debt chat.",
      role: "Full-stack development",
      tools: ["PHP", "MySQL", "InfinityFree"],
      outcome: "Built and iterated through several development rounds as a DIU team project",
      github: "",
      demo: "",
      caseStudy: "#dhar-de",
      featured: true
    }
    // { name: "PLACEHOLDER_PROJECT", category: "", description: "", role: "", tools: [], outcome: "", github: "", demo: "", caseStudy: "" }
  ],

  research: [
    {
      title: "PLACEHOLDER_PAPER_TITLE_01",
      conference: "PLACEHOLDER_CONFERENCE_NAME",
      authors: "PLACEHOLDER_AUTHORS",
      status: "Accepted for Conference Presentation — Presentation Pending",
      abstract: "PLACEHOLDER_ABSTRACT",
      link: ""
    },
    {
      title: "PLACEHOLDER_PAPER_TITLE_02",
      conference: "PLACEHOLDER_CONFERENCE_NAME",
      authors: "PLACEHOLDER_AUTHORS",
      status: "Accepted for Conference Presentation — Presentation Pending",
      abstract: "PLACEHOLDER_ABSTRACT",
      link: ""
    }
  ],

  experience: [
    {
      org: "DIU VSC",
      role: "Member",
      period: "2024 — Present",
      points: [
        "Involved in Family Day",
        "Involved in Parents Day",
        "Involved in seminars and other university activities"
      ]
    },
    {
      org: "ITM Club",
      role: "PLACEHOLDER_ROLE",
      period: "PLACEHOLDER_PERIOD",
      points: [
        "PLACEHOLDER_RESPONSIBILITY — e.g. ITM Summit / event / logistics involvement"
      ]
    }
  ],

  skills: {
    "Product & Project": ["Project Management fundamentals", "Product Management fundamentals", "Jira", "Agile/Scrum fundamentals", "Presentation", "Team collaboration"],
    "Data & Business": ["Power BI", "Excel", "Business Analysis fundamentals", "Data Analysis fundamentals"],
    "Technology": ["Python", "C", "HTML", "CSS", "JavaScript", "PHP", "DBMS / SQL"],
    "FinTech": ["FinTech", "Digital payments", "Banking technology", "Financial services technology"]
  },

  certifications: [
    {
      name: "Google Project Management Certificate",
      issuer: "Coursera",
      date: "",
      id: "",
      link: ""
    }
    // { name: "PLACEHOLDER_CERTIFICATION", issuer: "", date: "", id: "", link: "" }
  ],

  achievements: [
    {
      title: "1st Runner-up — Startup InnovateX",
      project: "RentAll BD",
      note: "Startup competition placement"
    }
    // { title: "PLACEHOLDER_ACHIEVEMENT", project: "", note: "" }
  ],

  currentlyLearning: ["FinTech", "Product Management", "Project Management", "Power BI", "Business/Data Analysis"]
};

/* =========================================================
   RENDERING — reads portfolioData above and builds the DOM.
   You shouldn't need to edit anything below this line.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  wireNav();
  wireTheme();
  wireScrollSpy();
  wireReveal();
  wireContactForm();
  document.getElementById("year").textContent = new Date().getFullYear();

  applyPersonal();
  renderProjects();
  renderResearch();
  renderExperience();
  renderSkills();
  renderCertifications();
  renderAchievements();
  renderLearning();
});

function applyPersonal(){
  const p = portfolioData.personal;
  document.querySelectorAll("[data-email]").forEach(el => { el.href = "mailto:" + p.email; el.textContent = p.email; });
  document.querySelectorAll("[data-linkedin]").forEach(el => el.href = p.linkedin);
  document.querySelectorAll("[data-github]").forEach(el => el.href = p.github);
  document.querySelectorAll("[data-resume]").forEach(el => el.href = p.resume);
}

function emptyCard(label){
  const d = document.createElement("div");
  d.className = "card placeholder";
  d.innerHTML = `<p>${label}</p>`;
  return d;
}

function renderProjects(){
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const items = portfolioData.projects.filter(p => !p.featured);
  if (items.length === 0){
    grid.appendChild(emptyCard("More projects will be added here as they're finished. Nothing to show yet beyond the featured project above."));
    return;
  }
  items.forEach(p => {
    const c = document.createElement("article");
    c.className = "card reveal";
    c.innerHTML = `
      <span class="tag">${p.category || "Project"}</span>
      <h3>${p.name}</h3>
      <p>${p.description || ""}</p>
      ${p.role ? `<p><strong>Role:</strong> ${p.role}</p>` : ""}
      <div class="links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">GitHub</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Demo</a>` : ""}
        ${p.caseStudy ? `<a href="${p.caseStudy}">Case Study</a>` : ""}
      </div>`;
    grid.appendChild(c);
  });
}

function renderResearch(){
  const grid = document.getElementById("research-grid");
  if (!grid) return;
  portfolioData.research.forEach((r,i) => {
    const c = document.createElement("article");
    c.className = "card reveal";
    c.innerHTML = `
      <span class="tag">Paper 0${i+1}</span>
      <h3>${r.title}</h3>
      <p><strong>Conference:</strong> ${r.conference}</p>
      <p><strong>Authors:</strong> ${r.authors}</p>
      <p><strong>Status:</strong> ${r.status}</p>
      <p>${r.abstract}</p>
      <div class="links">${r.link ? `<a href="${r.link}" target="_blank" rel="noopener">Link / PDF</a>` : `<span style="font-family:var(--font-mono);font-size:13px;color:var(--muted)">Link / PDF — to be added</span>`}</div>`;
    grid.appendChild(c);
  });
}

function renderExperience(){
  const grid = document.getElementById("experience-grid");
  if (!grid) return;
  portfolioData.experience.forEach(e => {
    const c = document.createElement("article");
    c.className = "card reveal";
    c.innerHTML = `
      <span class="tag">${e.period}</span>
      <h3>${e.org}</h3>
      <p><strong>${e.role}</strong></p>
      <ul style="margin:0;padding-left:18px;color:var(--muted)">
        ${e.points.map(pt => `<li>${pt}</li>`).join("")}
      </ul>`;
    grid.appendChild(c);
  });
}

function renderSkills(){
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  Object.entries(portfolioData.skills).forEach(([group, list]) => {
    const c = document.createElement("div");
    c.className = "skill-group reveal";
    c.innerHTML = `<h3>${group}</h3><div class="skill-tags">${list.map(s => `<span>${s}</span>`).join("")}</div>`;
    grid.appendChild(c);
  });
}

function renderCertifications(){
  const grid = document.getElementById("cert-grid");
  if (!grid) return;
  portfolioData.certifications.forEach(cert => {
    const c = document.createElement("article");
    c.className = "card reveal";
    c.innerHTML = `
      <span class="tag">Certification</span>
      <h3>${cert.name}</h3>
      <p>${cert.issuer}${cert.date ? " · " + cert.date : ""}</p>
      ${cert.link ? `<div class="links"><a href="${cert.link}" target="_blank" rel="noopener">View</a></div>` : ""}`;
    grid.appendChild(c);
  });
  grid.appendChild(emptyCard("Future certifications will be added here."));
}

function renderAchievements(){
  const grid = document.getElementById("ach-grid");
  if (!grid) return;
  portfolioData.achievements.forEach(a => {
    const c = document.createElement("div");
    c.className = "ach-card reveal";
    c.innerHTML = `<div class="rank">🏆</div><h3>${a.title}</h3><p style="color:inherit;opacity:.8">${a.project}${a.note ? " — " + a.note : ""}</p>`;
    grid.appendChild(c);
  });
  const ph = document.createElement("div");
  ph.className = "ach-card placeholder reveal";
  ph.innerHTML = `<p>Hackathons, competitions, academic and conference achievements will appear here as they happen.</p>`;
  grid.appendChild(ph);
}

function renderLearning(){
  const row = document.getElementById("learning-row");
  if (!row) return;
  row.innerHTML = portfolioData.currentlyLearning.map(s => `<span>${s}</span>`).join("");
}

/* ---- NAV (mobile menu + active link) ---- */
function wireNav(){
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
}

function wireScrollSpy(){
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");
  if (!sections.length || !navLinks.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id));
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px" });
  sections.forEach(s => obs.observe(s));
}

/* ---- THEME TOGGLE ---- */
function wireTheme(){
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  const saved = localStorage.getItem("theme");
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", current);
    localStorage.setItem("theme", current);
  });
}

/* ---- SCROLL REVEAL (single, restrained effect) ---- */
function wireReveal(){
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  // Re-run after dynamic content renders
  setTimeout(() => document.querySelectorAll(".reveal").forEach(el => obs.observe(el)), 0);
}

/* ---- CONTACT FORM (no backend — mailto fallback) ---- */
function wireContactForm(){
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#cf-name").value;
    const message = form.querySelector("#cf-message").value;
    const subject = encodeURIComponent("Portfolio contact from " + name);
    const body = encodeURIComponent(message + "\n\n— " + name);
    window.location.href = `mailto:${portfolioData.personal.email}?subject=${subject}&body=${body}`;
  });
}
