const players = [
{
name: "Astro",
id: "astro_mc",
tier: "HT1",
region: "NA",
points: 2850,
color: "red"
},

{
name: "Nova",
id: "nova_",
tier: "HT1",
region: "EU",
points: 2795,
color: "blue"
},

{
name: "Zenith",
id: "zenith",
tier: "HT2",
region: "AS",
points: 2710,
color: "green"
},

{
name: "Vortex",
id: "vortex",
tier: "HT2",
region: "NA",
points: 2665,
color: "purple"
},

{
name: "Frost",
id: "frosty",
tier: "HT2",
region: "EU",
points: 2610,
color: "blue"
},

{
name: "Reaper",
id: "reaper_mc",
tier: "HT3",
region: "AS",
points: 2540,
color: "red"
},

{
name: "Shadow",
id: "shadowx",
tier: "HT3",
region: "EU",
points: 2495,
color: "purple"
},

{
name: "Blaze",
id: "blaze_mc",
tier: "HT3",
region: "NA",
points: 2410,
color: "orange"
},

{
name: "Echo",
id: "echo_",
tier: "LT1",
region: "AS",
points: 2355,
color: "green"
},

{
name: "Titan",
id: "titan_mc",
tier: "LT1",
region: "EU",
points: 2290,
color: "orange"
}
];

const list = document.getElementById("playerList");

const searchInput =
document.getElementById("searchInput");

const emptyState =
document.getElementById("emptyState");

const rankingTitle =
document.getElementById("rankingTitle");

const playerCount =
document.getElementById("playerCount");

let currentCategory = "Overall";

function renderPlayers() {

const search =
searchInput.value
.toLowerCase()
.trim();

const filtered =
players.filter(player => {

  return (
    player.name
      .toLowerCase()
      .includes(search)
    ||
    player.id
      .toLowerCase()
      .includes(search)
  );

});


list.innerHTML = "";

playerCount.textContent =
${filtered.length} player${ filtered.length !== 1 ? "s" : "" };

if (filtered.length === 0) {

emptyState.style.display = "block";

return;


}

emptyState.style.display = "none";

filtered.forEach((player, index) => {

const initials =
  player.name
    .charAt(0)
    .toUpperCase();


const row =
  document.createElement("div");


row.className = "player-row";


row.innerHTML = `

  <span class="rank">
    ${index + 1}
  </span>


  <div class="player">

    <div class="avatar ${player.color}">
      ${initials}
    </div>

    <div>

      <div class="player-name">
        ${player.name}
      </div>

      <div class="player-id">
        @${player.id}
      </div>

    </div>

  </div>


  <span>
    <span class="tier">
      ${player.tier}
    </span>
  </span>


  <span class="region">
    ${player.region}
  </span>


  <span class="points">
    ${player.points.toLocaleString()}
  </span>

`;


list.appendChild(row);


});

}

/* SEARCH */

searchInput.addEventListener(
"input",
renderPlayers
);

/* CATEGORY */

document
.querySelectorAll(".category")
.forEach(button => {

button.addEventListener(
  "click",
  () => {

    document
      .querySelectorAll(".category")
      .forEach(btn =>
        btn.classList.remove("active")
      );


    button.classList.add("active");


    currentCategory =
      button.dataset.category;


    rankingTitle.textContent =
      `${currentCategory} Rankings`;


    renderPlayers();

  }
);


});

/* MOBILE MENU */

const menuBtn =
document.getElementById("menuBtn");

const nav =
document.getElementById("nav");

menuBtn.addEventListener(
"click",
() => {

nav.classList.toggle("open");


}
);

/* START */

renderPlayers();
