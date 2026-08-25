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
</style>

<div class="about-page">

    <!-- INTRO -->
    <div class="about-intro">
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


    <!-- INTEREST CARDS -->
    <div class="interest-grid">

        <!-- TENNIS -->
        <div class="interest-card">
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
        <div class="interest-card">
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



    <!-- INTERACTIVE FLAG GRID -->
    <div class="about-section">
        <h2>Places That Shaped Me</h2>
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
    <!-- ROOTS AND FAVORITES -->
    <div class="about-section">
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
