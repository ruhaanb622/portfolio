---
layout: post
title: GitHub Pages Learning Guide
permalink: /github-pages-learning/
comments: true
---

<style>
.learning-guide {
  --guide-panel: #181818;
  --guide-border: rgba(255,255,255,.11);
  --guide-text: #f5f7fb;
  --guide-muted: #aeb8ca;
  --guide-accent: #71e5ff;
  --guide-accent-2: #b8ff6a;
  max-width: 980px;
  margin: 0 auto;
  color: var(--guide-text);
}
.guide-hero {
  position: relative;
  overflow: hidden;
  padding: 18px 0 28px;
  border: 0;
  border-radius: 0;
  background: transparent;
}
.guide-kicker {
  margin: 0 0 10px;
  color: var(--guide-accent);
  font-size: .78rem;
  font-weight: 800;
  letter-spacing: .13em;
  text-transform: uppercase;
}
.guide-hero h2 {
  max-width: 700px;
  margin: 0;
  font-size: clamp(2rem, 6vw, 4rem);
  line-height: 1.02;
}
.guide-hero p {
  max-width: 720px;
  margin: 20px 0 0;
  color: var(--guide-muted);
  font-size: 1.05rem;
  line-height: 1.75;
}
.guide-nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 22px 0 36px;
}
.guide-nav a {
  padding: 14px 16px;
  border: 1px solid var(--guide-border);
  border-radius: 14px;
  color: var(--guide-text);
  background: rgba(255,255,255,.035);
  text-decoration: none;
  font-weight: 750;
  transition: transform .2s ease, border-color .2s ease, background .2s ease;
}
.guide-nav a:hover,
.guide-nav a:focus-visible {
  transform: translateY(-2px);
  border-color: var(--guide-accent);
  background: rgba(255,255,255,.06);
}
.guide-topic {
  margin: 18px 0;
  padding: clamp(22px, 4vw, 34px);
  scroll-margin-top: 90px;
  border: 1px solid var(--guide-border);
  border-radius: 22px;
  background: var(--guide-panel);
}
.guide-topic h3 {
  margin: 0 0 10px;
  font-size: 1.45rem;
}
.guide-topic p,
.guide-topic li {
  color: var(--guide-muted);
  line-height: 1.7;
}
.guide-topic a {
  color: var(--guide-accent);
  font-weight: 750;
}
.guide-takeaway {
  margin-top: 18px;
  padding: 14px 16px;
  border-left: 3px solid var(--guide-accent-2);
  border-radius: 0 12px 12px 0;
  background: rgba(184,255,106,.07);
}
@media (max-width: 720px) {
  .guide-nav { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 460px) {
  .guide-nav { grid-template-columns: 1fr; }
}
@media (prefers-reduced-motion: reduce) {
  .guide-nav a { transition: none; }
}
</style>

<div class="learning-guide">
  <section class="guide-hero">
    <p class="guide-kicker">GitHub Pages · Learning Experience Design</p>
    <h2>How the pieces of a portfolio fit together</h2>
    <p>
      This page keeps my GitHub Pages learning map inside my own repository.
      The six topics move from content and project structure to styling, build
      automation, and hands-on extensions. Together they explain why my
      portfolio uses Markdown, HTML, CSS, JavaScript, Liquid, Jekyll, and
      GitHub Actions instead of treating each tool as an isolated skill.
    </p>
  </section>

  <nav class="guide-nav" aria-label="GitHub Pages learning topics">
    <a href="#jokes">Notebooks &amp; Jokes</a>
    <a href="#anatomy">Anatomy</a>
    <a href="#theme">Theme</a>
    <a href="#markdown">Markdown</a>
    <a href="#jekyll">Jekyll</a>
    <a href="#hacks">Hacks</a>
  </nav>

  <section class="guide-topic" id="jokes">
    <h3>01 · Notebooks &amp; Jokes</h3>
    <p>
      Jupyter notebooks make it possible to combine explanation, executable
      code, and visible output. The jokes activity demonstrates JavaScript
      arrays, objects, random selection, console output, and small interactive
      HTML components while also teaching where notebook files belong.
    </p>
    <ul>
      <li>Code and explanation can live in one repeatable document.</li>
      <li>Arrays and objects organize data that JavaScript can select and display.</li>
      <li>Notebook output is useful for testing before a feature becomes part of a page.</li>
    </ul>
    <p class="guide-takeaway"><strong>My takeaway:</strong> notebooks are a safe place to experiment, explain failures, and preserve working examples.</p>
    <a href="https://pages.opencodingsociety.com/github/pages/jokes">Read the official Notebooks &amp; Jokes reference →</a>
  </section>

  <section class="guide-topic" id="anatomy">
    <h3>02 · Anatomy of GitHub Pages</h3>
    <p>
      A GitHub Pages project is a connected system. The homepage, configuration,
      layouts, posts, notebooks, images, data, scripts, and ignore rules all
      participate in the build. Front matter selects a layout, Liquid creates
      portable paths, and GitHub Actions turns the source into a published site.
    </p>
    <ul>
      <li><strong>index.md</strong> provides the home-page source.</li>
      <li><strong>_config.yml</strong> stores site-wide Jekyll settings.</li>
      <li><strong>site.baseurl</strong> keeps links correct locally and after deployment.</li>
    </ul>
    <p class="guide-takeaway"><strong>My takeaway:</strong> file location and configuration matter as much as the visible HTML.</p>
    <a href="https://pages.opencodingsociety.com/github/pages/anatomy">Read the official Anatomy reference →</a>
  </section>

  <section class="guide-topic" id="theme">
    <h3>03 · Theme and Layout</h3>
    <p>
      Themes provide a base design while local layouts and styles provide
      customization. A project can keep the stability of a remote theme and
      still add its own responsive components, color system, spacing, motion,
      and accessibility rules.
    </p>
    <ul>
      <li>Remote themes provide defaults.</li>
      <li>Local layouts and Sass can override only what the portfolio needs.</li>
      <li>CSS variables make a visual system consistent and easier to maintain.</li>
    </ul>
    <p class="guide-takeaway"><strong>My takeaway:</strong> good customization extends a theme deliberately instead of fighting every default.</p>
    <a href="https://pages.opencodingsociety.com/github/pages/theme">Read the official Theme reference →</a>
  </section>

  <section class="guide-topic" id="markdown">
    <h3>04 · Markdown, HTML, CSS, and JavaScript</h3>
    <p>
      Markdown is efficient for headings, lists, links, and explanations. HTML
      provides semantic structure, CSS controls presentation, and JavaScript
      adds behavior. Jekyll lets all four work together in one portfolio.
    </p>
    <ul>
      <li>Markdown keeps documentation readable in source form.</li>
      <li>HTML creates richer page structure and accessibility landmarks.</li>
      <li>CSS handles layout and responsive design; JavaScript handles interaction.</li>
    </ul>
    <p class="guide-takeaway"><strong>My takeaway:</strong> I choose the simplest language that fits each part of the page.</p>
    <a href="https://pages.opencodingsociety.com/github/pages/markdown">Read the official Markdown reference →</a>
  </section>

  <section class="guide-topic" id="jekyll">
    <h3>05 · Jekyll</h3>
    <p>
      Jekyll is the static-site generator behind the portfolio. It reads
      configuration and front matter, processes Markdown and Liquid, applies
      layouts, and produces the HTML that GitHub Pages deploys.
    </p>
    <ul>
      <li>Front matter supplies metadata such as title, layout, and permalink.</li>
      <li>Liquid creates reusable values and deployment-safe URLs.</li>
      <li>GitHub Actions automates the build and exposes errors that need debugging.</li>
    </ul>
    <p class="guide-takeaway"><strong>My takeaway:</strong> the published page is the result of a build pipeline, not just one source file.</p>
    <a href="https://pages.opencodingsociety.com/github/pages/jekyll">Read the official Jekyll reference →</a>
  </section>

  <section class="guide-topic" id="hacks">
    <h3>06 · Hacks and Extensions</h3>
    <p>
      Hacks are where foundational knowledge becomes something original. They
      involve copying only what is useful, changing data and design, testing
      assumptions, debugging failures, and documenting why the final version is
      different from the starting template.
    </p>
    <ul>
      <li>Start with a working pattern and identify the parts that can change safely.</li>
      <li>Personalize content, visuals, behavior, and evidence.</li>
      <li>Test locally and through GitHub Actions before calling the work complete.</li>
    </ul>
    <p class="guide-takeaway"><strong>My takeaway:</strong> a hack is strongest when I can explain both the customization and the debugging process.</p>
    <a href="https://pages.opencodingsociety.com/github/pages/hacks">Read the official Hacks reference →</a>
  </section>
</div>
