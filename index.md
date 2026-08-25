---
layout: post
title: Portfolio Home
hide: true
show_reading_time: false
---

<style>
.portfolio-home {
  --home-bg: #090d15;
  --home-panel: #111827;
  --home-panel-2: #151d2b;
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
  margin-top: auto;
  padding-top: 18px;
  color: var(--card-accent, var(--home-cyan));
  font-weight: 850;
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
    <div class="home-actions">
      <a class="home-button primary" href="{{ '/about/' | relative_url }}">Explore my story</a>
      <a class="home-button" href="{{ '/github-pages-learning/' | relative_url }}">Open the learning guide</a>
      <a class="home-button" href="https://github.com/ruhaanb622/portfolio">View source</a>
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
