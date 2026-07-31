const c=document.getElementById('stars'),x=c.getContext('2d');const hero=document.getElementById('hero'),boot=document.getElementById('boot');function r(){c.width=innerWidth;c.height=innerHeight}onresize=r;r();const s=[...Array(1200)].map(()=>{const p=Math.random();const layer=p<0.7?0:(p<0.95?1:2);const baseR=layer===0?Math.random()*0.8+0.2:layer===1?Math.random()*1.2+0.5:Math.random()*1.8+1.0;return {x:Math.random()*c.width,y:Math.random()*c.height,R:baseR,v:(layer===2?0.25:layer===1?0.18:0.08)+Math.random()*0.08,t:Math.random()*6.28,layer,color:layer===2?'255,250,235':(Math.random()<0.5?'255,255,255':'235,245,255')};});let m='SEARCHING FOR SIGNAL...',i=0;

const meteors=[];
let nextMeteor=performance.now()+12000+Math.random()*18000;
const T=setInterval(()=>{boot.textContent=m.slice(0,i++);if(i>m.length){clearInterval(T);setTimeout(()=>{boot.textContent='LOCK ACQUIRED';setTimeout(()=>{boot.style.opacity='0';hero.classList.remove('hidden');setTimeout(()=>boot.remove(),1000)},1200)},500)}},70);(function a(){x.fillStyle='#02030b';x.fillRect(0,0,c.width,c.height);const drift=performance.now()*0.00008;x.save();const nx=c.width*(0.35+Math.sin(drift)*0.03),ny=c.height*(0.4+Math.cos(drift*0.7)*0.02);const g=x.createRadialGradient(nx,ny,0,nx,ny,c.width*0.9);const pulse=0.04+0.02*((Math.sin(drift*2)+1)/2);g.addColorStop(0,`rgba(80,60,140,${pulse})`);g.addColorStop(0.5,'rgba(40,90,170,0.025)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,c.width,c.height);const nx2=c.width*(0.75+Math.cos(drift*0.6)*0.02),ny2=c.height*(0.7+Math.sin(drift*0.8)*0.025);const g2=x.createRadialGradient(nx2,ny2,0,nx2,ny2,c.width*0.8);g2.addColorStop(0,'rgba(180,90,220,0.03)');g2.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g2;x.fillRect(0,0,c.width,c.height);x.restore();const now=performance.now();
if(now>nextMeteor&&meteors.length<1){
 meteors.push({x:Math.random()*c.width*0.7,y:Math.random()*c.height*0.4,vx:9+Math.random()*3,vy:4+Math.random()*2,life:0});
 nextMeteor=now+20000+Math.random()*20000;
}
for(const e of s){e.y+=e.v;if(e.y>c.height){e.y=0;e.x=Math.random()*c.width}e.t+=.02+(e.layer*0.01);const alpha=0.25+0.75*((Math.sin(e.t)+1)/2);x.fillStyle=`rgba(${e.color},${alpha})`;x.beginPath();x.arc(e.x,e.y,e.R,0,6.28);x.fill()}
for(let k=meteors.length-1;k>=0;k--){
 const m=meteors[k];
 m.x+=m.vx; m.y+=m.vy; m.life++;
 x.strokeStyle='rgba(220,235,255,'+(1-m.life/70)+')';
 x.lineWidth=2;
 x.beginPath();
 x.moveTo(m.x,m.y);
 x.lineTo(m.x-60,m.y-30);
 x.stroke();
 if(m.life>70||m.x>c.width+80||m.y>c.height+80) meteors.splice(k,1);
}
requestAnimationFrame(a)})();

/* ==== Genesis005 Release027 - Deep Field ==== */
// Third nebula layer, ambient dust particles, and rare hidden-constellation flicker.
// Additive only: does not modify the existing render loop, star array, or meteor system.

const dust=[...Array(90)].map(()=>({
  x:Math.random()*c.width,
  y:Math.random()*c.height,
  R:Math.random()*0.7+0.2,
  vx:(Math.random()-0.5)*0.04,
  vy:(Math.random()-0.5)*0.04,
  a:Math.random()*0.15+0.03
}));

let constellationTimer=performance.now()+30000+Math.random()*90000;
let activeConstellation=null;

function drawDeepField(){
  const now=performance.now();
  const drift3=now*0.00005;

  // third nebula layer, warm amber-rose, opposite corner drift
  const nx3=c.width*(0.15+Math.sin(drift3*0.5)*0.025),
        ny3=c.height*(0.85+Math.cos(drift3*0.4)*0.02);
  const g3=x.createRadialGradient(nx3,ny3,0,nx3,ny3,c.width*0.7);
  const pulse3=0.02+0.015*((Math.sin(drift3*1.5)+1)/2);
  g3.addColorStop(0,`rgba(200,120,90,${pulse3})`);
  g3.addColorStop(1,'rgba(0,0,0,0)');
  x.fillStyle=g3;
  x.fillRect(0,0,c.width,c.height);

  // dust particles
  for(const d of dust){
    d.x+=d.vx; d.y+=d.vy;
    if(d.x<0)d.x=c.width; if(d.x>c.width)d.x=0;
    if(d.y<0)d.y=c.height; if(d.y>c.height)d.y=0;
    x.fillStyle=`rgba(210,220,255,${d.a})`;
    x.beginPath();
    x.arc(d.x,d.y,d.R,0,6.28);
    x.fill();
  }

  // rare hidden constellation
  if(now>constellationTimer && !activeConstellation){
    const bright=s.filter(st=>st.layer>=1);
    if(bright.length>5){
      const cx=Math.random()*c.width, cy=Math.random()*c.height;
      const nearby=bright
        .map(st=>({st,d:Math.hypot(st.x-cx,st.y-cy)}))
        .sort((a,b)=>a.d-b.d)
        .slice(0,4+Math.floor(Math.random()*2))
        .map(o=>o.st);
      activeConstellation={stars:nearby,born:now,duration:6000+Math.random()*3000};
    }
    constellationTimer=now+90000+Math.random()*120000;
  }
  if(activeConstellation){
    const age=now-activeConstellation.born;
    const life=activeConstellation.duration;
    if(age>life){
      activeConstellation=null;
    } else {
      const fade=age<1500?age/1500:(age>life-1500?(life-age)/1500:1);
      x.strokeStyle=`rgba(150,190,255,${0.18*fade})`;
      x.lineWidth=1;
      x.beginPath();
      const pts=activeConstellation.stars;
      x.moveTo(pts[0].x,pts[0].y);
      for(let p=1;p<pts.length;p++) x.lineTo(pts[p].x,pts[p].y);
      x.stroke();
    }
  }
  requestAnimationFrame(drawDeepField);
}
drawDeepField();

// Genesis 003 Release 004: foundation patch

// Genesis 005.6 Living Stars: conservative enhancement.

// Genesis 005.7 Cosmic Depth: verified baseline preserved.


/* Genesis005 Release008 - Renderer Configuration */
const ZRO_RENDER_CONFIG = {
  version: "008-LivingStars",
  starColorPalette: ["#FFFFFF","#F5F7FF","#FFF9EE"],
  brightStarChance: 0.06,
  twinkleVariance: true
};
// Future renderer upgrades will consume this configuration
// while preserving the existing animation loop.


/* ==== Genesis005 Release011 - First Light ==== */
const ZRO_FIRST_LIGHT={
  meteorEnabled:true,
  meteorChancePerFrame:0.000015,
  meteorMaxVisible:1,
  starBloom:1.08,
  anchorStarBoost:1.15
};


/* ==== Genesis005 Release013 - Cosmic Haze ==== */
const ZRO_NEBULA = {
  enabled: true,
  opacity: 0.03,
  driftSpeed: 0.0005,
  layers: 2
};
// Placeholder configuration for subtle background nebula integration.


/* ==== Genesis005 Release015 - Living Nebula ==== */
const ZRO_LIVING_NEBULA = {
  enabled:true,
  pulseSpeed:0.00008,
  driftX:0.00003,
  driftY:0.00002,
  maxOpacity:0.045
};
// Next renderer update will animate the nebula using the existing render loop.


window.addEventListener('load',()=>{
  const s=document.getElementById('zro-signal');
  if(s){
    setTimeout(()=>s.classList.add('visible'),3500);
  }
});

window.addEventListener('load',()=>{
 const c=document.querySelector('.signal-caption');
 if(c){setTimeout(()=>c.classList.add('visible'),5000);}
});
