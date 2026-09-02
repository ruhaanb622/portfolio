---
layout: post
title: Team Project
permalink: /team-project/
comments: true
---

<style>
.project-evidence {
  --evidence-panel: #181818;
  --evidence-border: rgba(255, 255, 255, 0.11);
  --evidence-text: #f7f9fc;
  --evidence-muted: #aeb9cb;
  --evidence-accent: #70e6ff;
  --evidence-ready: #b8ff6a;
  max-width: 1000px;
  margin: 0 auto;
  color: var(--evidence-text);
}
.evidence-hero {
  padding: 1rem 0 2rem;
}
.evidence-kicker {
  margin: 0 0 0.7rem;
  color: var(--evidence-accent);
  font-size: 0.78rem;
  font-weight: 850;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
.evidence-hero h2 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
}
.evidence-lede {
  max-width: 760px;
  margin: 1.1rem 0 0;
  color: var(--evidence-muted);
  line-height: 1.7;
}
.evidence-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 1.5rem;
}
.evidence-button {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0.4rem 0.95rem;
  border: 1px solid var(--evidence-border);
  border-radius: 999px;
  color: var(--evidence-text) !important;
  background: rgba(255, 255, 255, 0.04);
  text-decoration: none !important;
  font-weight: 750;
}
.evidence-button.primary {
  border-color: transparent;
  color: #081018 !important;
  background: var(--evidence-ready);
}
.evidence-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 1rem 0 2.5rem;
}
.evidence-card {
  padding: 1.2rem;
  border: 1px solid var(--evidence-border);
  border-radius: 16px;
  background: var(--evidence-panel);
}
.evidence-card h3 {
  margin: 0 0 0.45rem;
}
.evidence-card p {
  margin-bottom: 0;
  color: var(--evidence-muted);
  line-height: 1.55;
}
.evidence-status {
  color: var(--evidence-ready) !important;
  font-size: 0.8rem;
  font-weight: 850;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.evidence-note {
  margin: 1rem 0 2.2rem;
  padding: 1.1rem 1.3rem;
  border-left: 4px solid var(--evidence-accent);
  border-radius: 0 14px 14px 0;
  color: var(--evidence-muted);
  background: var(--evidence-panel);
}
.evidence-table {
  display: block;
  overflow-x: auto;
}
@media (max-width: 760px) {
  .evidence-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="project-evidence">
  <section class="evidence-hero">
    <p class="evidence-kicker">Individual collaboration evidence</p>
    <h2>Team workspace and my Scrum role</h2>
    <p class="evidence-lede">
      I serve as the Scrum Master / Developer for a three-person AP CSP team with
      Arya Taghavi Zargar and Deyar Raissadat. This page records my individual
      planning, development, testing, and collaboration evidence as it is completed.
    </p>
    <div class="evidence-actions">
      <a class="evidence-button primary" href="https://ruhaanb622.github.io/group-portfolio/">Group portfolio</a>
      <a class="evidence-button" href="https://github.com/ruhaanb622/group-portfolio">Group repository</a>
      <a class="evidence-button" href="https://github.com/ruhaanb622/group-portfolio/issues/1">Workspace Big Issue</a>
    </div>
  </section>

  <h2>Current role and evidence</h2>
  <div class="evidence-grid">
    <article class="evidence-card">
      <p class="evidence-status">Completed</p>
      <h3>Repository creation</h3>
      <p>I created the shared repository from the Open Coding Society portfolio template.</p>
    </article>
    <article class="evidence-card">
      <p class="evidence-status">Completed</p>
      <h3>Deployment setup</h3>
      <p>I enabled GitHub Actions so the Jekyll portfolio can build and deploy with GitHub Pages.</p>
    </article>
    <article class="evidence-card">
      <p class="evidence-status">In progress</p>
      <h3>Scrum coordination</h3>
      <p>I own the initial deployment/access check and the three-column Kanban board setup.</p>
    </article>
  </div>

  <h2>Collaboration History</h2>

  <div class="evidence-table">

  | Date | Activity | My responsibility | Evidence |
  |---|---|---|---|
  | Sept. 1, 2026 | Created the shared team portfolio repository | Repository owner and Scrum Master | [Repository](https://github.com/ruhaanb622/group-portfolio) |
  | Sept. 1, 2026 | Enabled the GitHub Pages workflow | Deployment setup | [Successful workflow](https://github.com/ruhaanb622/group-portfolio/actions/runs/33560828608) |
  | Sept. 1, 2026 | Organized the neutral workspace setup | Big Issue and task ownership | [Big Issue #1](https://github.com/ruhaanb622/group-portfolio/issues/1) |
  | Sept. 1, 2026 | Accepted initial Scrum responsibilities | Deployment/access and board setup | [Issue #2](https://github.com/ruhaanb622/group-portfolio/issues/2) · [Issue #3](https://github.com/ruhaanb622/group-portfolio/issues/3) |

  </div>

  <h2>Current responsibilities</h2>

  - Confirm the published team portfolio and teammate repository access in [issue #2](https://github.com/ruhaanb622/group-portfolio/issues/2).
  - Create the board with exactly **To Do**, **Doing**, and **Done** in [issue #3](https://github.com/ruhaanb622/group-portfolio/issues/3).
  - Maintain one owner per task and one active card per person.
  - Record blockers and their resolutions.
  - Contribute development work after the team approves a project direction.

  <h2>Function and Purpose</h2>

  <div class="evidence-note">
    The team has not selected or approved a program direction yet. The user,
    problem statement, success statement, and out-of-scope statement will be
    documented here only after that decision is made.
  </div>

  <h2>Evidence to add later</h2>

  <div class="evidence-table">

  | Required evidence | Status |
  |---|---|
  | Team-approved project direction and problem statement | Add after approval |
  | Kanban board link | Add after issue #3 is completed |
  | Idea and prototype artifacts | Add after they are created |
  | My implementation issue and pull request | Add after development begins |
  | My algorithmic or logic-based contribution | Add after implementation |
  | Link to the code proving my contribution | Add after implementation |
  | Test or demo confirming expected behavior | Add after testing |
  | Blocked task and team resolution | Add when a real blocker occurs |
  | Three user actions and expected outputs | Add after program purpose is defined |

  </div>
</div>
