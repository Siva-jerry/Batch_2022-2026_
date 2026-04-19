// 🎬 FADE IN ON SCROLL

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => observer.observe(el));


// 🎵 MUSIC CONTROL

const music = document.getElementById("sadMusic");
const btn = document.getElementById("playMusic");

btn.addEventListener("click", () => {
  if(music.paused){
    music.play();
    btn.innerHTML = "🔊";
  } else {
    music.pause();
    btn.innerHTML = "🎵";
  }
});


// 📱 MOBILE FIX (auto play after touch)

document.body.addEventListener("click", () => {
  music.play().catch(()=>{});
}, { once: true });