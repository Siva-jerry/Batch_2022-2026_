/* =========================
   🎬 INTRO SCREEN (FIX BLUR ISSUE)
========================= */

document.body.classList.add("intro-active");

window.addEventListener("load", () => {
  const intro = document.getElementById("introScreen");

  setTimeout(() => {
    intro.style.opacity = "0";

    document.body.classList.remove("intro-active");
    document.body.classList.add("loaded");

    setTimeout(() => {
      intro.style.display = "none";
    }, 2000);

  }, 3000);
});


/* =========================
   🎵 MUSIC FADE-IN (SAFE)
========================= */

const music = document.getElementById("sadMusic");
const btn = document.getElementById("playMusic");

let isPlaying = false;

function fadeInAudio(audio){
  if(isPlaying) return;

  audio.volume = 0;
  audio.play().catch(()=>{});

  let vol = 0;
  const interval = setInterval(() => {
    if(vol < 1){
      vol += 0.05;
      audio.volume = vol;
    } else {
      clearInterval(interval);
    }
  },200);

  isPlaying = true;
}

// button click
if(btn){
  btn.onclick = () => fadeInAudio(music);
}

// mobile autoplay fix
document.body.addEventListener("click", () => {
  fadeInAudio(music);
}, { once:true });


/* =========================
   🎬 VIDEO POPUP (SAFE FIX)
========================= */

const videoCards = document.querySelectorAll(".video-card");
const popup = document.getElementById("videoPopup");
const popupVideo = document.getElementById("popupVideo");
const closeBtn = document.querySelector(".close");

videoCards.forEach(card=>{
  card.onclick = ()=>{
    const src = card.dataset.video;

    popup.style.display = "flex";

    popupVideo.src = src;

    popupVideo.muted = false;          // ✅ FORCE SOUND
    popupVideo.volume = 1;             // ✅ FULL VOLUME

    popupVideo.play().then(()=>{
      // play success
    }).catch(()=>{
      // fallback (mobile)
      popupVideo.controls = true;
    });

    music.pause();
  };
});

popupVideo.addEventListener("loadeddata", ()=>{
  popupVideo.muted = false;   // ✅ ensure unmuted after load
});
// close button
if(closeBtn){
 closeBtn.onclick = ()=>{
  popup.style.display="none";
  popupVideo.pause();
  popupVideo.src="";

  // ✅ FIX START
  music.currentTime = music.currentTime; // keep position

  music.play().then(()=>{
    music.volume = 1; // safe value
  }).catch(()=>{
    // fallback (mobile restriction)
  });
};
}

// click outside
if(popup){
  popup.onclick = (e)=>{
    if(e.target === popup){
      popup.style.display="none";
      popupVideo.pause();
      popupVideo.src="";

      // ✅ ADD THIS (IMPORTANT)
      music.play().then(()=>{
        music.volume = 1;
      }).catch(()=>{});
    }
  };
}
/* =========================
   🖼 IMAGE POPUP
========================= */

const images = document.querySelectorAll(".card:not(.video-card) img");
const imgPopup = document.getElementById("imagePopup");
const popupImg = document.getElementById("popupImage");
const closeImg = document.querySelector(".close-img");

images.forEach(img => {
  img.onclick = () => {
    imgPopup.style.display = "flex";
    popupImg.src = img.src;
  };
});

closeImg.onclick = () => {
  imgPopup.style.display = "none";
};

imgPopup.onclick = (e) => {
  if(e.target === imgPopup){
    imgPopup.style.display = "none";
  }
};


/* =========================
   💬 FLOATING QUOTES (BOTTOM FIX)
========================= */

const quotes = [
  "We came here with dreams… we leave with memories 💔",
  "Some people were just classmates… now they are a part of life ❤️",
  "We laughed without thinking… now we remember without smiling 😢",
  "Those last bench moments meant more than we realized 🎓",
  "No one told us the last day would feel like this… 💔",
  "We didn’t say goodbye properly… and that hurts the most 🥀",
  "From strangers… to family… to memories ✨",
  "The bell rang for the last time… but our memories will echo forever 🔔",
  "We thought time was slow… until it suddenly ended ⏳",
  "Every corridor holds a memory we can never revisit 💭",
  "We are not losing friends… we are just learning distance 💔",
  "Some chapters don’t end… they stay inside us forever 📖",
  "The hardest part isn’t leaving… it’s leaving people behind 😢",
  "We lived the best days without knowing they were the best ❤️",
  "This isn’t goodbye… it’s just life moving forward 🕊",
  "One last photo… one last laugh… one last goodbye 📸",
  "We came to study… but ended up living a story 💫",
  "No rewind… no replay… only memories 💭",
  "The journey ends… but the bond never will ❤️",
  "We leave the place… but never the people 💔"
];
// use existing element from HTML
const quoteEl = document.querySelector(".floating-quote");

let q = 0;

function showQuote(){
  if(!quoteEl) return;

  quoteEl.style.opacity = 0;

  setTimeout(()=>{
    quoteEl.innerText = quotes[q];
    quoteEl.style.opacity = 1;

    q = (q+1) % quotes.length;
  },500);
}

showQuote();
setInterval(showQuote,4000);


/* =========================
   🎬 FADE SCROLL
========================= */

const elements = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el=>observer.observe(el));


/* =========================
   🎞 FULLSCREEN SLIDESHOW
========================= */

const slides = document.querySelectorAll(".fullscreen-slideshow img");

let slideIndex = 0;

function runSlideshow(){
  if(slides.length === 0) return;

  slides.forEach(img => img.style.opacity = 0);

  slides[slideIndex].style.opacity = 1;

  slideIndex = (slideIndex + 1) % slides.length;
}

runSlideshow();
setInterval(runSlideshow,4000);


/* =========================
   🕊 FLOATING HEART PARTICLES
========================= */

const heartContainer = document.getElementById("hearts");

function createHeart(){
  if(!heartContainer) return;

  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random()*100 + "%";
  heart.style.fontSize = (Math.random()*10 + 15) + "px";

  heartContainer.appendChild(heart);

  setTimeout(()=>{
    heart.remove();
  },10000);
}

setInterval(createHeart,800);