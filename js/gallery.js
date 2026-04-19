/* =========================
   AUTO IMAGE NAME GENERATION
========================= */

const imageNames = [];
const totalImages = 172;

for(let i = 1; i <= totalImages; i++){
  imageNames.push(`img${i}`);
}

/* =========================
   SUPPORTED FORMATS
========================= */

const extensions = ["jpg", "jpeg", "png", "webp"];

const container = document.getElementById("galleryContainer");

/* =========================
   LOAD IMAGES (OPTIMIZED)
========================= */

imageNames.forEach((name) => {

  const wrapper = document.createElement("div");
  wrapper.classList.add("gallery-item");

  const img = document.createElement("img");
  img.loading = "lazy"; // 🔥 performance boost

  let found = false;

  function tryLoad(index){

    if(index >= extensions.length){
      wrapper.remove(); // remove empty card
      return;
    }

    const src = `assets/images/gallery/${name}.${extensions[index]}`;
    img.src = src;

    img.onload = () => {
      if(!found){
        found = true;

        // click event
        wrapper.addEventListener("click", () => openLightbox(src));

        // small fade-in effect
        wrapper.style.opacity = "0";
        setTimeout(() => {
          wrapper.style.transition = "0.5s";
          wrapper.style.opacity = "1";
        }, 50);
      }
    };

    img.onerror = () => {
      tryLoad(index + 1);
    };
  }

  tryLoad(0);

  wrapper.appendChild(img);
  container.appendChild(wrapper);
});


/* =========================
   LIGHTBOX (PREMIUM)
========================= */

function openLightbox(src){

  document.body.classList.add("lightbox-open"); // 🔥 add this

  const lightbox = document.createElement("div");
  lightbox.classList.add("lightbox");

  lightbox.innerHTML = `
    <span class="close-btn">&times;</span>
    <img src="${src}" class="lightbox-img">
  `;

  document.body.appendChild(lightbox);

  const close = () => {
    lightbox.remove();
    document.body.classList.remove("lightbox-open"); // 🔥 remove
  };

  lightbox.querySelector(".close-btn").onclick = close;

  lightbox.onclick = (e) => {
    if(e.target !== e.currentTarget) return;
    close();
  };

  document.addEventListener("keydown", function esc(e){
    if(e.key === "Escape"){
      close();
      document.removeEventListener("keydown", esc);
    }
  });
}