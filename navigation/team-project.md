---
layout: post
title: Team Project
permalink: /team-project/
comments: true
---

<style>
.project-evidence {
  --panel: #171b24;
  --panel-soft: #11151d;
  --border: rgba(255, 255, 255, 0.11);
  --text: #f7f9fc;
  --muted: #abb6c8;
  --cyan: #70e6ff;
  --lime: #b8ff6a;
  --amber: #ffd479;
  max-width: 1020px;
  margin: 0 auto;
  color: var(--text);
}
.project-evidence * {
  box-sizing: border-box;
}
.evidence-hero {
  padding: 1.5rem 0 2.75rem;
}
.evidence-kicker {
  margin: 0 0 0.75rem;
  color: var(--cyan);
  font-size: 0.76rem;
  font-weight: 850;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
.evidence-hero h1 {
  max-width: 780px;
  margin: 0;
  font-size: clamp(2.25rem, 6vw, 4.25rem);
  line-height: 1.04;
  letter-spacing: -0.045em;
}
.evidence-lede {
  max-width: 760px;
  margin: 1.2rem 0 0;
  color: var(--muted);
  font-size: 1.02rem;
  line-height: 1.7;
}
.evidence-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.6rem;
}
.evidence-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 0.45rem 1rem;
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text) !important;
  background: rgba(255, 255, 255, 0.045);
  text-decoration: none !important;
  font-weight: 780;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}
.evidence-button:hover,
.evidence-button:focus-visible {
  transform: translateY(-2px);
  border-color: var(--cyan);
  background: rgba(112, 230, 255, 0.1);
}
.evidence-button.primary {
  border-color: transparent;
  color: #07130f !important;
  background: var(--lime);
}
.evidence-section {
  margin: 0 0 3.25rem;
}
.section-heading {
  margin: 0 0 1rem;
}
.section-heading h2 {
  margin: 0;
  font-size: clamp(1.45rem, 3vw, 2rem);
  letter-spacing: -0.02em;
}
.section-heading p {
  max-width: 720px;
  margin: 0.45rem 0 0;
  color: var(--muted);
  line-height: 1.6;
}
.summary-grid,
.future-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.summary-card,
.future-card {
  min-width: 0;
  padding: 1.2rem;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: linear-gradient(145deg, var(--panel), var(--panel-soft));
}
.summary-card h3,
.future-card h3 {
  margin: 0.5rem 0 0.45rem;
  font-size: 1.02rem;
}
.summary-card p,
.future-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}
.status {
  display: inline-flex;
  align-items: center;
  min-height: 26px;
  padding: 0.18rem 0.58rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.status.done {
  color: #07130f;
  background: var(--lime);
}
.status.active {
  color: #081018;
  background: var(--cyan);
}
.status.later {
  color: #1c1300;
  background: var(--amber);
}
.timeline {
  position: relative;
  display: grid;
  gap: 0.85rem;
}
.timeline::before {
  position: absolute;
  top: 20px;
  bottom: 20px;
  left: 15px;
  width: 2px;
  background: rgba(112, 230, 255, 0.26);
  content: "";
}
.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 112px minmax(0, 1fr);
  gap: 1.1rem;
  padding: 1.1rem 1.2rem 1.1rem 2.7rem;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--panel);
}
.timeline-item::before {
  position: absolute;
  top: 24px;
  left: 10px;
  width: 12px;
  height: 12px;
  border: 3px solid var(--panel);
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 0 1px rgba(112, 230, 255, 0.45);
  content: "";
}
.timeline-date {
  color: var(--cyan);
  font-size: 0.82rem;
  font-weight: 800;
}
.timeline-copy h3 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}
.timeline-copy p {
  margin: 0;
  color: var(--muted);
  line-height: 1.55;
}
.timeline-copy a {
  display: inline-block;
  margin-top: 0.55rem;
  color: var(--cyan);
  font-weight: 750;
}
.responsibility-list {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.responsibility-list li {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  gap: 0.85rem;
  align-items: start;
  padding: 1rem 1.1rem;
  border: 1px solid var(--border);
  border-radius: 14px;
  color: var(--muted);
  background: var(--panel);
  line-height: 1.55;
}
.responsibility-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  color: #081018;
  background: var(--cyan);
  font-weight: 900;
}
.responsibility-list a {
  color: var(--cyan);
  font-weight: 750;
}
.purpose-note {
  padding: 1.2rem 1.3rem;
  border: 1px solid var(--border);
  border-left: 4px solid var(--cyan);
  border-radius: 14px;
  color: var(--muted);
  background: var(--panel);
  line-height: 1.65;
}
.future-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.future-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 1rem;
  align-items: start;
}
.future-card h3 {
  margin-top: 0;
}
@media (max-width: 760px) {
  .summary-grid,
  .future-grid {
    grid-template-columns: 1fr;
  }
  .timeline-item {
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }
  .evidence-actions {
    display: grid;
  }
  .evidence-button {
    width: 100%;
  }
}
</style>

<div class="project-evidence">
  <header class="evidence-hero">
    <p class="evidence-kicker">Individual collaboration evidence</p>
    <h1>Team workspace and my Scrum role</h1>
    <p class="evidence-lede">
      I serve as the Scrum Master / Developer for a three-person AP CSP team with
      Arya Taghavi Zargar and Deyar Raissadat. This page records my individual
      planning, development, testing, and collaboration evidence as it is completed.
    </p>
    <nav class="evidence-actions" aria-label="Team evidence links">
      <a class="evidence-button primary" href="https://ruhaanb622.github.io/group-portfolio/">Group portfolio</a>
      <a class="evidence-button" href="https://github.com/ruhaanb622/group-portfolio">Group repository</a>
      <a class="evidence-button" href="https://github.com/ruhaanb622/group-portfolio/issues/1">Workspace Big Issue</a>
    </nav>
  </header>

  <section class="evidence-section" aria-labelledby="current-evidence">
    <div class="section-heading">
      <h2 id="current-evidence">Current role and evidence</h2>
      <p>Confirmed setup work only. Project-specific work will be recorded after approval.</p>
    </div>
    <div class="summary-grid">
      <article class="summary-card">
        <span class="status done">Completed</span>
        <h3>Repository creation</h3>
        <p>I created the shared repository from the Open Coding Society portfolio template.</p>
      </article>
      <article class="summary-card">
        <span class="status done">Completed</span>
        <h3>Deployment setup</h3>
        <p>I enabled GitHub Actions so the Jekyll portfolio builds and deploys with GitHub Pages.</p>
      </article>
      <article class="summary-card">
        <span class="status active">In progress</span>
        <h3>Scrum coordination</h3>
        <p>I own the deployment/access check and the three-column Kanban board setup.</p>
      </article>
    </div>
  </section>

  <section class="evidence-section" aria-labelledby="collaboration-history">
    <div class="section-heading">
      <h2 id="collaboration-history">Collaboration History</h2>
      <p>A chronological record of my confirmed setup and coordination work.</p>
    </div>
    <div class="timeline">
      <article class="timeline-item">
        <div class="timeline-date">Sept. 1, 2026</div>
        <div class="timeline-copy">
          <h3>Created the shared portfolio repository</h3>
          <p>Acted as repository owner and Scrum Master during initial setup.</p>
          <a href="https://github.com/ruhaanb622/group-portfolio">View repository →</a>
        </div>
      </article>
      <article class="timeline-item">
        <div class="timeline-date">Sept. 1, 2026</div>
        <div class="timeline-copy">
          <h3>Enabled the deployment workflow</h3>
          <p>Configured GitHub Actions and confirmed a successful Pages deployment.</p>
          <a href="https://github.com/ruhaanb622/group-portfolio/actions/runs/33560828608">View workflow →</a>
        </div>
      </article>
      <article class="timeline-item">
        <div class="timeline-date">Sept. 1, 2026</div>
        <div class="timeline-copy">
          <h3>Organized the workspace setup</h3>
          <p>Established the neutral Big Issue and linked setup-task structure.</p>
          <a href="https://github.com/ruhaanb622/group-portfolio/issues/1">View Big Issue →</a>
        </div>
      </article>
      <article class="timeline-item">
        <div class="timeline-date">Sept. 1, 2026</div>
        <div class="timeline-copy">
          <h3>Accepted initial Scrum responsibilities</h3>
          <p>Own the deployment/access check and the three-column board setup.</p>
          <a href="https://github.com/ruhaanb622/group-portfolio/issues/2">Issue #2</a>
          <span aria-hidden="true"> · </span>
          <a href="https://github.com/ruhaanb622/group-portfolio/issues/3">Issue #3</a>
        </div>
      </article>
    </div>
  </section>

  <section class="evidence-section" aria-labelledby="responsibilities">
    <div class="section-heading">
      <h2 id="responsibilities">Current responsibilities</h2>
      <p>Active responsibilities for the repository-setup phase.</p>
    </div>
    <ol class="responsibility-list">
      <li>
        <span class="responsibility-number">1</span>
        <div>Confirm the published portfolio and teammate repository access in <a href="https://github.com/ruhaanb622/group-portfolio/issues/2">issue #2</a>.</div>
      </li>
      <li>
        <span class="responsibility-number">2</span>
        <div>Create a board with exactly <strong>To Do</strong>, <strong>Doing</strong>, and <strong>Done</strong> in <a href="https://github.com/ruhaanb622/group-portfolio/issues/3">issue #3</a>.</div>
      </li>
      <li>
        <span class="responsibility-number">3</span>
        <div>Maintain one owner per task and no more than one active card per person.</div>
      </li>
      <li>
        <span class="responsibility-number">4</span>
        <div>Record real blockers, team resolutions, and future development evidence.</div>
      </li>
    </ol>
  </section>

  <section class="evidence-section" aria-labelledby="function-purpose">
    <div class="section-heading">
      <h2 id="function-purpose">Function and Purpose</h2>
    </div>
    <div class="purpose-note">
      The team has not selected or approved a program direction yet. The user,
      problem statement, success statement, and out-of-scope statement will be
      documented here only after that decision is made.
    </div>
  </section>

  <section class="evidence-section" aria-labelledby="later-evidence">
    <div class="section-heading">
      <h2 id="later-evidence">Evidence to add later</h2>
      <p>These items remain intentionally incomplete and will be updated only when real evidence exists.</p>
    </div>
    <div class="future-grid">
      <article class="future-card">
        <div><h3>Project direction</h3><p>Team-approved user, problem, success statement, and scope.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>Kanban board</h3><p>Link after issue #3 is completed.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>Idea and prototype</h3><p>Storyboard, wireframe, mockup, or other approved artifacts.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>Implementation</h3><p>My development issue, branch, code, and reviewed pull request.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>Logic contribution</h3><p>My algorithmic feature and direct link to its implementation.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>Test or demo</h3><p>Evidence confirming that my contribution behaves as expected.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>Blocker and resolution</h3><p>A real blocked task and how the team resolved it.</p></div>
        <span class="status later">Later</span>
      </article>
      <article class="future-card">
        <div><h3>User actions</h3><p>Three user actions and their expected program outputs.</p></div>
        <span class="status later">Later</span>
      </article>
    </div>
  </section>
</div>
