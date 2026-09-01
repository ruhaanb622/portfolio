---
layout: post
title: Portfolio Home
hide: true
show_reading_time: false
---

<style>
.portfolio-home {
  --home-bg: #090d15;
  --home-panel: #181818;
  --home-panel-2: #181818;
  --home-border: rgba(255,255,255,.11);
  --home-text: #f7f9fc;
  --home-muted: #aeb9cb;
  --home-cyan: #70e6ff;
  --home-lime: #b8ff6a;
  --home-pink: #ff7ab8;
  max-width: 1080px;
  margin: 0 auto;
  color: var(--home-text);
}
.home-hero {
  position: relative;
  padding: 18px 0 30px;
  border: 0;
  border-radius: 0;
  background: transparent;
}
.home-hero::after {
  display: none;
}
.home-kicker {
  margin: 0 0 12px;
  color: var(--home-cyan);
  font-size: .78rem;
  font-weight: 850;
  letter-spacing: .15em;
  text-transform: uppercase;
}
.home-hero h1 {
  position: relative;
  z-index: 1;
  max-width: 780px;
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.75rem);
  line-height: 1.12;
  letter-spacing: -.025em;
}
.home-hero h1 span { color: var(--home-lime); }
.home-lede {
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 22px 0 0;
  color: var(--home-muted);
  font-size: 1rem;
  line-height: 1.65;
}
.home-actions {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}
.home-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border: 1px solid var(--home-border);
  border-radius: 999px;
  color: var(--home-text);
  background: rgba(255,255,255,.045);
  text-decoration: none;
  font-weight: 800;
  transition: transform .2s ease, border-color .2s ease, background .2s ease;
}
.home-button.primary {
  border-color: transparent;
  color: #081018;
  background: var(--home-lime);
}
.home-button:hover,
.home-button:focus-visible {
  transform: translateY(-2px);
  border-color: var(--home-cyan);
  background: rgba(112,230,255,.12);
}
.home-button.primary:hover,
.home-button.primary:focus-visible { background: #d2ff9f; }
.home-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 24px;
}
.home-stat {
  padding: 18px;
  border: 1px solid var(--home-border);
  border-radius: 18px;
  background: rgba(255,255,255,.03);
}
.home-stat strong {
  display: block;
  color: var(--home-cyan);
  font-size: 1.35rem;
}
.home-stat span {
  color: var(--home-muted);
  font-size: .88rem;
}
.home-section { margin-top: 58px; }
.home-section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}
.home-section-head h2 {
  margin: 0;
  font-size: clamp(1.45rem, 3vw, 1.9rem);
}
.home-section-head p {
  max-width: 580px;
  margin: 0;
  color: var(--home-muted);
  line-height: 1.65;
}
.learning-map,
.project-grid,
.tool-grid {
  display: grid;
  gap: 16px;
}
.learning-map { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.project-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.tool-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.learning-card,
.project-card,
.tool-card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 190px;
  padding: 22px;
  border: 1px solid var(--home-border);
  border-radius: 22px;
  color: var(--home-text);
  background: var(--home-panel);
  text-decoration: none;
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}
.learning-card:hover,
.learning-card:focus-visible,
.project-card:hover,
.project-card:focus-visible,
.tool-card:hover,
.tool-card:focus-visible {
  transform: translateY(-5px);
  border-color: var(--card-accent, var(--home-cyan));
  box-shadow: 0 18px 44px rgba(0,0,0,.28);
}
.card-number {
  color: var(--card-accent, var(--home-cyan));
  font-size: .76rem;
  font-weight: 850;
  letter-spacing: .12em;
}
.learning-card h3,
.project-card h3,
.tool-card h3 {
  margin: 16px 0 8px;
  font-size: 1.25rem;
}
.learning-card p,
.project-card p,
.tool-card p {
  margin: 0;
  color: var(--home-muted);
  line-height: 1.58;
}
.card-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  gap: .5rem;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 38px;
  margin-top: auto;
  padding: 8px 12px;
  border: 2px solid currentColor;
  border-radius: 6px;
  color: var(--card-accent, var(--home-cyan));
  background: transparent;
  font-family: var(--pref-font-family);
  font-size: var(--pref-font-size);
  font-weight: 700;
  text-align: center;
  white-space: normal;
  transition: background .2s ease, transform .2s ease;
}
.card-arrow::before {
  content: "";
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
  background: currentColor;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 1.5a6.5 6.5 0 1 0 4.6 11.1A6.5 6.5 0 0 0 8 1.5zm0-1.5a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm1 4 4 4-4 4V9H4V7h5V4z'/%3E%3C/svg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M8 1.5a6.5 6.5 0 1 0 4.6 11.1A6.5 6.5 0 0 0 8 1.5zm0-1.5a8 8 0 1 1 0 16A8 8 0 0 1 8 0zm1 4 4 4-4 4V9H4V7h5V4z'/%3E%3C/svg%3E") center / contain no-repeat;
}
.learning-card:hover .card-arrow,
.project-card:hover .card-arrow,
.tool-card:hover .card-arrow {
  background: color-mix(in srgb, currentColor 12%, transparent);
  transform: scale(1.05);
}
.workflow {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}
.workflow-step {
  padding: 16px 12px;
  border: 1px solid var(--home-border);
  border-radius: 16px;
  background: var(--home-panel-2);
  text-align: center;
}
.workflow-step strong { display: block; color: var(--home-lime); }
.workflow-step span { color: var(--home-muted); font-size: .82rem; }
.home-note {
  margin-top: 20px;
  padding: 18px 20px;
  border-left: 3px solid var(--home-pink);
  border-radius: 0 16px 16px 0;
  color: var(--home-muted);
  background: rgba(255,122,184,.075);
  line-height: 1.7;
}
@media (max-width: 880px) {
  .learning-map, .project-grid { grid-template-columns: 1fr 1fr; }
  .tool-grid { grid-template-columns: 1fr 1fr; }
  .workflow { grid-template-columns: repeat(3, 1fr); }
  .home-section-head { align-items: start; flex-direction: column; }
}
@media (max-width: 560px) {
  .learning-map, .project-grid, .tool-grid, .home-stats { grid-template-columns: 1fr; }
  .workflow { grid-template-columns: 1fr 1fr; }
  .home-hero { padding-top: 8px; }
}
@media (prefers-reduced-motion: reduce) {
  .home-button, .learning-card, .project-card, .tool-card { transition: none; }
}
</style>

<div class="portfolio-home">
  <section class="home-hero" aria-labelledby="home-title">
    <p class="home-kicker">AP Computer Science Principles · 2026–2027</p>
    <h1 id="home-title">Hi, I’m <span>Ruhaan.</span></h1>
    <p class="home-lede">
      I am a student developer in San Diego building with JavaScript, Python,
      GitHub Pages, and an evidence-first workflow. This portfolio tracks the
      projects, mistakes, design decisions, and reflections that turn each
      sprint into visible growth.
    </p>
    <div class="home-actions ocs__links">
      <a class="ocs__btn ocs__btn--icon alert-green" href="{{ '/about/' | relative_url }}">
        <span class="ocs__btn-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-4.42 0-8 2.01-8 4.5V16h16v-1.5C16 12.01 12.42 10 8 10z"/>
          </svg>
        </span>
        <span>Explore my story</span>
      </a>
      <a class="ocs__btn ocs__btn--icon alert-yellow" href="{{ '/github-pages-learning/' | relative_url }}">
        <span class="ocs__btn-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 2.5C1 1.67 1.67 1 2.5 1H7v13H2.5A1.5 1.5 0 0 0 1 15.5v-13zM9 1h4.5c.83 0 1.5.67 1.5 1.5v13a1.5 1.5 0 0 0-1.5-1.5H9V1z"/>
          </svg>
        </span>
        <span>Open the learning guide</span>
      </a>
      <a class="ocs__btn ocs__btn--icon alert-red" href="https://github.com/ruhaanb622/portfolio">
        <span class="ocs__btn-icon" aria-hidden="true">
          <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </span>
        <span>View source</span>
      </a>
    </div>
    <div class="home-stats" aria-label="Portfolio status">
      <div class="home-stat"><strong>3 languages</strong><span>Pseudocode · Python · JavaScript</span></div>
      <div class="home-stat"><strong>1 live site</strong><span>Built with Jekyll and GitHub Actions</span></div>
      <div class="home-stat"><strong>Next build</strong><span>Tennis equipment recommender</span></div>
    </div>
  </section>

  <section class="home-section" aria-labelledby="learning-title">
    <div class="home-section-head">
      <h2 id="learning-title">GitHub Pages learning map</h2>
      <p>
        These six topics explain how my portfolio works as a system. Notebooks
        support experiments; project anatomy organizes the source; themes and
        Markdown shape the experience; Jekyll builds the site; and hacks turn
        the foundation into original work. Each card opens the matching section
        of the guide stored in this repository.
      </p>
    </div>
    <div class="learning-map">
      <a class="learning-card" style="--card-accent:#70e6ff" href="{{ site.baseurl }}/github-pages-learning/#jokes">
        <span class="card-number">01 · EXPERIMENT</span>
        <h3>Notebooks &amp; Jokes</h3>
        <p>Use executable notebooks, arrays, objects, and random output to test ideas.</p>
        <span class="card-arrow">Explore topic →</span>
      </a>
      <a class="learning-card" style="--card-accent:#b8ff6a" href="{{ site.baseurl }}/github-pages-learning/#anatomy">
        <span class="card-number">02 · STRUCTURE</span>
        <h3>Anatomy</h3>
        <p>Understand how files, front matter, layouts, assets, and configuration connect.</p>
        <span class="card-arrow">Explore topic →</span>
      </a>
      <a class="learning-card" style="--card-accent:#ff7ab8" href="{{ site.baseurl }}/github-pages-learning/#theme">
        <span class="card-number">03 · DESIGN</span>
        <h3>Theme</h3>
        <p>Extend a stable base theme with local layouts, Sass, CSS variables, and responsive components.</p>
        <span class="card-arrow">Explore topic →</span>
      </a>
      <a class="learning-card" style="--card-accent:#ffd166" href="{{ site.baseurl }}/github-pages-learning/#markdown">
        <span class="card-number">04 · CONTENT</span>
        <h3>Markdown</h3>
        <p>Combine readable documentation with semantic HTML, CSS, and JavaScript.</p>
        <span class="card-arrow">Explore topic →</span>
      </a>
      <a class="learning-card" style="--card-accent:#9e8cff" href="{{ site.baseurl }}/github-pages-learning/#jekyll">
        <span class="card-number">05 · BUILD</span>
        <h3>Jekyll</h3>
        <p>Transform source files and Liquid templates into a deployable static website.</p>
        <span class="card-arrow">Explore topic →</span>
      </a>
      <a class="learning-card" style="--card-accent:#ff916f" href="{{ site.baseurl }}/github-pages-learning/#hacks">
        <span class="card-number">06 · EXTEND</span>
        <h3>Hacks</h3>
        <p>Customize working patterns, debug failures, and document the evidence behind each improvement.</p>
        <span class="card-arrow">Explore topic →</span>
      </a>
    </div>
  </section>

  <section class="home-section" aria-labelledby="workflow-title">
    <div class="home-section-head">
      <h2 id="workflow-title">My development loop</h2>
      <p>A repeatable workflow connects the editor, version control, automation, and the published portfolio.</p>
    </div>
    <div class="workflow" aria-label="Development workflow">
      <div class="workflow-step"><strong>Plan</strong><span>Issue and evidence</span></div>
      <div class="workflow-step"><strong>Build</strong><span>VS Code and local files</span></div>
      <div class="workflow-step"><strong>Test</strong><span>Run, preview, debug</span></div>
      <div class="workflow-step"><strong>Version</strong><span>Commit and push</span></div>
      <div class="workflow-step"><strong>Verify</strong><span>Actions and Pages</span></div>
    </div>
  </section>

  <section class="home-section" aria-labelledby="tools-title">
    <div class="home-section-head">
      <h2 id="tools-title">Development environment</h2>
      <p>The tools below support writing, testing, versioning, publishing, and troubleshooting.</p>
    </div>
    <div class="tool-grid">
      <a class="tool-card" href="https://pages.opencodingsociety.com/tools/csp/">
        <span class="card-number">SETUP</span><h3>OCS Tools</h3><p>Accounts, operating system, commands, and troubleshooting references.</p><span class="card-arrow">Open setup →</span>
      </a>
      <a class="tool-card" href="https://github.com/ruhaanb622/portfolio">
        <span class="card-number">VERSION</span><h3>GitHub</h3><p>Repository, commits, issues, source history, and collaboration.</p><span class="card-arrow">View repository →</span>
      </a>
      <a class="tool-card" href="https://vscode.dev/">
        <span class="card-number">EDITOR</span><h3>VS Code</h3><p>Edit code, inspect files, debug, and use source control.</p><span class="card-arrow">Open editor →</span>
      </a>
      <a class="tool-card" href="https://github.com/ruhaanb622/portfolio/actions">
        <span class="card-number">AUTOMATE</span><h3>GitHub Actions</h3><p>Build and deploy the portfolio while exposing failures.</p><span class="card-arrow">Inspect runs →</span>
      </a>
    </div>
  </section>

  <section class="home-section" aria-labelledby="projects-title">
    <div class="home-section-head">
      <h2 id="projects-title">Selected evidence</h2>
      <p>Working pages and documentation that show coding, design, debugging, and reflection.</p>
    </div>
    <div class="project-grid">
      <a class="project-card" href="{{ '/about/' | relative_url }}">
        <span class="card-number">DESIGN + DOM</span><h3>Advanced About page</h3><p>Responsive layouts, personalized content, JavaScript-generated data, and accessible interaction.</p><span class="card-arrow">Visit page →</span>
      </a>
      <a class="project-card" href="https://github.com/ruhaanb622/portfolio/issues/1">
        <span class="card-number">ALGORITHMS</span><h3>Checkpoint 1</h3><p>One recommendation algorithm mapped across pseudocode, Python, and JavaScript.</p><span class="card-arrow">Review evidence →</span>
      </a>
      <a class="project-card" href="{{ '/snake/' | relative_url }}">
        <span class="card-number">JAVASCRIPT</span><h3>Neon Snake</h3><p>An interactive game using canvas, events, state, collision detection, and local storage.</p><span class="card-arrow">Play game →</span>
      </a>
    </div>
    <p class="home-note">
      Current direction: my team is planning a tennis racquet, string, and grip
      recommendation tool. The next evidence will connect a user questionnaire
      to transparent recommendation rules and a tested interface.
    </p>
  </section>
</div>

> **Current direction:** My team is planning a tennis racquet, string, and grip recommendation tool. The next evidence will connect a user questionnaire to transparent recommendation rules and a tested interface.
