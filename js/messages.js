document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("notesContainer");
  if(!container) return;

  /* =========================
     DATA
  ========================= */

  const messages = [

    {
      name: "Anantharaj",
      year: "3rd Year",
      text: "All the best for your future 💫"
    },

    {
      name: "Muthuselvam",
      year: "2nd Year",
      text: "Your guidance helped us a lot 🙏"
    },

    {
      name: "Bala",
      year: "3rd Year",
      text: "College la unga vibe vera level 🔥"
    },

    {
      name: "Siva",
      year: "1st Year",
      text: "All the best for your future 💫"
    },
     {
      name: "Kosikan",
      year: "3rd Year",
      text: "Beautiful of yours life congrats 💫"
    },
  

  ];

  /* =========================
     CREATE NOTE
  ========================= */

  function createNote(m){

    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
      <h4>${m.name}</h4>
      <span>${m.year}</span>
      <p>${m.text}</p>
    `;

    return note;
  }

  /* =========================
     RENDER
  ========================= */

  messages.forEach(m => {
    container.appendChild(createNote(m));
  });

});