const c=document.getElementById('stars'),x=c.getContext('2d');const hero=document.getElementById('hero'),boot=document.getElementById('boot');function r(){c.width=innerWidth;c.height=innerHeight}onresize=r;r();const s=[...Array(1200)].map(()=>{const p=Math.random();const layer=p<0.7?0:(p<0.95?1:2);const baseR=layer===0?Math.random()*0.8+0.2:layer===1?Math.random()*1.2+0.5:Math.random()*1.8+1.0;return {x:Math.random()*c.width,y:Math.random()*c.height,R:baseR,v:(layer===2?0.25:layer===1?0.18:0.08)+Math.random()*0.08,t:Math.random()*6.28,layer,color:layer===2?'255,250,235':(Math.random()<0.5?'255,255,255':'235,245,255')};});let m='SEARCHING FOR SIGNAL...',i=0;

const meteors=[];
let nextMeteor=performance.now()+12000+Math.random()*18000;
const T=setInterval(()=>{boot.textContent=m.slice(0,i++);if(i>m.length){clearInterval(T);setTimeout(()=>{boot.textContent='LOCK ACQUIRED';setTimeout(()=>{boot.style.opacity='0';hero.classList.remove('hidden');setTimeout(()=>boot.remove(),1000)},1200)},500)}},70);(function a(){x.fillStyle='#02030b';x.fillRect(0,0,c.width,c.height);const drift=performance.now()*0.00008;x.save();const nx=c.width*(0.35+Math.sin(drift)*0.03),ny=c.height*(0.4+Math.cos(drift*0.7)*0.02);const g=x.createRadialGradient(nx,ny,0,nx,ny,c.width*0.9);const pulse=0.04+0.02*((Math.sin(drift*2)+1)/2);g.addColorStop(0,`rgba(80,60,140,${pulse})`);g.addColorStop(0.5,'rgba(40,90,170,0.025)');g.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g;x.fillRect(0,0,c.width,c.height);const nx2=c.width*(0.75+Math.cos(drift*0.6)*0.02),ny2=c.height*(0.7+Math.sin(drift*0.8)*0.025);const g2=x.createRadialGradient(nx2,ny2,0,nx2,ny2,c.width*0.8);g2.addColorStop(0,'rgba(180,90,220,0.03)');g2.addColorStop(1,'rgba(0,0,0,0)');x.fillStyle=g2;x.fillRect(0,0,c.width,c.height);x.restore();const now=performance.now();
if(now>nextMeteor&&meteors.length<1){
 meteors.push({x:Math.random()*c.width*0.7,y:Math.random()*c.height*0.4,vx:9+Math.random()*3,vy:4+Math.random()*2,life:0});
 nextMeteor=now+20000+Math.random()*20000;
}
for(const e of s){e.y+=e.v;if(e.y>c.height){e.y=0;e.x=Math.random()*c.width}e.t+=.02+(e.layer*0.01);const alpha=0.25+0.75*((Math.sin(e.t)+1)/2);const glow=e.layer===2?e.R*2.8:e.layer===1?e.R*1.8:e.R*1.2;x.shadowBlur=glow;x.shadowColor=`rgba(${e.color},0.45)`;x.fillStyle=`rgba(${e.color},${alpha})`;x.beginPath();x.arc(e.x,e.y,e.R,0,6.28);x.fill();x.shadowBlur=0}
for(let k=meteors.length-1;k>=0;k--){
 const m=meteors[k];
 m.x+=m.vx; m.y+=m.vy; m.life++;
 x.strokeStyle='rgba(220,235,255,'+(1-m.life/70)+')';
 x.lineWidth=2;
 x.beginPath();
 x.moveTo(m.x,m.y);
 x.lineTo(m.x-60,m.y-30);
 x.shadowBlur=12;x.shadowColor='rgba(180,220,255,0.8)';x.stroke();x.shadowBlur=0;
 if(m.life>70||m.x>c.width+80||m.y>c.height+80) meteors.splice(k,1);
}
requestAnimationFrame(a)})();

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

/* Release017 Aurora Bloom */
