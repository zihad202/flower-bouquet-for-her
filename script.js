const bouquet = document.getElementById("bouquet");
const restart = document.getElementById("restart");
const petals = document.querySelector(".petals");

for(let i=0;i<7;i++){
  const p=document.createElement("i");
  p.className="petal";
  p.style.left=(Math.random()*100)+"%";
  p.style.animationDelay=(Math.random()*6)+"s";
  p.style.animationDuration=(6+Math.random()*5)+"s";
  p.style.transform=`rotate(${Math.random()*180}deg)`;
  petals.appendChild(p);
}

restart.addEventListener("click",()=>{
  const flowers = bouquet.querySelectorAll(".flower,.leaf,.filler,.wrap,.ribbon,.ribbon-knot,.tag");
  flowers.forEach(el=>{
    el.style.animation="none";
    void el.offsetWidth;
    el.style.animation="";
  });
});
