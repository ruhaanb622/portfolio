---
layout: post
title: Portfolio Home
hide: true
show_reading_time: false
---

<style>
.portfolio-home {
  max-width: 1080px;
  margin: 0 auto;
}
.portfolio-hero,
.portfolio-grid,
.portfolio-flow {
  display: grid;
  gap: 14px;
}
.portfolio-hero {
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: 18px;
}
.portfolio-panel,
.portfolio-card,
.portfolio-step {
  border: 1px solid rgba(255,255,255,.14);
  border-radius: 6px;
  background: rgba(255,255,255,.035);
}
.portfolio-header {
  grid-column: 1 / -1;
  padding: 14px 18px;
  border: 1px solid rgba(184,255,106,.5);
  border-radius: 6px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
}
.portfolio-panel {
  padding: 24px;
}
.portfolio-panel.accent {
  border-color: rgba(112,230,255,.45);
}
.portfolio-panel h1 {
  margin: 0 0 12px;
  font-size: clamp(2rem, 5vw, 3rem);
  line-height: 1.05;
}
.portfolio-panel h1 span {
  color: #b8ff6a;
}
.portfolio-panel p {
  margin: 8px 0 0;
  line-height: 1.65;
}
.portfolio-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 18px 0 0;
}
.portfolio-meta div {
  padding: 15px 17px;
  border: 1px solid rgba(255,255,255,.12);
  border-radius: 6px;
  background: rgba(255,255,255,.025);
}
.portfolio-meta strong {
  display: block;
  margin-bottom: 4px;
}
.portfolio-section {
  margin-top: 42px;
}
.portfolio-section > p:first-of-type {
  max-width: 820px;
  line-height: 1.65;
}
.portfolio-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 16px;
}
.portfolio-grid.cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.portfolio-card {
  display: flex;
  flex-direction: column;
  min-height: 185px;
  padding: 20px;
  color: inherit;
  text-decoration: none;
  transition: transform .18s ease, border-color .18s ease, background .18s ease;
}
.portfolio-card:hover,
.portfolio-card:focus-visible {
  transform: translateY(-3px);
  border-color: rgba(112,230,255,.7);
  background: rgba(112,230,255,.06);
}
.portfolio-card.accent-green {
  border-color: rgba(184,255,106,.4);
}
.portfolio-card.accent-yellow {
  border-color: rgba(255,209,102,.4);
}
.portfolio-card.accent-pink {
  border-color: rgba(255,122,184,.4);
}
.portfolio-card small {
  display: block;
  margin-bottom: 12px;
  font-weight: 800;
  letter-spacing: .08em;
  text-transform: uppercase;
  opacity: .8;
}
.portfolio-card h3 {
  margin: 0 0 9px;
}
.portfolio-card p {
  margin: 0;
  line-height: 1.55;
}
.portfolio-card .ocs__btn {
  align-self: flex-start;
  margin-top: auto;
}
.portfolio-flow {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 16px;
}
.portfolio-step {
  padding: 16px;
  text-align: center;
}
.portfolio-step strong {
  display: block;
  margin-bottom: 4px;
  color: #b8ff6a;
}
.portfolio-note {
  margin-top: 18px;
  padding: 18px 20px;
  border-left: 3px solid #ff7ab8;
  background: rgba(255,122,184,.05);
  line-height: 1.65;
}
.portfolio-actions {
  margin-top: 18px;
}
@media (max-width: 850px) {
  .portfolio-grid,
  .portfolio-grid.cols-4 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .portfolio-flow {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (max-width: 600px) {
  .portfolio-hero,
  .portfolio-grid,
  .portfolio-grid.cols-4,
  .portfolio-meta,
  .portfolio-flow {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="portfolio-home">

<div class="portfolio-hero">
  <div class="portfolio-header">AP Computer Science Principles · 2026–2027</div>

  <div class="portfolio-panel accent">
    <h1>Hi, I’m <span>Ruhaan.</span></h1>
    <p>I am a student developer in San Diego building with JavaScript, Python, GitHub Pages, and an evidence-first workflow.</p>
    <p>This portfolio tracks the projects, mistakes, design decisions, and reflections that turn each sprint into visible growth.</p>
  </div>

  <div class="portfolio-panel">
    <strong>What I’m building</strong>
    <p>I use this site as both a working development space and a record of how my technical skills evolve through projects.</p>

    <div class="portfolio-meta" aria-label="Portfolio status">
      <div><strong>3 languages</strong><span>Pseudocode · Python · JavaScript</span></div>
      <div><strong>1 live site</strong><span>Jekyll + GitHub Actions</span></div>
      <div><strong>Next build</strong><span>Tennis equipment recommender</span></div>
    </div>
  </div>
</div>

<div class="ocs__links ocs__links--wide portfolio-actions">
  <a class="ocs__btn ocs__btn--icon alert-green iridescent" href="{{ '/about/' | relative_url }}">
    <span class="ocs__btn-icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.01-8 4.5V16h16v-1.5C16 12.01 12.42 10 8 10z"/></svg>
    </span>
    <span>Explore My Story</span>
  </a>
  <a class="ocs__btn ocs__btn--icon alert-yellow iridescent" href="{{ '/github-pages-learning/' | relative_url }}">
    <span class="ocs__btn-icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M1 2.5C1 1.67 1.67 1 2.5 1H7v13H2.5A1.5 1.5 0 0 0 1 15.5v-13zM9 1h4.5c.83 0 1.5.67 1.5 1.5v13a1.5 1.5 0 0 0-1.5-1.5H9V1z"/></svg>
    </span>
    <span>Learning Guide</span>
  </a>
  <a class="ocs__btn ocs__btn--icon alert-red iridescent" href="https://github.com/ruhaanb622/portfolio" target="_blank" rel="noreferrer noopener">
    <span class="ocs__btn-icon" aria-hidden="true">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </span>
    <span>View Source</span>
  </a>
</div>

<br>

---

<section class="portfolio-section">

## GitHub Pages learning map

> Six connected topics explain how this portfolio works as a system—from experimenting in notebooks to building and extending the published site.

<div class="portfolio-grid">
  <div class="portfolio-card accent-green">
    <small>01 · Experiment</small>
    <h3>Notebooks &amp; Jokes</h3>
    <p>Use executable notebooks, arrays, objects, and random output to test ideas.</p>
    <a class="ocs__btn small iridescent" href="{{ site.baseurl }}/github-pages-learning/#jokes">Explore Topic →</a>
  </div>
  <div class="portfolio-card">
    <small>02 · Structure</small>
    <h3>Anatomy</h3>
    <p>Understand how files, front matter, layouts, assets, and configuration connect.</p>
    <a class="ocs__btn small iridescent" href="{{ site.baseurl }}/github-pages-learning/#anatomy">Explore Topic →</a>
  </div>
  <div class="portfolio-card accent-pink">
    <small>03 · Design</small>
    <h3>Theme</h3>
    <p>Extend a stable base theme with local layouts, Sass, CSS variables, and responsive components.</p>
    <a class="ocs__btn small iridescent" href="{{ site.baseurl }}/github-pages-learning/#theme">Explore Topic →</a>
  </div>
  <div class="portfolio-card accent-yellow">
    <small>04 · Content</small>
    <h3>Markdown</h3>
    <p>Combine readable documentation with semantic HTML, CSS, and JavaScript.</p>
    <a class="ocs__btn small iridescent" href="{{ site.baseurl }}/github-pages-learning/#markdown">Explore Topic →</a>
  </div>
  <div class="portfolio-card">
    <small>05 · Build</small>
    <h3>Jekyll</h3>
    <p>Transform source files and Liquid templates into a deployable static website.</p>
    <a class="ocs__btn small iridescent" href="{{ site.baseurl }}/github-pages-learning/#jekyll">Explore Topic →</a>
  </div>
  <div class="portfolio-card accent-green">
    <small>06 · Extend</small>
    <h3>Hacks</h3>
    <p>Customize working patterns, debug failures, and document the evidence behind each improvement.</p>
    <a class="ocs__btn small iridescent" href="{{ site.baseurl }}/github-pages-learning/#hacks">Explore Topic →</a>
  </div>
</div>

</section>

<br>

---

<section class="portfolio-section">

## My development loop

> A repeatable workflow connects the editor, version control, automation, and the published portfolio.

<div class="portfolio-flow" aria-label="Development workflow">
  <div class="portfolio-step"><strong>1 · Plan</strong><span>Issue and evidence</span></div>
  <div class="portfolio-step"><strong>2 · Build</strong><span>VS Code and local files</span></div>
  <div class="portfolio-step"><strong>3 · Test</strong><span>Run, preview, debug</span></div>
  <div class="portfolio-step"><strong>4 · Version</strong><span>Commit and push</span></div>
  <div class="portfolio-step"><strong>5 · Verify</strong><span>Actions and Pages</span></div>
</div>

</section>

<br>

---

<section class="portfolio-section">

## Development environment

> These tools support writing, testing, versioning, publishing, and troubleshooting.

<div class="portfolio-grid cols-4">
  <div class="portfolio-card accent-green">
    <small>Setup</small>
    <h3>OCS Tools</h3>
    <p>Accounts, operating system, commands, and troubleshooting references.</p>
    <a class="ocs__btn small iridescent" href="https://pages.opencodingsociety.com/tools/csp/" target="_blank" rel="noreferrer noopener">Open Setup →</a>
  </div>
  <div class="portfolio-card">
    <small>Version</small>
    <h3>GitHub</h3>
    <p>Repository, commits, issues, source history, and collaboration.</p>
    <a class="ocs__btn small iridescent" href="https://github.com/ruhaanb622/portfolio" target="_blank" rel="noreferrer noopener">View Repository →</a>
  </div>
  <div class="portfolio-card accent-yellow">
    <small>Editor</small>
    <h3>VS Code</h3>
    <p>Edit code, inspect files, debug, and use source control.</p>
    <a class="ocs__btn small iridescent" href="https://vscode.dev/" target="_blank" rel="noreferrer noopener">Open Editor →</a>
  </div>
  <div class="portfolio-card accent-pink">
    <small>Automate</small>
    <h3>GitHub Actions</h3>
    <p>Build and deploy the portfolio while exposing failures.</p>
    <a class="ocs__btn small iridescent" href="https://github.com/ruhaanb622/portfolio/actions" target="_blank" rel="noreferrer noopener">Inspect Runs →</a>
  </div>
</div>

</section>

<br>

---

<section class="portfolio-section">

## Selected evidence

> Working pages and documentation that show coding, design, debugging, and reflection.

<div class="portfolio-grid">
  <div class="portfolio-card accent-green">
    <small>Design + DOM</small>
    <h3>Advanced About page</h3>
    <p>Responsive layouts, personalized content, JavaScript-generated data, and accessible interaction.</p>
    <a class="ocs__btn small iridescent" href="{{ '/about/' | relative_url }}">Visit Page →</a>
  </div>
  <div class="portfolio-card accent-yellow">
    <small>Algorithms</small>
    <h3>Checkpoint 1</h3>
    <p>One recommendation algorithm mapped across pseudocode, Python, and JavaScript.</p>
    <a class="ocs__btn small iridescent" href="https://github.com/ruhaanb622/portfolio/issues/1" target="_blank" rel="noreferrer noopener">Review Evidence →</a>
  </div>
  <div class="portfolio-card accent-pink">
    <small>JavaScript</small>
    <h3>Neon Snake</h3>
    <p>An interactive game using canvas, events, state, collision detection, and local storage.</p>
    <a class="ocs__btn small iridescent" href="{{ '/snake/' | relative_url }}">Play Game →</a>
  </div>
</div>

<div class="portfolio-note">
  <strong>Current direction:</strong> My team is planning a tennis racquet, string, and grip recommendation tool. The next evidence will connect a user questionnaire to transparent recommendation rules and a tested interface.
</div>

</section>

</div>
