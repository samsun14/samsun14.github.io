// Builds every page from data.js. You normally only need to edit data.js.

const $ = (sel) => document.querySelector(sel);
const byId = (id) => PROJECTS.find((p) => p.id === id);
const page = document.body.dataset.page;

// ---------- Shared header + footer ----------
function renderChrome() {
  const tab = (href, label, key) =>
    `<a href="${href}" class="${page === key ? "active" : ""}">${label}</a>`;

  $("#site-header").innerHTML = `
    <a href="index.html" class="brand">${SITE.name}</a>
    <nav class="tabs">
      ${tab("index.html", "Experience", "home")}
      ${tab("projects.html", "Projects", "projects")}
      <a href="${SITE.resume}" target="_blank">Resume</a>
      <a href="#contact">Contact</a>
    </nav>`;

  $("#site-footer").innerHTML = `
    <div class="footer-inner" id="contact">
      <h2>Let's build something.</h2>
      <div class="footer-links">
        <a href="mailto:${SITE.email}">${SITE.email}</a>
        <a href="${SITE.linkedin}" target="_blank">LinkedIn</a>
        <a href="${SITE.resume}" target="_blank">Resume</a>
      </div>
      <p class="copy">© ${new Date().getFullYear()} ${SITE.name}</p>
    </div>`;
}

// ---------- Project card (cover image, details revealed on hover) ----------
function projectCard(p) {
  return `
    <a class="card" href="project.html?id=${p.id}" data-category="${p.category}">
      <img src="${p.cover}" alt="${p.title}" loading="lazy">
      <div class="card-overlay">
        <span class="card-cat">${p.category}${p.org ? " · " + p.org : ""}</span>
        <h3>${p.title}</h3>
        <p>${p.blurb}</p>
        <span class="card-more">View project →</span>
      </div>
    </a>`;
}

// ---------- Home ----------
function renderHome() {
  $("#hero").innerHTML = `
    <div class="hero-text">
      <p class="eyebrow">${SITE.tagline}</p>
      <h1>${SITE.greeting}</h1>
      <p class="lead">${SITE.intro}</p>
      <div class="hero-actions">
        <a href="projects.html" class="btn">See my projects</a>
        <a href="${SITE.resume}" class="btn btn-ghost" target="_blank">Resume</a>
      </div>
    </div>
    <img src="${SITE.photo}" alt="${SITE.name}" class="avatar">`;

  // Logo row: one tile per company (first entry wins), clicking jumps to that entry
  const seen = new Set();
  $("#logo-row").innerHTML = EXPERIENCE.map((job, i) => {
    if (seen.has(job.company)) return "";
    seen.add(job.company);
    return `<a href="#job-${i}" class="logo-tile" title="${job.company}"><img src="${job.logo}" alt="${job.company}"></a>`;
  }).join("");

  const readMoreHref = (r) => (byId(r) ? `project.html?id=${r}` : r);

  // Timeline: centered line, entries alternate left / right, dot = company mark
  const entry = (id, mark, dates, title, sub, extra) => `
    <article class="tl-item" ${id ? `id="${id}"` : ""}>
      <div class="tl-marker"><img src="${mark}" alt=""></div>
      <div class="tl-date">${dates}</div>
      <div class="tl-card">${extra.photo || ""}
        <div class="tl-body">
          <p class="tl-date-inline">${dates}</p>
          <h3>${title}</h3>
          ${sub ? `<p class="tl-role">${sub}</p>` : ""}
          ${extra.body || ""}
        </div>
      </div>
    </article>`;

  $("#experience-list").innerHTML =
    EXPERIENCE.map((job, i) => entry(
      `job-${i}`, job.mark || job.logo, job.dates, job.company,
      job.role + (job.team ? ` · ${job.team}` : ""),
      {
        photo: job.image
          ? `<figure class="tl-photo"><img src="${job.image}" alt="${job.company}" loading="lazy"></figure>`
          : `<figure class="tl-photo empty"><img src="${job.logo}" alt=""></figure>`,
        body: (job.summary ? `<p class="tl-summary">${job.summary}</p>` : "") +
          (job.readMore ? `<a href="${readMoreHref(job.readMore)}" class="tl-more">Read more →</a>` : ""),
      })).join("") +
    entry("", EDUCATION.logo, EDUCATION.dates, EDUCATION.school, EDUCATION.degree, {});

  $("#featured").innerHTML = PROJECTS.filter((p) => p.featured).map(projectCard).join("");
}

// ---------- Projects grid with filter tabs ----------
function renderProjects() {
  const cats = ["All", ...new Set(PROJECTS.map((p) => p.category))];
  $("#filters").innerHTML = cats
    .map((c, i) => `<button class="${i === 0 ? "active" : ""}" data-cat="${c}">${c}</button>`)
    .join("");
  $("#project-grid").innerHTML = PROJECTS.map(projectCard).join("");

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    document.querySelectorAll("#filters button").forEach((b) => b.classList.toggle("active", b === btn));
    document.querySelectorAll("#project-grid .card").forEach((card) => {
      card.hidden = btn.dataset.cat !== "All" && card.dataset.category !== btn.dataset.cat;
    });
  });
}

// ---------- Single project detail ----------
function renderProject() {
  const id = new URLSearchParams(location.search).get("id");
  const p = byId(id);
  if (!p) {
    $("#project").innerHTML = `<p class="missing">Project not found. <a href="projects.html">Back to projects</a></p>`;
    return;
  }
  document.title = `${p.title} | ${SITE.name}`;

  let prevHeading = "";
  const sections = p.sections.map((s, i) => {
    const showHeading = s.heading !== prevHeading;
    prevHeading = s.heading;
    return `
      <section class="detail-row ${i % 2 ? "flip" : ""} ${s.image ? "" : "no-img"}">
        <div class="detail-text">
          ${showHeading ? `<h2>${s.heading}</h2>` : ""}
          <ul>${s.points.map((pt) => `<li>${pt}</li>`).join("")}</ul>
        </div>
        ${s.image ? `<figure><img src="${s.image}" alt="${p.title} — ${s.heading}" loading="lazy"></figure>` : ""}
      </section>`;
  }).join("");

  const idx = PROJECTS.indexOf(p);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  $("#project").innerHTML = `
    <a href="projects.html" class="back">← All projects</a>
    <header class="detail-hero">
      <p class="eyebrow">${p.category}${p.org ? " · " + p.org : ""}</p>
      <h1>${p.title}</h1>
      <p class="lead">${p.blurb}</p>
      <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    </header>
    ${sections}
    <nav class="pager">
      <a href="project.html?id=${prev.id}"><small>← Previous</small>${prev.title}</a>
      <a href="project.html?id=${next.id}" class="next"><small>Next →</small>${next.title}</a>
    </nav>`;
}

// ---------- Boot ----------
renderChrome();
if (page === "home") renderHome();
if (page === "projects") renderProjects();
if (page === "project") renderProject();
