const canvas=document.getElementById('stars');
const ctx=canvas.getContext('2d');

function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
}
window.addEventListener('resize',resize);
resize();

const STAR_COUNT=900;
const stars=Array.from({length:STAR_COUNT},()=>({
  x:Math.random()*canvas.width,
  y:Math.random()*canvas.height,
  r:Math.random()*1.5+0.2,
  s:Math.random()*0.015+0.005
}));

let t=0;
function draw(){
  t+=0.01;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#fff";
  for(const star of stars){
    const a=0.4+0.6*Math.sin(t/star.s+star.x);
    ctx.globalAlpha=a;
    ctx.beginPath();
    ctx.arc(star.x,star.y,star.r,0,Math.PI*2);
    ctx.fill();
  }
  ctx.globalAlpha=1;
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

window.addEventListener("load",()=>{
 const hero=document.getElementById("hero");
 if(hero){
   hero.style.opacity="1";
   hero.style.visibility="visible";
 }
});
