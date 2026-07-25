
const c=document.getElementById('stars'),x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}onresize=r;r();
const s=[...Array(700)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,z:Math.random()*2+.3,v:Math.random()*.25+.03,t:Math.random()*6.28}));
function a(){
x.fillStyle='#02030a';x.fillRect(0,0,c.width,c.height);
for(const i of s){
 i.y+=i.v;if(i.y>c.height){i.y=0;i.x=Math.random()*c.width;}
 i.t+=.03;
 const alpha=.45+Math.sin(i.t)*.55;
 x.fillStyle=`rgba(255,255,255,${alpha})`;
 x.beginPath();x.arc(i.x,i.y,i.z,0,6.28);x.fill();
}
if(Math.random()<0.02){
 let sx=Math.random()*c.width;
 x.strokeStyle='rgba(180,220,255,.7)';
 x.beginPath();x.moveTo(sx,0);x.lineTo(sx-120,120);x.stroke();
}
requestAnimationFrame(a)}
a();
