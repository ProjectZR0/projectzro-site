// Genesis005 Dev Release001

const c=document.getElementById('stars'),
g=c.getContext('2d'),
b=document.getElementById('boot'),
h=document.getElementById('hero');
function resize(){c.width=innerWidth;c.height=innerHeight;}
addEventListener('resize',resize);resize();
const stars=[...Array(1100)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*2+.2,v:Math.random()*.45+.05,t:Math.random()*Math.PI*2}));
const meteors=[];
function spawnMeteor(){meteors.push({x:c.width+200*Math.random(),y:Math.random()*c.height*.5,vx:-12-Math.random()*6,vy:8+Math.random()*4,life:70});}
setInterval(()=>{if(Math.random()<0.75)spawnMeteor();},6000);
let floatTime=0;
(function animate(){
g.fillStyle='#02030b';g.fillRect(0,0,c.width,c.height);
for(const s of stars){s.y+=s.v;if(s.y>c.height){s.y=0;s.x=Math.random()*c.width;}s.t+=0.03;const a=.45+.55*Math.sin(s.t);g.fillStyle=`rgba(255,255,255,${a})`;g.beginPath();g.arc(s.x,s.y,s.r,0,Math.PI*2);g.fill();}
for(let i=meteors.length-1;i>=0;i--){const m=meteors[i];g.strokeStyle=`rgba(180,220,255,${m.life/70})`;g.lineWidth=2;g.beginPath();g.moveTo(m.x,m.y);g.lineTo(m.x-140,m.y+90);g.stroke();m.x+=m.vx;m.y+=m.vy;m.life--;if(m.life<=0)meteors.splice(i,1);}
if(h&&!h.classList.contains('hidden')){floatTime+=0.015;h.style.transform=`translateY(${Math.sin(floatTime)*5}px)`;}
requestAnimationFrame(animate);
})();

/* ==== Genesis 005 Release 002 ==== */
(function(){
 let last=0;
 function flash(){
   const c=document.getElementById('stars');
   if(!c)return;
   const ctx=c.getContext('2d');
   const w=c.width,h=c.height;
   const x=Math.random()*w,y=Math.random()*h;
   ctx.strokeStyle='rgba(180,220,255,.8)';
   ctx.beginPath();
   ctx.moveTo(x,y);
   ctx.lineTo(x-120,y+70);
   ctx.stroke();
 }
 setInterval(flash,12000);

 let t=0;
 function drift(){
   const hero=document.getElementById('hero');
   if(hero){
      t+=0.01;
      hero.style.transform='translateY('+Math.sin(t)*4+'px)';
   }
   requestAnimationFrame(drift);
 }
 requestAnimationFrame(drift);
})();
