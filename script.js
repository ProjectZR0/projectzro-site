const c=document.getElementById('stars'),x=c.getContext('2d');
function r(){c.width=innerWidth;c.height=innerHeight}
addEventListener('resize',r);r();
const s=[...Array(180)].map(()=>({x:Math.random()*c.width,y:Math.random()*c.height,z:Math.random()*2+0.3}));
function a(){x.clearRect(0,0,c.width,c.height);x.fillStyle='white';for(const p of s){p.y+=p.z;if(p.y>c.height)p.y=0;x.globalAlpha=.8;x.beginPath();x.arc(p.x,p.y,p.z,0,6.28);x.fill()}requestAnimationFrame(a)}a();