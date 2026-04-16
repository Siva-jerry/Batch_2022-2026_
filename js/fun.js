document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("funContainer");
  if(!container) return;

  /* =========================
     DATA (ADD YOUR CONTENT)
  ========================= */

  const funData = [

    {
      title: "Best Smile 😂",
      base: "assets/fun/f1"
    },

    {
      title: "Mass Bunk 😎",
      base: "assets/fun/f2"
    },

    {
      title: "Canteen King 🍔",
      base: "assets/fun/f3"
    },
    {
      title: "Canteen King 🍔",
      base: "assets/fun/f4"
    },
    {
      title: "Canteen King 🍔",
      base: "assets/fun/f5"
    },
    {
      title: "Canteen King 🍔",
      base: "assets/fun/f6"
    },
     {
      title: "Canteen King 🍔",
      base: "assets/fun/f6"
    }
,
 {
      title: "Canteen King 🍔",
      base: "assets/fun/f6"
    }
,
 {
      title: "Canteen King 🍔",
      base: "assets/fun/f6"
    }


  ];

  /* =========================
     CREATE CARD (NO MEDIA HERE)
  ========================= */

  function createCard(item){

    const card = document.createElement("div");
    card.classList.add("fun-card");

    // 👉 ONLY TEXT (placeholder handled by CSS)
    card.innerHTML = `
      <div class="fun-info">
        <b>${item.title}</b>
      </div>
    `;

    // 👉 CLICK → OPEN REAL MEDIA
    card.onclick = () => openPopup(item);

    return card;
  }

  /* =========================
     RENDER
  ========================= */

  funData.forEach(item => {
    container.appendChild(createCard(item));
  });

});


/* =========================
   POPUP (REAL IMAGE/VIDEO)
========================= */

function openPopup(item){

  const popup = document.createElement("div");
  popup.classList.add("fun-popup");

  popup.innerHTML = `
    <span class="fun-close">&times;</span>
    <div class="fun-popup-content" id="popupMedia"></div>
  `;

  document.body.appendChild(popup);

  const container = popup.querySelector("#popupMedia");

  const videoFormats = ["mp4","webm","ogg"];
  const imageFormats = ["jpg","jpeg","png","webp"];

  let loaded = false;

  /* TRY VIDEO FIRST */

  function tryVideo(i){
    if(i >= videoFormats.length){
      tryImage(0);
      return;
    }

    const path = item.base + "." + videoFormats[i];

    const video = document.createElement("video");
    video.src = path;
    video.controls = true;
    video.autoplay = true;

    video.onloadeddata = () => {
      if(!loaded){
        loaded = true;
        container.appendChild(video);
      }
    };

    video.onerror = () => tryVideo(i+1);
  }

  /* IF VIDEO FAIL → IMAGE */

  function tryImage(i){
    if(i >= imageFormats.length) return;

    const path = item.base + "." + imageFormats[i];

    const img = new Image();
    img.src = path;

    img.onload = () => {
      if(!loaded){
        loaded = true;
        container.appendChild(img);
      }
    };

    img.onerror = () => tryImage(i+1);
  }

  tryVideo(0);

  /* CLOSE BUTTON */

  popup.querySelector(".fun-close").onclick = () => popup.remove();

  /* CLICK OUTSIDE CLOSE */

  popup.onclick = (e) => {
    if(e.target === popup) popup.remove();
  };
}