document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("facultyContainer");

  if(!container){
    console.error("Faculty container not found ❌");
    return;
  }

  /* =========================
     AUTO VIDEO DATA
  ========================= */


const facultyVideos = [

  {
    name: "Senthil Murugan",
    message: "All the best for your bright future ❤️",
    videoBase: "assets/videos/faculty/f1"
  },

  {
    name: "Chermakkani",
    message: "Keep learning and growing ✨",
    videoBase: "assets/videos/faculty/f2"
  },

  {
    name: "Ramalakshmi",
    message: "Success is waiting for you 🚀",
    videoBase: "assets/videos/faculty/f3"
  },

  {
    name: "Ajitha",
    message: "Never stop dreaming 💫",
    videoBase: "assets/videos/faculty/f4"
  },
    {
    name: "Muthulakshmi",
    message: "Never stop dreaming 💫",
    videoBase: "assets/videos/faculty/f5"
  },
  
   

  // 👉 continue like this...

];

  /* =========================
     CREATE CARD
  ========================= */

 function createCard(v){

  const card = document.createElement("div");
  card.classList.add("faculty-card");

  card.innerHTML = `
    <div class="video-thumb">

      <!-- 🔥 PLACEHOLDER IMAGE -->
      <img class="faculty-thumb" src="assets/images/faculty-default.jpg">

      <div class="play-icon">▶</div>
    </div>

    <div class="faculty-info">
      <h3>${v.name}</h3>
      <p>${v.message}</p>
    </div>
  `;

  /* 🔥 LOAD THUMBNAIL IMAGE (OPTIONAL) */

  const img = card.querySelector(".faculty-thumb");

  const formats = ["jpg","jpeg","png","webp","avif"];

  function tryLoad(index){

    if(index >= formats.length) return;

    const path = v.videoBase + "." + formats[index]; // same name as video

    const testImg = new Image();
    testImg.src = path;

    testImg.onload = () => {
      img.src = path;
    };

    testImg.onerror = () => {
      tryLoad(index + 1);
    };
  }

  tryLoad(0);

  /* CLICK → POPUP VIDEO */

  card.onclick = () => openVideoPopup(v);

  return card;
}

  /* =========================
     RENDER
  ========================= */

  facultyVideos.forEach(v => {
    container.appendChild(createCard(v));
  });

});


/* =========================
   POPUP VIDEO PLAYER
========================= */

function openVideoPopup(v){

  const popup = document.createElement("div");
  popup.classList.add("faculty-popup");

  popup.innerHTML = `
    <div class="popup-video-card">
      <span class="close-btn">&times;</span>

      <video controls autoplay id="popupVideo"></video>

      <h3>${v.name}</h3>
      <p>${v.message}</p>
    </div>
  `;

  document.body.appendChild(popup);

  const video = popup.querySelector("#popupVideo");

  const formats = ["mp4","webm","ogg"];

  function tryLoad(index){

    if(index >= formats.length) return;

    const path = v.videoBase + "." + formats[index];

    video.src = path;

    video.onerror = () => {
      tryLoad(index + 1);
    };
  }

  tryLoad(0);

  /* CLOSE */

  popup.querySelector(".close-btn").onclick = () => popup.remove();

  popup.onclick = (e) => {
    if(e.target === popup) popup.remove();
  };
}