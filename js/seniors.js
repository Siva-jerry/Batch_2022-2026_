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
      name: "Anchana M",
      nickname: "Pree 💖",
      role: "UI Queen 🎨",
      quote: "Design speaks louder than words ❤️",
      imgBase: "assets/images/seniors/girls/g1",
      gender: "girl"
    },

    {
      name: "Mathumitha M",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g2",
      gender: "girl"
    },
     {
      name: "Gopica A",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g3",
      gender: "girl"
    },
     {
      name: "Sabna Asmi S",
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
      name: "Jeba Asin D",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g6",
      gender: "girl"
    },
    {
      name: "Remina Banu S",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g7",
      gender: "girl"
    },
    {
      name: "Carolyn Cristina R",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g8",
      gender: "girl"
    },
    {
      name: "Roselin G",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g9",
      gender: "girl"
    },
    {
      name: "Mohammed Jazeera Mymoon A",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g10",
      gender: "girl"
    },
    {
      name: "Sugirthana S",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g11",
      gender: "girl"
    },
    {
      name: "Velankanni I",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g12",
      gender: "girl"
    },
    {
      name: "Kaviya A",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g13",
      gender: "girl"
    },
    {
      name: "Karthika Devi S",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g14",
      gender: "girl"
    },
    {
      name: "Sugitha M",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g15",
      gender: "girl"
    },
    {
      name: "Rahmath Ansarna N",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g16",
      gender: "girl"
    },
    {
      name: "Hebziba Lily Pushpam Y",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g17",
      gender: "girl"
    },
    {
      name: "Madhumitha B",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g18",
      gender: "girl"
    },
    {
      name: "Arthy T",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g19",
      gender: "girl"
    },
    {
      name: "Priya R",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g20",
      gender: "girl"
    },
    {
      name: "Merlin A",
      nickname: "Anju ✨",
      role: "Creative Mind",
      quote: "Always smiling 😊",
      imgBase: "assets/images/seniors/girls/g21",
      gender: "girl"
    },
    {
      name: "Jamila Abitha A",
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
      name: "Abisheik K",
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
      name: "VinithKumar B",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b7",
      gender: "boy"
    },
    {
      name: "Nallaiyan S K",
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
      name: "Mohammad Sheik Myddin A",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b12",
      gender: "boy"
    },
    {
      name: "SelvaKumar M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b13",
      gender: "boy"
    },
    {
      name: "Meshak Raja A",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b14",
      gender: "boy"
    },
    {
      name: "Kabinesh M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b15",
      gender: "boy"
    },
    {
      name: "Sakthivel K",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b16",
      gender: "boy"
    },
    {
      name: "Elango Abiraj J",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b17",
      gender: "boy"
    },
    {
      name: "Tamilarasan M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b18",
      gender: "boy"
    },
     {
      name: "Isac Prakash P",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b19",
      gender: "boy"
    },
      {
      name: "Ayyanar J",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b20",
      gender: "boy"
    },
      {
      name: "Santhosh Raj G",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b21",
      gender: "boy"
    },
     {
      name: "Jeba Prakash J",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b30",
      gender: "boy"
    },
    {
      name: "Sankar M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b34",
      gender: "boy"
    },
    {
      name: "Jagan Yadav M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b22",
      gender: "boy"
    },
    {
      name: "Kabilesh K S",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b28",
      gender: "boy"
    },
    {
      name: "Karthick S",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b23",
      gender: "boy"
    },
    {
      name: "Kaja Mohaideen D",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b33",
      gender: "boy"
    },
    {
      name: "Haran M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b24",
      gender: "boy"
    },
    {
      name: "Gogula Kalyan M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b32",
      gender: "boy"
    },
    {
      name: "Madhesh T",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b31",
      gender: "boy"
    },
    {
      name: "Abishek L",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b25",
      gender: "boy"
    },
    {
      name: "Sachien M",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b26",
      gender: "boy"
    },
     {
      name: "Kerzone E",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b35",
      gender: "boy"
    },
     {
      name: "MuthuKumar K",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b36",
      gender: "boy"
    },
       {
      name: "Guru Akash P",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b27",
      gender: "boy"
    },
     {
      name: "Natheem A",
      nickname: "Boss 😎",
      role: "Team Leader",
      quote: "Always guiding us 🚀",
      imgBase: "assets/images/seniors/boys/b29",
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