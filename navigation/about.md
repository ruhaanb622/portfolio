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
        aspect-ratio: 16 / 10;
        object-fit: cover;
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

        .quick-facts {
            padding: 18px 20px;
        }
    }
</style>

<div class="about-page">

    <!-- INTRO -->
    <div class="about-intro">
        <h2>👋 About Me</h2>

        <p>
            Hey! I'm from India and I've lived in San Diego throughout my life.
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


    <!-- INTEREST CARDS -->
    <div class="interest-grid">

        <!-- TENNIS -->
        <div class="interest-card">
            <img
                src="https://images.unsplash.com/photo-1709790576411-42681546b6d5?auto=format&fit=crop&w=1200&q=85"
                alt="Outdoor tennis court"
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
        <div class="interest-card">
            <img
                src="https://images.unsplash.com/photo-1770471956155-0964f9f20c35?auto=format&fit=crop&w=1200&q=85"
                alt="Formula 1 race car on track"
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
        <div class="interest-card">
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
        <div class="interest-card">
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


    <!-- QUICK FACTS -->
    <div class="about-section">
        <h2>🙋 A Little More About Me</h2>

        <div class="quick-facts">
            <ul>
                <li>
                    🇮🇳 <strong>Background:</strong>
                    I'm from India
                </li>

                <li>
                    🌴 <strong>Home:</strong>
                    I've lived in San Diego throughout my life
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
    <div class="about-section">
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