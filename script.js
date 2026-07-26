const c=document.getElementById('stars'),x=c.getContext('2d');const hero=document.getElementById('hero'),boot=document.getElementById('boot');function r(){c.width=innerWidth;c.height=innerHeight}onresize=r;r();const s=[...Array(1200)].map(()=>{const p=Math.random();const layer=p<0.7?0:(p<0.95?1:2);const baseR=layer===0?Math.random()*0.8+0.2:layer===1?Math.random()*1.2+0.5:Math.random()*1.8+1.0;return {x:Math.random()*c.width,y:Math.random()*c.height,R:baseR,v:(layer===2?0.25:layer===1?0.18:0.08)+Math.random()*0.08,t:Math.random()*6.28,layer,color:layer===2?'255,250,235':(Math.random()<0.5?'255,255,255':'235,245,255')};});let m='SEARCHING FOR SIGNAL...',i=0;const T=setInterval(()=>{boot.textContent=m.slice(0,i++);if(i>m.length){clearInterval(T);setTimeout(()=>{boot.textContent='LOCK ACQUIRED';setTimeout(()=>{boot.style.opacity='0';hero.classList.remove('hidden');setTimeout(()=>boot.remove(),1000)},1200)},500)}},70);(function a(){x.fillStyle='#02030b';x.fillRect(0,0,c.width,c.height);for(const e of s){e.y+=e.v;if(e.y>c.height){e.y=0;e.x=Math.random()*c.width}e.t+=.02+(e.layer*0.01);const alpha=0.25+0.75*((Math.sin(e.t)+1)/2);x.fillStyle=`rgba(${e.color},${alpha})`;x.beginPath();x.arc(e.x,e.y,e.R,0,6.28);x.fill()}requestAnimationFrame(a)})();

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
