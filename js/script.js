/* =========================
   BACKGROUND MUSIC CONTROL
========================= */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicToggle");

/* Set soft volume */
music.volume = 1.0;

/* Start music after first user interaction (fix autoplay block) */
document.body.addEventListener("click", () => {

if(music.paused){
music.play();
}

},{ once:true });


/* Toggle Music Button */

musicBtn.addEventListener("click", () => {

if(music.paused){

music.play();
musicBtn.innerHTML = "🎵";

}else{

music.pause();
musicBtn.innerHTML = "🔇";

}

});


/* =========================
   AUTO PAUSE MUSIC WHEN VIDEO PLAYS
========================= */

const videos = document.querySelectorAll("video");

videos.forEach(video => {

video.addEventListener("play", () => {

if(!music.paused){
music.pause();
}

});

video.addEventListener("pause", () => {

if(music.paused){
music.play();
}

});

});


/* =========================
   FADE IN ANIMATION ON SCROLL
========================= */

const fadeElements = document.querySelectorAll(
"section, img, h1, h2, h3, p, button, video"
);

/* Add fade class */

fadeElements.forEach(el => {

el.classList.add("fade-element");

});


/* Intersection Observer */

const fadeObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});


/* Observe elements */

fadeElements.forEach(el => {

fadeObserver.observe(el);

});


/* =========================
   START JOURNEY BUTTON SCROLL
========================= */

const startBtn = document.querySelector(".start-btn");

if(startBtn){

startBtn.addEventListener("click", () => {

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

});

}


/* =========================
   PAGE LOAD FADE
========================= */

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});

/* =========================
   EMOJI SCROLL REACTION
========================= */

const emojis = document.querySelectorAll(".emoji");

window.addEventListener("scroll", () => {

const scrollY = window.scrollY;

emojis.forEach((emoji, index) => {

const speed = (index + 1) * 0.2;

emoji.style.transform =
`translateY(${scrollY * speed * 0.1}px) rotate(${scrollY * 0.1}deg)`;

});

});
/* =========================
   SPARKLE TRAIL (MOUSE + TOUCH)
========================= */

const sparkleContainer = document.getElementById("sparkle-container");

function createSparkle(x,y){

const sparkle = document.createElement("div");
sparkle.classList.add("sparkle");

sparkle.style.left = x + "px";
sparkle.style.top = y + "px";

sparkleContainer.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},1000);

}


/* DESKTOP MOUSE */

document.addEventListener("mousemove",(e)=>{

createSparkle(e.clientX,e.clientY);

});


/* MOBILE TOUCH */

document.addEventListener("touchmove",(e)=>{

const touch = e.touches[0];

createSparkle(touch.clientX,touch.clientY);

});


/* TOUCH TAP */

document.addEventListener("touchstart",(e)=>{

const touch = e.touches[0];

createSparkle(touch.clientX,touch.clientY);

});