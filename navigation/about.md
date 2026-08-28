---
layout: post
title: About Me
permalink: /about/
comments: true
---

<style>
    .about-page {
        max-width: 1000px;
        margin: 0 auto;
        padding: 10px 15px 40px;
    }

    .about-intro {
        text-align: center;
        max-width: 800px;
        margin: 0 auto 35px;
    }

    .about-intro h2 {
        margin-bottom: 15px;
        font-size: 2rem;
    }

    .about-intro p {
        line-height: 1.7;
        margin: 10px 0;
    }

    .photo-gallery {
        margin: 45px 0;
        scroll-margin-top: 90px;
    }

    .photo-gallery h2 {
        margin-bottom: 12px;
        text-align: center;
    }

    .photo-gallery > p {
        max-width: 700px;
        margin: 0 auto;
        color: #aeb9cb;
        line-height: 1.7;
        text-align: center;
    }

    .photo-gallery-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-top: 24px;
    }

    .photo-gallery-card {
        margin: 0;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.11);
        border-radius: 18px;
        background: #181818;
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.22);
    }

    .photo-gallery-card img {
        display: block;
        width: 100%;
        aspect-ratio: 3 / 4;
        object-fit: cover;
        transition: transform 0.35s ease;
    }

    .photo-gallery-card:hover img {
        transform: scale(1.025);
    }

    .photo-gallery-card figcaption {
        padding: 14px 16px;
        color: #aeb9cb;
        font-size: 0.9rem;
        line-height: 1.5;
    }

    .interest-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 22px;
        margin: 30px auto 45px;
    }

    .interest-card {
        background: #181818;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
        overflow: hidden;
        transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
    }

    .interest-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    }

    .interest-card img {
        width: 100%;
        aspect-ratio: 16 / 9;
        object-fit: contain;
        display: block;
    }

    .interest-content {
        padding: 18px;
    }

    .interest-content h3 {
        margin: 0 0 10px;
        font-size: 1.3rem;
    }

    .interest-content p {
        margin: 0;
        line-height: 1.6;
        opacity: 0.9;
    }

    .about-section {
        margin-top: 45px;
    }

    .about-section h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .about-section p {
        line-height: 1.7;
        max-width: 800px;
        margin: 10px auto;
    }

    .flag-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 18px;
        margin: 24px auto 0;
    }

    .flag-card {
        padding: 20px;
        text-align: center;
        background: #181818;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 14px;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .flag-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
    }

    .flag-card img {
        width: 100%;
        height: 130px;
        object-fit: contain;
        margin-bottom: 14px;
        border-radius: 6px;
    }

    .flag-card h3 {
        margin: 0 0 8px;
        font-size: 1.25rem;
    }

    .flag-card p {
        margin: 0;
        line-height: 1.5;
    }
    .roots-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; margin:24px auto 0; }
    .roots-card { position:relative; min-height:300px; overflow:hidden; border-radius:18px; border:1px solid rgba(255,255,255,.12); background:#151515; isolation:isolate; }
    .roots-card img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:-2; transition:transform .45s ease; }
    .roots-card::after { content:""; position:absolute; inset:0; z-index:-1; background:linear-gradient(180deg,transparent 20%,rgba(0,0,0,.95) 100%); }
    .roots-card:hover img { transform:scale(1.06); }
    .roots-copy { position:absolute; inset:auto 20px 20px; }
    .roots-copy span { display:inline-block; margin-bottom:8px; padding:5px 9px; border-radius:999px; background:rgba(255,255,255,.16); backdrop-filter:blur(8px); font-size:.75rem; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
    .roots-copy h3 { margin:0 0 6px; font-size:1.35rem; }
    .roots-copy p { margin:0; line-height:1.5; }
    .quick-facts {
        max-width: 700px;
        margin: 0 auto;
        background: #181818;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 14px;
        padding: 20px 30px;
    }

    .quick-facts ul {
        margin: 0;
        padding-left: 20px;
    }

    .quick-facts li {
        margin: 12px 0;
        line-height: 1.5;
    }

    @media (max-width: 700px) {
        .interest-grid {
            grid-template-columns: 1fr;
        }

        .about-intro h2 {
            font-size: 1.7rem;
        }

            .roots-grid { grid-template-columns: 1fr; }

    .quick-facts {
            padding: 18px 20px;
        }
    }

    /* Advanced portfolio enhancements */
    .about-page {
        --about-panel: #181818;
        --about-panel-2: #181818;
        --about-border: rgba(255, 255, 255, 0.11);
        --about-text: #f7f9fc;
        --about-muted: #aeb9cb;
        --about-cyan: #70e6ff;
        --about-lime: #b8ff6a;
        --about-pink: #ff7ab8;
        color: var(--about-text);
    }

    .profile-hero {
        position: relative;
        margin-bottom: 18px;
        padding: 18px 0 26px;
        border: 0;
        border-radius: 0;
        background: transparent;
    }

    .profile-kicker {
        margin: 0 0 12px;
        color: var(--about-cyan);
        font-size: 0.78rem;
        font-weight: 850;
        letter-spacing: 0.14em;
        text-transform: uppercase;
    }

    .profile-hero h1 {
        max-width: 790px;
        margin: 0;
        font-size: clamp(2rem, 4vw, 2.75rem);
        line-height: 1.12;
        letter-spacing: -0.025em;
    }

    .profile-hero h1 span { color: var(--about-lime); }

    .profile-hero > p:not(.profile-kicker) {
        max-width: 710px;
        margin: 22px 0 0;
        color: var(--about-muted);
        font-size: 1rem;
        line-height: 1.65;
    }

    .profile-actions,
    .about-jump,
    .interest-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    }

    .profile-actions { margin-top: 26px; }

    .profile-link,
    .jump-link,
    .filter-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        padding: 0 15px;
        border: 1px solid var(--about-border);
        border-radius: 999px;
        color: var(--about-text);
        background: rgba(255, 255, 255, 0.045);
        text-decoration: none;
        font-weight: 800;
        cursor: pointer;
        transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
    }

    .profile-link.primary {
        border-color: transparent;
        color: #081018;
        background: var(--about-lime);
    }

    .profile-link:hover,
    .profile-link:focus-visible,
    .jump-link:hover,
    .jump-link:focus-visible,
    .filter-button:hover,
    .filter-button:focus-visible,
    .filter-button[aria-pressed="true"] {
        transform: translateY(-2px);
        border-color: var(--about-cyan);
        background: rgba(112, 230, 255, 0.12);
    }

    .profile-link.primary:hover,
    .profile-link.primary:focus-visible { background: #d2ff9f; }

    .about-jump {
        position: sticky;
        z-index: 5;
        top: 10px;
        margin: 0 0 34px;
        padding: 10px;
        border: 1px solid var(--about-border);
        border-radius: 18px;
        background: rgba(24, 24, 24, 0.92);
        backdrop-filter: blur(16px);
    }

    .jump-link { min-height: 36px; font-size: 0.84rem; }

    .about-intro {
        padding: clamp(22px, 5vw, 38px);
        border: 1px solid var(--about-border);
        border-radius: 22px;
        background: var(--about-panel);
    }

    .interest-toolbar {
        align-items: center;
        justify-content: center;
        margin: 0 0 18px;
    }

    .filter-button { font: inherit; min-height: 38px; }

    .interest-card[hidden] { display: none; }

    .focus-grid {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 20px;
        margin-top: 45px;
    }

    .focus-card,
    .timeline-card {
        padding: clamp(22px, 4vw, 32px);
        border: 1px solid var(--about-border);
        border-radius: 22px;
        background: var(--about-panel);
    }

    .focus-card h2,
    .timeline-card h2 { margin: 0 0 12px; }

    .focus-card p,
    .timeline-card p,
    .timeline-card li { color: var(--about-muted); line-height: 1.7; }

    .build-steps {
        display: grid;
        gap: 10px;
        margin-top: 20px;
    }

    .build-step {
        display: grid;
        grid-template-columns: 36px 1fr;
        gap: 12px;
        align-items: start;
        padding: 14px;
        border: 1px solid var(--about-border);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.03);
    }

    .build-step span {
        display: grid;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        color: #081018;
        background: var(--about-lime);
        font-weight: 900;
    }

    .build-step strong { display: block; margin-bottom: 3px; }
    .build-step small { color: var(--about-muted); }

    .timeline-list {
        position: relative;
        margin: 20px 0 0;
        padding: 0;
        list-style: none;
    }

    .timeline-list::before {
        content: "";
        position: absolute;
        top: 8px;
        bottom: 8px;
        left: 7px;
        width: 2px;
        background: linear-gradient(var(--about-cyan), var(--about-pink));
    }

    .timeline-list li {
        position: relative;
        padding: 0 0 20px 32px;
    }

    .timeline-list li::before {
        content: "";
        position: absolute;
        top: 7px;
        left: 1px;
        width: 14px;
        height: 14px;
        border: 3px solid var(--about-panel);
        border-radius: 50%;
        background: var(--about-cyan);
        box-shadow: 0 0 0 1px var(--about-border);
    }

    .workflow-grid,
    .skill-grid,
    .goal-grid {
        display: grid;
        gap: 16px;
        margin-top: 22px;
    }

    .workflow-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .skill-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .goal-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .workflow-card,
    .skill-card,
    .goal-card {
        padding: 20px;
        border: 1px solid var(--about-border);
        border-radius: 18px;
        background: var(--about-panel);
    }

    .workflow-card h3,
    .skill-card h3,
    .goal-card h3 {
        margin: 8px 0;
        font-size: 1.08rem;
    }

    .workflow-card p,
    .skill-card p,
    .goal-card p {
        margin: 0;
        color: var(--about-muted);
        line-height: 1.65;
    }

    .workflow-number,
    .goal-status {
        color: var(--about-cyan);
        font-size: 0.76rem;
        font-weight: 850;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .skill-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 14px;
    }

    .skill-tag {
        display: inline-flex;
        align-items: center;
        min-height: 30px;
        padding: 4px 10px;
        border: 1px solid var(--about-border);
        border-radius: 999px;
        color: var(--about-text);
        background: rgba(255, 255, 255, 0.035);
        font-size: 0.82rem;
    }

    .evidence-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        margin-top: 20px;
    }

    .evidence-link {
        display: inline-flex;
        align-items: center;
        min-height: 40px;
        padding: 7px 14px;
        border: 1px solid var(--about-border);
        border-radius: 999px;
        color: var(--about-cyan);
        background: rgba(255, 255, 255, 0.03);
        font-weight: 750;
        text-decoration: none;
    }

    .evidence-link:hover,
    .evidence-link:focus-visible {
        border-color: var(--about-cyan);
        background: rgba(255, 255, 255, 0.06);
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    .about-section { scroll-margin-top: 90px; }

    @media (max-width: 820px) {
        .focus-grid,
        .workflow-grid,
        .goal-grid { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 560px) {
        .about-jump { position: static; }
        .jump-link { flex: 1 1 42%; }
        .focus-grid,
        .workflow-grid,
        .skill-grid,
        .goal-grid { grid-template-columns: 1fr; }
    }

    @media (prefers-reduced-motion: reduce) {
        .profile-link,
        .jump-link,
        .filter-button,
        .interest-card,
        .flag-card,
        .roots-card img { transition: none; }
    }

</style>

<div class="about-page">

    <section class="profile-hero" aria-labelledby="profile-title">
        <p class="profile-kicker">Student developer · AP CSP · San Diego</p>
        <h1 id="profile-title">Building with code, curiosity, and <span>evidence.</span></h1>
        <p>
            I’m Ruhaan Bansal. I enjoy turning interests like tennis, Formula 1,
            and gaming into opportunities to learn design, algorithms, and
            software development. This page is both my story and a working
            example of responsive CSS, accessible HTML, and JavaScript DOM
            manipulation.
        </p>
        <div class="profile-actions">
            <a class="profile-link primary" href="#current-focus">See what I’m building</a>
            <a class="profile-link" href="{{ '/github-pages-learning/' | relative_url }}">GitHub Pages guide</a>
            <a class="profile-link" href="https://github.com/ruhaanb622/portfolio">View source</a>
        </div>
    </section>

    <nav class="about-jump" aria-label="About page sections">
        <a class="jump-link" href="#story">Story</a>
        <a class="jump-link" href="#gallery">Gallery</a>
        <a class="jump-link" href="#interests">Interests</a>
        <a class="jump-link" href="#current-focus">Current focus</a>
        <a class="jump-link" href="#workflow">Workflow</a>
        <a class="jump-link" href="#goals">Goals</a>
        <a class="jump-link" href="#places">Places</a>
        <a class="jump-link" href="#roots">Roots</a>
        <a class="jump-link" href="#journey">Coding journey</a>
    </nav>

    <!-- INTRO -->
    <div class="about-intro" id="story">
        <h2>👋 About Me</h2>

        <p>
            Hey! I was born and raised here in San Diego, and my family is originally from India.
            I'm interested in technology, coding, sports, and gaming.
        </p>

        <p>
            I'm currently taking
            <strong>AP Computer Science Principles (AP CSP)</strong>.
            I started getting into computer science during my freshman year
            when I took <strong>CSSE</strong>.
        </p>

        <p>
            Since then, I've enjoyed learning how to code, building projects,
            and figuring out how technology works.
            Outside of coding, I enjoy playing <strong>tennis</strong>,
            watching <strong>Formula 1</strong>, and playing
            <strong>video games</strong>.
        </p>
    </div>


    <!-- PHOTO GALLERY -->
    <section class="photo-gallery" id="gallery" aria-labelledby="gallery-heading">
        <h2 id="gallery-heading">📷 Photo Gallery</h2>
        <p>A couple of moments from life outside the code editor.</p>
        <div class="photo-gallery-grid">
            <figure class="photo-gallery-card">
                <img
                    src="{{ '/images/about/ruhaan-outdoors-1.webp' | relative_url }}"
                    alt="Ruhaan taking a selfie outdoors under a bright blue sky"
                    width="620"
                    height="826"
                    loading="lazy"
                >
                <figcaption>Outside under a bright blue sky.</figcaption>
            </figure>
            <figure class="photo-gallery-card">
                <img
                    src="{{ '/images/about/ruhaan-outdoors-2.webp' | relative_url }}"
                    alt="Ruhaan taking a selfie outdoors wearing an Under Armour shirt"
                    width="620"
                    height="826"
                    loading="lazy"
                >
                <figcaption>A sunny day outdoors.</figcaption>
            </figure>
        </div>
    </section>


    <!-- INTEREST CARDS -->
    <div class="about-section" id="interests">
        <h2>Explore My Interests</h2>
        <p>Use the filters to focus the grid. Every card remains keyboard accessible and the layout adapts to smaller screens.</p>
        <div class="interest-toolbar" role="group" aria-label="Filter interests">
            <button class="filter-button" type="button" data-filter="all" aria-pressed="true">All</button>
            <button class="filter-button" type="button" data-filter="sport" aria-pressed="false">Sport</button>
            <button class="filter-button" type="button" data-filter="technology" aria-pressed="false">Technology</button>
            <button class="filter-button" type="button" data-filter="gaming" aria-pressed="false">Gaming</button>
        </div>
        <p class="sr-only" id="interest-status" aria-live="polite"></p>

    <div class="interest-grid" id="interest-grid">

        <!-- TENNIS -->
        <div class="interest-card" data-interest="sport">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Roger_Federer_%2826_June_2009%2C_Wimbledon%29.jpg"
                alt="Roger Federer playing at Wimbledon"
                loading="lazy"
            >

            <div class="interest-content">
                <h3>🎾 Tennis</h3>

                <p>
                    Tennis is one of my favorite sports.
                    I enjoy playing, competing, and improving my game.
                </p>
            </div>
        </div>


        <!-- FORMULA 1 -->
        <div class="interest-card" data-interest="sport">
            <img
                src="{{ '/images/verstappen-hamilton-rb16b-w12-clean.webp' | relative_url }}"
                alt="Max Verstappen in the RB16B racing Lewis Hamilton in the Mercedes W12"
                loading="lazy"
            >

            <div class="interest-content">
                <h3>🏎️ Formula 1</h3>

                <p>
                    I'm a big Formula 1 fan.
                    I like the racing, strategy, engineering,
                    speed, and technology behind the sport.
                </p>
            </div>
        </div>


        <!-- CODING -->
        <div class="interest-card" data-interest="technology">
            <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85"
                alt="Laptop displaying programming code"
                loading="lazy"
            >

            <div class="interest-content">
                <h3>💻 Coding</h3>

                <p>
                    I started coding through CSSE during freshman year.
                    Now I'm continuing with AP CSP and working on
                    different coding projects.
                </p>
            </div>
        </div>


        <!-- GAMING -->
        <div class="interest-card" data-interest="gaming">
            <img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=85"
                alt="Gaming setup"
                loading="lazy"
            >

            <div class="interest-content">
                <h3>🎮 Video Games</h3>

                <p>
                    I like playing video games in my free time.
                    I enjoy both competitive games and games where
                    I can just chill and have fun.
                </p>
            </div>
        </div>

    </div>
    </div>

    <div class="focus-grid" id="current-focus">
        <section class="focus-card">
            <p class="profile-kicker">Current build direction</p>
            <h2>Tennis equipment recommender</h2>
            <p>
                My team is planning a tool that turns player experience, playing
                style, comfort needs, and budget into explainable racquet,
                string, and grip recommendations.
            </p>
            <div class="build-steps">
                <div class="build-step"><span>1</span><div><strong>Discover</strong><small>Define questions, product attributes, and transparent rules.</small></div></div>
                <div class="build-step"><span>2</span><div><strong>Build</strong><small>Create the data model, recommendation logic, and interface.</small></div></div>
                <div class="build-step"><span>3</span><div><strong>Validate</strong><small>Test edge cases, collect feedback, and document evidence.</small></div></div>
            </div>
        </section>

        <section class="timeline-card">
            <p class="profile-kicker">Learning timeline</p>
            <h2>From first code to team software</h2>
            <ul class="timeline-list">
                <li><strong>CSSE</strong><br>Started coding and learned to create with software.</li>
                <li><strong>Checkpoint 1</strong><br>Mapped one algorithm across pseudocode, Python, and JavaScript.</li>
                <li><strong>Ground 0</strong><br>Built a repeatable VS Code, Git, GitHub, Actions, and Pages workflow.</li>
                <li><strong>Next</strong><br>Move from individual evidence to a shared team product.</li>
            </ul>
        </section>
    </div>

    <!-- DEVELOPMENT WORKFLOW -->
    <section class="about-section" id="workflow" aria-labelledby="workflow-heading">
        <h2 id="workflow-heading">How I Build</h2>
        <p>
            My best work follows a repeatable process. Each stage leaves evidence
            that helps me explain the result, recover from mistakes, and improve
            the next version instead of treating a finished page as the whole story.
        </p>

        <div class="workflow-grid">
            <article class="workflow-card">
                <span class="workflow-number">01 · Plan</span>
                <h3>Define the purpose</h3>
                <p>I begin with the user, the required outcome, and the evidence needed for review.</p>
            </article>
            <article class="workflow-card">
                <span class="workflow-number">02 · Build</span>
                <h3>Create in small steps</h3>
                <p>I use VS Code and focused changes so each part is understandable and testable.</p>
            </article>
            <article class="workflow-card">
                <span class="workflow-number">03 · Debug</span>
                <h3>Investigate the cause</h3>
                <p>I compare expected and actual behavior, isolate the failure, and retest the correction.</p>
            </article>
            <article class="workflow-card">
                <span class="workflow-number">04 · Verify</span>
                <h3>Publish with evidence</h3>
                <p>I review the diff, inspect GitHub Actions, test the live page, and document what changed.</p>
            </article>
        </div>

        <div class="skill-grid" aria-label="Skills and tools">
            <article class="skill-card">
                <h3>Languages and logic</h3>
                <p>I practice expressing the same idea clearly across different environments.</p>
                <div class="skill-tags">
                    <span class="skill-tag">JavaScript</span>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">Pseudocode</span>
                    <span class="skill-tag">Algorithms</span>
                </div>
            </article>
            <article class="skill-card">
                <h3>Portfolio development</h3>
                <p>I combine readable content, semantic structure, responsive styling, and interaction.</p>
                <div class="skill-tags">
                    <span class="skill-tag">Markdown</span>
                    <span class="skill-tag">HTML</span>
                    <span class="skill-tag">CSS</span>
                    <span class="skill-tag">Jekyll</span>
                </div>
            </article>
            <article class="skill-card">
                <h3>Engineering workflow</h3>
                <p>I connect local development to version history, automated builds, and live verification.</p>
                <div class="skill-tags">
                    <span class="skill-tag">VS Code</span>
                    <span class="skill-tag">Git</span>
                    <span class="skill-tag">GitHub</span>
                    <span class="skill-tag">Actions</span>
                </div>
            </article>
            <article class="skill-card">
                <h3>Responsible AI use</h3>
                <p>I use AI for ideas and debugging, then rerun, compare, correct, and explain the output myself.</p>
                <div class="skill-tags">
                    <span class="skill-tag">Prompting</span>
                    <span class="skill-tag">Verification</span>
                    <span class="skill-tag">Reflection</span>
                </div>
            </article>
        </div>

        <div class="evidence-links" aria-label="Development evidence">
            <a class="evidence-link" href="https://github.com/ruhaanb622/portfolio/issues/1">Checkpoint 1 evidence</a>
            <a class="evidence-link" href="https://github.com/ruhaanb622/portfolio/issues/2">Ground 0 evidence</a>
            <a class="evidence-link" href="{{ '/github-pages-learning/' | relative_url }}">GitHub Pages guide</a>
        </div>
    </section>

    <!-- NEXT GOALS -->
    <section class="about-section" id="goals" aria-labelledby="goals-heading">
        <h2 id="goals-heading">What I’m Working Toward</h2>
        <p>
            These goals move my portfolio from individual practice toward a
            collaborative product with transparent decisions and useful testing.
        </p>
        <div class="goal-grid">
            <article class="goal-card">
                <span class="goal-status">Collaboration</span>
                <h3>Build with the team</h3>
                <p>Create a shared repository and backlog, divide ownership, and use review instead of completing every part alone.</p>
            </article>
            <article class="goal-card">
                <span class="goal-status">Product</span>
                <h3>Prototype the recommender</h3>
                <p>Turn the tennis questionnaire into explainable racquet, string, and grip recommendation rules.</p>
            </article>
            <article class="goal-card">
                <span class="goal-status">Communication</span>
                <h3>Explain decisions earlier</h3>
                <p>Share progress and blockers, ask for feedback sooner, and document why each important choice was made.</p>
            </article>
        </div>
    </section>


    <!-- INTERACTIVE FLAG GRID -->
    <div class="about-section" id="places">
        <h2>Places  That Shaped Me</h2>
        <p>
            My story connects the place I call home with the culture and
            traditions my family comes from.
        </p>
        <div id="flag-grid" class="flag-grid" aria-live="polite"></div>
    </div>

    <script>
        const placesThatShapedMe = [
            {
                flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg",
                greeting: "Hey from California!",
                description: "San Diego is the city where I was born and raised."
            },
            {
                flag: "https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
                greeting: "Namaste from India!",
                description: "India is where my family is from and an important part of my heritage."
            }
        ];

        const flagGrid = document.getElementById("flag-grid");

        placesThatShapedMe.forEach((place) => {
            const card = document.createElement("article");
            card.className = "flag-card";

            const flag = document.createElement("img");
            flag.src = place.flag;
            flag.alt = `${place.greeting.replace("!", "")} flag`;
            flag.loading = "lazy";

            const greeting = document.createElement("h3");
            greeting.textContent = place.greeting;

            const description = document.createElement("p");
            description.textContent = place.description;

            card.append(flag, greeting, description);
            flagGrid.appendChild(card);
        });
    </script>

    <script>
        (function () {
            const buttons = Array.from(document.querySelectorAll("[data-filter]"));
            const cards = Array.from(document.querySelectorAll("[data-interest]"));
            const status = document.getElementById("interest-status");

            function applyFilter(filter) {
                let visible = 0;

                cards.forEach((card) => {
                    const show = filter === "all" || card.dataset.interest === filter;
                    card.hidden = !show;
                    if (show) visible += 1;
                });

                buttons.forEach((button) => {
                    button.setAttribute(
                        "aria-pressed",
                        String(button.dataset.filter === filter)
                    );
                });

                status.textContent = visible + " interest cards displayed.";
            }

            buttons.forEach((button) => {
                button.addEventListener("click", () => {
                    applyFilter(button.dataset.filter);
                });
            });

            applyFilter("all");
        })();
    </script>
    <!-- ROOTS AND FAVORITES -->
    <div class="about-section" id="roots">
        <h2>Roots &amp; Favorites</h2>
        <p>San Diego is home, my Indian heritage is a big part of who I am, and paneer tikka masala with warm naan is my all-time favorite meal.</p>
        <div class="roots-grid">
            <article class="roots-card">
                <img src="https://images.unsplash.com/photo-1603725117928-6f09697f34aa?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="San Diego skyline across the bay" loading="lazy">
                <div class="roots-copy"><span>Born &amp; raised</span><h3>San Diego, California</h3><p>Sunny skies, the coast, and the city I have always called home.</p></div>
            </article>
            <article class="roots-card">
                <img src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&amp;fit=crop&amp;w=1200&amp;q=85" alt="The Taj Mahal in India" loading="lazy">
                <div class="roots-copy"><span>My heritage</span><h3>Indian roots</h3><p>My family is originally from India, a culture I am proud to be connected to.</p></div>
            </article>
            <article class="roots-card">
                <img src="https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala-Recipe-676x1024.jpg" alt="Paneer tikka masala served with naan" loading="lazy">
                <div class="roots-copy"><span>Favorite food</span><h3>Paneer tikka masala + naan</h3><p>Rich, spicy, creamy, and even better with fresh naan.</p></div>
            </article>
        </div>
    </div>
    <!-- QUICK FACTS -->
    <div class="about-section">
        <h2>🙋 A Little More About Me</h2>

        <div class="quick-facts">
            <ul>
                <li>
                    🇮🇳 <strong>Background:</strong>
                    My family is originally from India
                </li>

                <li>
                    🌴 <strong>Home:</strong>
                    I was born and raised in San Diego
                </li>

                <li>
                    💻 <strong>Current Class:</strong>
                    AP Computer Science Principles
                </li>

                <li>
                    👨‍💻 <strong>Computer Science:</strong>
                    Took CSSE during freshman year
                </li>

                <li>
                    🎾 <strong>Sport:</strong>
                    Tennis
                </li>

                <li>
                    🏎️ <strong>Motorsport:</strong>
                    Formula 1
                </li>

                <li>
                    🎮 <strong>Free Time:</strong>
                    Playing video games
                </li>

                <li>
                    🚀 <strong>I Enjoy:</strong>
                    Coding, technology, and building projects
                </li>
            </ul>
        </div>
    </div>


    <!-- CODING JOURNEY -->
    <div class="about-section" id="journey">
        <h2>💻 My Coding Journey</h2>

        <p>
            My interest in computer science started during my freshman year
            when I took CSSE. I liked being able to use code to solve problems
            and create things of my own.
        </p>

        <p>
            Now I'm taking AP CSP and continuing to learn more about
            programming, algorithms, data, the internet, and how computer
            science is used in the real world.
        </p>

        <p>
            I want to keep improving my coding skills and build more projects
            as I learn.
        </p>
    </div>


    <!-- OUTSIDE CODING -->
    <div class="about-section">
        <h2>🎾 🏎️ 🎮 Outside of Coding</h2>

        <p>
            When I'm not coding, I like playing tennis, watching Formula 1,
            and playing video games.
        </p>

        <p>
            I enjoy the competition in tennis and gaming, and I like Formula 1
            because it combines racing with strategy, engineering,
            and technology.
        </p>
    </div>

</div>
