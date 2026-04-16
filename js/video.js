/* =========================
   VIDEO DATA
========================= */

const videoList = [
{ src: "assets/videos/memories/video1.mp4" },
  { src: "assets/videos/memories/video2.mp4" },
  { src: "assets/videos/memories/video3.webm" },
  { src: "assets/videos/memories/video4.mp4" },
  { src: "assets/videos/memories/video5.mp4" },
  { src: "assets/videos/memories/video6.mp4" },
  { src: "assets/videos/memories/video7.mp4" },
  { src: "assets/videos/memories/video8.mp4" },
  { src: "assets/videos/memories/video9.mp4" },
  { src: "assets/videos/memories/video10.mp4" },
  { src: "assets/videos/memories/video11.mp4" },
  { src: "assets/videos/memories/video12.mp4" },
  { src: "assets/videos/memories/video13.mp4" },
  { src: "assets/videos/memories/video14.mp4" },
  { src: "assets/videos/memories/video15.mp4" },
  { src: "assets/videos/memories/video16.mp4" },
  { src: "assets/videos/memories/video17.mp4" },
  { src: "assets/videos/memories/video18.mp4" },
  { src: "assets/videos/memories/video19.mp4" },
  { src: "assets/videos/memories/video20.mp4" },
  { src: "assets/videos/memories/video21.mp4" },
  { src: "assets/videos/memories/video22.mp4" },
  { src: "assets/videos/memories/video23.mp4" },
  { src: "assets/videos/memories/video24.mp4" },
  { src: "assets/videos/memories/video25.mp4" },
  { src: "assets/videos/memories/video26.mp4" },
  { src: "assets/videos/memories/video27.mp4" },
  { src: "assets/videos/memories/video28.mp4" },
  { src: "assets/videos/memories/video29.mp4" },
  { src: "assets/videos/memories/video30.mp4" },
  { src: "assets/videos/memories/video31.mp4" },
  { src: "assets/videos/memories/video32.mp4" },
  { src: "assets/videos/memories/video33.mp4" },
  { src: "assets/videos/memories/video34.mp4" },
  { src: "assets/videos/memories/video35.mp4" },
  { src: "assets/videos/memories/video36.mp4" },
];

const carousel = document.getElementById("videoCarousel");
const bgMusic = document.getElementById("bgMusic");

/* =========================
   CREATE VIDEO CARDS (LAZY)
========================= */

videoList.forEach((item) => {

  const card = document.createElement("div");
  card.classList.add("video-card");

  const video = document.createElement("video");

  // 🔥 DO NOT load immediately
  video.dataset.src = item.src;

  video.muted = true;
  video.loop = true;
  video.preload = "none";
  video.playsInline = true;

  video.style.background = "black";

  card.appendChild(video);
  carousel.appendChild(card);
});


/* =========================
   CENTER ACTIVE
========================= */

function updateActive() {

  const cards = document.querySelectorAll(".video-card");

  cards.forEach(card => card.classList.remove("active"));

  const center = window.innerWidth / 2;

  cards.forEach(card => {

    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;

    if (Math.abs(center - cardCenter) < rect.width / 2) {
      card.classList.add("active");
    }

  });
}


/* =========================
   LAZY LOAD + PLAY CONTROL
========================= */

function handleVideos() {

  const cards = document.querySelectorAll(".video-card");

  cards.forEach(card => {

    const video = card.querySelector("video");
    const rect = card.getBoundingClientRect();

    const inView =
      rect.left < window.innerWidth &&
      rect.right > 0;

    // ✅ load only when visible
    if (inView && !video.src) {
      video.src = video.dataset.src;

      video.addEventListener("loadedmetadata", () => {
        const ratio = video.videoWidth / video.videoHeight;

        if (ratio < 1) {
          card.style.height = "300px";
        } else {
          card.style.height = "180px";
        }
      });
    }

    // ✅ play only active
    if (card.classList.contains("active")) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }

  });
}


/* =========================
   SCROLL + SNAP
========================= */

carousel.addEventListener("scroll", () => {

  updateActive();
  handleVideos();

  clearTimeout(carousel.snapTimeout);
  carousel.snapTimeout = setTimeout(snapToCenter, 120);

});

window.addEventListener("load", () => {
  updateActive();
  handleVideos();
});


/* =========================
   AUTO CENTER SNAP
========================= */

function snapToCenter() {

  const cards = document.querySelectorAll(".video-card");

  let closest = null;
  let minDistance = Infinity;

  const center = window.innerWidth / 2;

  cards.forEach(card => {

    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(center - cardCenter);

    if (distance < minDistance) {
      minDistance = distance;
      closest = card;
    }

  });

  if (closest) {
    closest.scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });
  }
}


/* =========================
   CLICK → MODAL
========================= */

carousel.addEventListener("click", (e) => {

  const card = e.target.closest(".video-card");
  if (!card) return;

  const video = card.querySelector("video");

  if (!video.src) return; // safety

  openVideoModal(video.src);
});


/* =========================
   MODAL PLAYER
========================= */

function openVideoModal(src) {

  if (bgMusic && !bgMusic.paused) {
    bgMusic.pause();
  }

  const modal = document.createElement("div");
  modal.classList.add("video-modal");

  modal.innerHTML = `
    <span class="close-video">&times;</span>
    <video src="${src}" controls autoplay></video>
  `;

  document.body.appendChild(modal);

  const modalVideo = modal.querySelector("video");

  modal.querySelector(".close-video").onclick = () => {
    modalVideo.pause();
    modal.remove();
    if (bgMusic) bgMusic.play();
  };

  modal.onclick = (e) => {
    if (e.target !== e.currentTarget) return;

    modalVideo.pause();
    modal.remove();
    if (bgMusic) bgMusic.play();
  };
}