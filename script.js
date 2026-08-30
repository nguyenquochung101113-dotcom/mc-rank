const players = [
  {
    name: "kitlord",
    id: "kitlord_mc",
    tier: "LT5",
    region: "AS",
    points: 2,
    color: "red"
  },

  {
    name: "toan111",
    id: "toan111_mc",
    tier: "LT5",
    region: "AS",
    points: 1,
    color: "blue"
  },

  {
    name: "chemiaparty",
    id: "chemiaparty_mc",
    tier: "HT5",
    region: "AS",
    points: 2,
    color: "green"
  },

  {
    name: "qbinh_",
    id: "qbinh_mc",
    tier: "HT4",
    region: "AS",
    points: 5,
    color: "purple"
  },

  {
    name: "quangvinhh",
    id: "quangvinh_mc",
    tier: "HT4",
    region: "AS",
    points: 5,
    color: "blue"
  },

  {
    name: "Slattdiablo",
    id: "reaper_mc",
    tier: "HT4",
    region: "AS",
    points: 5,
    color: "red"
  }
];


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
