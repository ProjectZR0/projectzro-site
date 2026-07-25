const c=document.getElementById('stars'),x=c.getContext('2d');let w,h,s=[];
function R(){w=c.width=innerWidth;h=c.height=innerHeight;s=[...Array(700)].map(()=>({x:Math.random()*w,y:Math.random()*h,z:Math.random()*2+1}))}
onresize=R;R();
(function a(){x.fillStyle='#03040a';x.fillRect(0,0,w,h);x.fillStyle='#fff';s.forEach(p=>{x.globalAlpha=.3+p.z/3;x.fillRect(p.x,p.y,p.z,p.z);p.y+=p.z*.15;if(p.y>h)p.y=0;});requestAnimationFrame(a)})();
const msgs=['SOURCE UNKNOWN','AGE UNKNOWN','DECRYPTING…','SIGNAL LOCKED'];
let i=0;
const st=document.getElementById('status');
const btn=document.getElementById('enter');
const t=setInterval(()=>{i++;if(i<msgs.length){st.textContent=msgs[i]}else{clearInterval(t);btn.hidden=false;}},1800);
btn.onclick=()=>{boot.style.display='none';world.classList.remove('hidden');};