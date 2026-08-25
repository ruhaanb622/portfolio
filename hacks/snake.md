---
layout: opencs
title: Neon Snake
permalink: /snake/
---

<style>
.snake-page{--lime:#8cff00;--cyan:#00e5ff;--ink:#05070d;max-width:860px;margin:0 auto;padding:22px 14px 50px;color:#f5f7ff;font-family:Inter,system-ui,sans-serif}
.snake-hero{text-align:center;margin-bottom:20px}.snake-kicker{color:var(--lime);font-size:.75rem;font-weight:900;letter-spacing:.22em;text-transform:uppercase}.snake-hero h1{margin:5px 0;font-size:clamp(2.5rem,8vw,5rem);line-height:.9;text-transform:uppercase;font-style:italic;text-shadow:0 0 26px rgba(140,255,0,.35)}.snake-hero p{margin:10px auto 0;max-width:560px;color:#aab2c8}
.arcade{padding:clamp(12px,3vw,24px);border:1px solid rgba(140,255,0,.28);border-radius:26px;background:radial-gradient(circle at 50% 0,rgba(0,229,255,.13),transparent 38%),linear-gradient(145deg,#101521,#070910);box-shadow:0 28px 80px rgba(0,0,0,.48),inset 0 1px rgba(255,255,255,.06)}
.snake-stats{display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:center;margin-bottom:14px}.stat{padding:10px 14px;border:1px solid #252d41;border-radius:13px;background:#090c14}.stat:last-child{text-align:right}.stat small{display:block;color:#727d99;font-size:.65rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.stat strong{font:900 1.35rem ui-monospace,SFMono-Regular,monospace;color:var(--lime)}.live-pill{padding:7px 11px;border-radius:999px;background:rgba(140,255,0,.1);color:var(--lime);font-size:.7rem;font-weight:900;letter-spacing:.1em;text-transform:uppercase}
.game-shell{position:relative;max-width:600px;margin:auto;border:2px solid #283249;border-radius:18px;overflow:hidden;background:#05070d;box-shadow:0 0 36px rgba(0,229,255,.1)}#snake{display:block;width:100%;height:auto;aspect-ratio:1;outline:none;touch-action:none}
.game-overlay{position:absolute;inset:0;display:grid;place-items:center;padding:25px;text-align:center;background:rgba(3,5,10,.78);backdrop-filter:blur(8px)}.game-overlay[hidden]{display:none}.panel{max-width:410px}.panel-icon{font-size:3rem;filter:drop-shadow(0 0 15px rgba(140,255,0,.5))}.panel h2{margin:7px 0;font-size:clamp(1.8rem,6vw,3rem);text-transform:uppercase}.panel p{color:#aab2c8;line-height:1.55}.game-btn{border:0;border-radius:12px;padding:12px 20px;background:var(--lime);color:#071000;font-weight:950;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;box-shadow:0 0 22px rgba(140,255,0,.25);transition:.2s}.game-btn:hover{transform:translateY(-2px);box-shadow:0 0 32px rgba(140,255,0,.48)}
.game-toolbar{display:flex;justify-content:center;gap:10px;flex-wrap:wrap;margin:15px 0}.tool-btn{border:1px solid #30394e;border-radius:10px;padding:9px 14px;background:#111624;color:#dfe5f5;font-weight:750;cursor:pointer}.tool-btn:hover{border-color:var(--cyan);color:var(--cyan)}.speed-group{display:inline-flex;padding:3px;border:1px solid #30394e;border-radius:10px;background:#090c14}.speed-btn{border:0;border-radius:7px;padding:6px 10px;background:transparent;color:#818ba4;cursor:pointer}.speed-btn.active{background:#263047;color:#fff}
.dpad{display:none;grid-template-columns:repeat(3,58px);grid-template-rows:repeat(2,48px);justify-content:center;gap:7px;margin-top:12px}.dpad button{border:1px solid #35405a;border-radius:11px;background:#131a29;color:#fff;font-size:1.25rem;touch-action:manipulation}.dpad .up{grid-column:2}.dpad .left{grid-column:1}.dpad .down{grid-column:2}.dpad .right{grid-column:3}.snake-tip{text-align:center;color:#6f7890;font-size:.78rem;margin:12px 0 0}@media(max-width:700px){.dpad{display:grid}.snake-stats{grid-template-columns:1fr 1fr}.live-pill{display:none}.snake-page{padding-inline:4px}}
</style>

<div class="snake-page">
  <header class="snake-hero"><div class="snake-kicker">Arcade protocol 01</div><h1>Neon Snake</h1><p>Eat the energy cores, build your chain, and survive as the arena gets faster.</p></header>
  <section class="arcade" aria-label="Neon Snake game">
    <div class="snake-stats"><div class="stat"><small>Score</small><strong id="score_value">000</strong></div><div class="live-pill" id="status-pill">Ready</div><div class="stat"><small>High score</small><strong id="high_score">000</strong></div></div>
    <div class="game-shell">
      <canvas id="snake" width="600" height="600" tabindex="0" aria-label="Snake game board"></canvas>
      <div class="game-overlay" id="game-overlay"><div class="panel"><div class="panel-icon">⚡</div><h2 id="overlay-title">Ready?</h2><p id="overlay-copy">Use the arrow keys or WASD. Grab glowing energy cores without hitting the walls or yourself.</p><button class="game-btn" id="start-game">Start run</button></div></div>
    </div>
    <div class="game-toolbar"><button class="tool-btn" id="pause-game">Pause</button><button class="tool-btn" id="restart-game">Restart</button><div class="speed-group" aria-label="Game speed"><button class="speed-btn" data-speed="125">Chill</button><button class="speed-btn active" data-speed="85">Rush</button><button class="speed-btn" data-speed="55">Turbo</button></div></div>
    <div class="dpad" aria-label="Touch controls"><button class="up" data-dir="0">↑</button><button class="left" data-dir="3">←</button><button class="down" data-dir="2">↓</button><button class="right" data-dir="1">→</button></div>
    <p class="snake-tip">Arrow keys / WASD to move · Space to pause · R to restart</p>
  </section>
</div>

<script>
(()=>{
const canvas=document.getElementById('snake'),ctx=canvas.getContext('2d'),overlay=document.getElementById('game-overlay'),title=document.getElementById('overlay-title'),copy=document.getElementById('overlay-copy'),start=document.getElementById('start-game'),pause=document.getElementById('pause-game'),restart=document.getElementById('restart-game'),scoreEl=document.getElementById('score_value'),highEl=document.getElementById('high_score'),status=document.getElementById('status-pill');
const cells=30,size=canvas.width/cells;let snake=[],dir=1,nextDir=1,food={x:22,y:15},score=0,high=Number(localStorage.getItem('neonSnakeHigh')||0),speed=85,timer=null,running=false,paused=false;
const pad=n=>String(n).padStart(3,'0');highEl.textContent=pad(high);
function background(){ctx.fillStyle='#050810';ctx.fillRect(0,0,600,600);ctx.strokeStyle='rgba(0,229,255,.055)';ctx.lineWidth=1;for(let i=0;i<=cells;i++){ctx.beginPath();ctx.moveTo(i*size,0);ctx.lineTo(i*size,600);ctx.stroke();ctx.beginPath();ctx.moveTo(0,i*size);ctx.lineTo(600,i*size);ctx.stroke()}}
function rounded(x,y,w,h,r){ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill()}
function draw(){background();const pulse=8+Math.sin(Date.now()/120)*3;ctx.shadowColor='#ff397d';ctx.shadowBlur=pulse;ctx.fillStyle='#ff397d';ctx.beginPath();ctx.arc(food.x*size+size/2,food.y*size+size/2,size*.31,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;snake.forEach((part,i)=>{ctx.shadowColor=i===0?'#d9ff7a':'#8cff00';ctx.shadowBlur=i===0?16:7;ctx.fillStyle=i===0?'#d9ff7a':`hsl(${92+i*.8} 100% ${Math.max(42,62-i*.5)}%)`;rounded(part.x*size+2,part.y*size+2,size-4,size-4,5)});ctx.shadowBlur=0}
function placeFood(){do{food={x:Math.floor(Math.random()*cells),y:Math.floor(Math.random()*cells)}}while(snake.some(p=>p.x===food.x&&p.y===food.y))}
function setScore(){scoreEl.textContent=pad(score);if(score>high){high=score;highEl.textContent=pad(high);localStorage.setItem('neonSnakeHigh',high)}}
function end(){running=false;clearTimeout(timer);status.textContent='Game over';title.textContent='Run over';copy.textContent=`You scored ${score}. Your chain reached ${snake.length} segments.`;start.textContent='Run it back';overlay.hidden=false}
function tick(){if(!running||paused)return;dir=nextDir;const head={...snake[0]};if(dir===0)head.y--;if(dir===1)head.x++;if(dir===2)head.y++;if(dir===3)head.x--;if(head.x<0||head.x>=cells||head.y<0||head.y>=cells||snake.some(p=>p.x===head.x&&p.y===head.y)){end();return}snake.unshift(head);if(head.x===food.x&&head.y===food.y){score+=10;setScore();placeFood()}else snake.pop();draw();timer=setTimeout(tick,Math.max(38,speed-Math.floor(score/50)*3))}
function newGame(){clearTimeout(timer);snake=[{x:8,y:15},{x:7,y:15},{x:6,y:15},{x:5,y:15}];dir=1;nextDir=1;score=0;setScore();placeFood();running=true;paused=false;overlay.hidden=true;pause.textContent='Pause';status.textContent='Live';draw();canvas.focus();timer=setTimeout(tick,speed)}
function change(d){if(!running)return;if((d+2)%4!==dir)nextDir=d}
function togglePause(){if(!running)return;paused=!paused;pause.textContent=paused?'Resume':'Pause';status.textContent=paused?'Paused':'Live';if(paused){clearTimeout(timer);title.textContent='Paused';copy.textContent='Take a breath. Your run is waiting.';start.textContent='Resume';overlay.hidden=false}else{overlay.hidden=true;timer=setTimeout(tick,speed)}}
start.addEventListener('click',()=>paused?togglePause():newGame());restart.addEventListener('click',newGame);pause.addEventListener('click',togglePause);document.querySelectorAll('.speed-btn').forEach(b=>b.addEventListener('click',()=>{speed=Number(b.dataset.speed);document.querySelectorAll('.speed-btn').forEach(x=>x.classList.toggle('active',x===b));if(running&&!paused){clearTimeout(timer);timer=setTimeout(tick,speed)}}));document.querySelectorAll('[data-dir]').forEach(b=>{const go=e=>{e.preventDefault();change(Number(b.dataset.dir))};b.addEventListener('pointerdown',go)});
window.addEventListener('keydown',e=>{const keys={ArrowUp:0,w:0,W:0,ArrowRight:1,d:1,D:1,ArrowDown:2,s:2,S:2,ArrowLeft:3,a:3,A:3};if(e.key in keys){e.preventDefault();change(keys[e.key])}if(e.code==='Space'){e.preventDefault();running?togglePause():newGame()}if(e.key==='r'||e.key==='R')newGame()});background();
})();
</script>
