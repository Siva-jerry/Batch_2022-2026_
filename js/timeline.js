document.addEventListener("DOMContentLoaded", () => {

  const progress = document.getElementById("timelineProgress");
  const timeline = document.querySelector(".timeline-wrapper");
  const cards = document.querySelectorAll(".timeline-card");

  /* =========================
     SCROLL PROGRESS
  ========================= */

  window.addEventListener("scroll", () => {

    const rect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const total = rect.height;
    const visible = windowHeight - rect.top;

    let percent = visible / total;

    percent = Math.max(0, Math.min(1, percent));

    progress.style.height = percent * 100 + "%";

  });

  /* =========================
     CLICK → SHOW VIDEO
  ========================= */

  cards.forEach(card => {

    card.addEventListener("click", () => {

      cards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      const video = card.querySelector("video");
      if(video){
        video.play();
      }

    });

  });

  /* =========================
     🔥 MEDIA LOADER (PASTE HERE)
  ========================= */

  const mediaData = [
  {
    id: "media-2022",
    files: [
      "assets/timeline/y1-1",
      "assets/timeline/y1-2",
      "assets/timeline/y1-3"
    ]
  },
  {
    id: "media-2023",
    files: [
      "assets/timeline/y2-1",
      "assets/timeline/y2-2",
      "assets/timeline/y2-3"
    ]
  },
  {
    id: "media-2024",
    files: [
      "assets/timeline/y3-1"
    ]
  },
  {
    id: "media-2025",
    files: [
      "assets/timeline/y5-1",
      "assets/timeline/y5-2"
    ]
  },
  {
    id: "media-2026",
    files: [
      "assets/timeline/y4-1"
    ]
  }
];

mediaData.forEach(item => {

  const container = document.getElementById(item.id);
  if(!container) return;

  const videoFormats = ["mp4","webm","ogg"];
  const imageFormats = ["jpg","jpeg","png","webp"];

  item.files.forEach(base => {

    let loaded = false;

    function tryVideo(index){
      if(index >= videoFormats.length){
        tryImage(0);
        return;
      }

      const path = base + "." + videoFormats[index];

      const video = document.createElement("video");
      video.src = path;
      video.muted = true;
      video.loop = true;

      video.onloadeddata = () => {
        if(!loaded){
          loaded = true;
          container.appendChild(video);
        }
      };

      video.onerror = () => {
        tryVideo(index + 1);
      };
    }

    function tryImage(index){
      if(index >= imageFormats.length) return;

      const path = base + "." + imageFormats[index];

      const img = new Image();
      img.src = path;

      img.onload = () => {
        if(!loaded){
          loaded = true;
          container.appendChild(img);
        }
      };

      img.onerror = () => {
        tryImage(index + 1);
      };
    }

    tryVideo(0);

  });

});
});