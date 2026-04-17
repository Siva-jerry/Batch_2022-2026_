document.addEventListener("DOMContentLoaded", () => {

  const girlsContainer = document.getElementById("girlsContainer");
  const boysContainer = document.getElementById("boysContainer");

  if(!girlsContainer || !boysContainer){
    console.error("Container not found ❌");
    return;
  }

  /* =========================
     DATA (INDIVIDUAL STORAGE)
  ========================= */

  const seniors = [

    // 👩 GIRLS (22)

    {
      name: "Anchana",
      nickname: "Pree 💖",
      role: "UI Queen 🎨",
      quote: "Design speaks louder than words ❤️",
      imgBase: "assets/images/seniors/girls/g1",
      gender: "girl"
    },

    {
      name: "Mathumitha",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g2",
      gender: "girl"
    },
     {
      name: "Gopica",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g3",
      gender: "girl"
    },
     {
      name: "Sabna Asmi",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g4",
      gender: "girl"
    },
     {
      name: "Gopika S",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g5",
      gender: "girl"
    },
     {
      name: "Jeba Asin",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g6",
      gender: "girl"
    },
    {
      name: "Remina Banu",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g7",
      gender: "girl"
    },
    {
      name: "Carolyn Cristina",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g8",
      gender: "girl"
    },
    {
      name: "Roselin",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g9",
      gender: "girl"
    },
    {
      name: "Jazeera Mymoon",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g10",
      gender: "girl"
    },
    {
      name: "Sugirthana",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g11",
      gender: "girl"
    },
    {
      name: "Velankanni",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g12",
      gender: "girl"
    },
    {
      name: "Kavya",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g13",
      gender: "girl"
    },
    {
      name: "Karthika Devi",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g14",
      gender: "girl"
    },
    {
      name: "Sugitha",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g15",
      gender: "girl"
    },
    {
      name: "Rahmath Ansarna",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g16",
      gender: "girl"
    },
    {
      name: "Hebziba Lily Pushpam",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g17",
      gender: "girl"
    },
    {
      name: "Madhumitha",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g18",
      gender: "girl"
    },
    {
      name: "Arthy",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g19",
      gender: "girl"
    },
    {
      name: "Priya",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g20",
      gender: "girl"
    },
    {
      name: "Merlin",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g21",
      gender: "girl"
    },
    {
      name: "Jamila Abitha",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g22",
      gender: "girl"
    },
    // 👉 Continue like this up to g22

    // 👨 BOYS (36)

    {
      name: "Dhesnamoorthy S ",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b1",
      gender: "boy"
    },
     {
      name: "Mohamed Shalik M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b2",
      gender: "boy"
    },
     {
      name: "Abisheik ",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b3",
      gender: "boy"
    },
     {
      name: "Steepak S ",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b4",
      gender: "boy"
    },
     {
      name: "Mithun Chakkravathi N",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b5",
      gender: "boy"
    },
 {
      name: "Rahul Raj N",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b6",
      gender: "boy"
    },
     {
      name: "Vinith Kumar",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b7",
      gender: "boy"
    },
    {
      name: "Nallayan",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b8",
      gender: "boy"
    },
     {
      name: "Suigeneris M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b9",
      gender: "boy"
    },
     {
      name: "Iyyapan P",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b10",
      gender: "boy"
    },
     {
      name: "Mari Raj M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b11",
      gender: "boy"
    },
    {
      name: "Mohammad Sheik Mydin A",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b12",
      gender: "boy"
    },
    {
      name: "Selva Kumar",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b13",
      gender: "boy"
    },
    {
      name: "Meshak Raja",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b14",
      gender: "boy"
    },
    {
      name: "Kabinesh",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b15",
      gender: "boy"
    },
    {
      name: "Sakthivel",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b16",
      gender: "boy"
    },
    {
      name: "Elango Abiraj",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b17",
      gender: "boy"
    },
    {
      name: "Tamilarasan",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b18",
      gender: "boy"
    },
     {
      name: "Sakthivel",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b19",
      gender: "boy"
    },
      {
      name: "Ayyanar",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b20",
      gender: "boy"
    },
      {
      name: "Santhosh",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b21",
      gender: "boy"
    },
     {
      name: "Jeba Prakash",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b30",
      gender: "boy"
    },
    {
      name: "Sankar",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b30",
      gender: "boy"
    },
    {
      name: "Jegan Yadhav",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b22",
      gender: "boy"
    },
    {
      name: "Kabinesh",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b22",
      gender: "boy"
    },
    
    
    
    
    




    
    // 👉 Continue like this up to b36

  ];

  /* =========================
     CREATE CARD
  ========================= */

  function createCard(s){

    const card = document.createElement("div");
    card.classList.add("senior-card", s.gender);

    card.innerHTML = `
      <div class="card-inner">

        <!-- FRONT -->
        <div class="card-front">
          <img id="img-${s.name}" src="assets/images/default.jpg">
          <div class="overlay">
            <h3>${s.name}</h3>
          </div>
        </div>

        <!-- BACK -->
        <div class="card-back">
          <h3>${s.name}</h3>
          <p>${s.role}</p>
          <p><b>${s.nickname}</b></p>
          <p class="quote">"${s.quote}"</p>
        </div>

      </div>
    `;

    /* ✅ MULTI-FORMAT IMAGE LOAD */

    const imgElement = card.querySelector("img");
    const extensions = ["jpg","jpeg","png","webp"];

    function tryLoad(index){

      if(index >= extensions.length) return;

      const path = s.imgBase + "." + extensions[index];

      const testImg = new Image();
      testImg.src = path;

      testImg.onload = () => {
        imgElement.src = path;
      };

      testImg.onerror = () => {
        tryLoad(index + 1);
      };
    }

    tryLoad(0);

    // 🔥 CLICK → FLIP
    card.onclick = () => {
      card.classList.toggle("flip");
    };

    return card;
  }

  /* =========================
     RENDER
  ========================= */

  seniors.forEach(s => {

    const card = createCard(s);

    if(s.gender === "girl"){
      girlsContainer.appendChild(card);
    } else {
      boysContainer.appendChild(card);
    }

  });

});