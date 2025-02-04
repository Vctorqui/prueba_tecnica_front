$(window).on("load", function () {
  $("body").css("opacity", "1");
  populateInfluencerTable();
});

let offset;

if (screen.width > 768) {
  offset = 200;
} else {
  offset = 0;
}

$("header").load("components/header.html");
$("footer").load("components/footer.html");


// Influencer data
const influencers = [
  {
    username: "@salud_ays",
    image:
      "https://gravatar.com/avatar/33447fff40bae71826bdfce4f0ef240e?s=400&d=robohash&r=x",
    networks: ["tiktok", "facebook", "instagram"],
    services: 3,
    value: 50,
  },
  {
    username: "@salud_ays",
    image:
      "https://gravatar.com/avatar/33447fff40bae71826bdfce4f0ef240e?s=400&d=robohash&r=x",
    networks: ["tiktok", "facebook", "instagram"],
    services: 6,
    value: 90,
  },
  {
    username: "@salud_ays",
    image:
      "https://gravatar.com/avatar/33447fff40bae71826bdfce4f0ef240e?s=400&d=robohash&r=x",
    networks: ["tiktok", "instagram"],
    services: 2,
    value: 40,
  },
  {
    username: "@salud_ays",
    image:
      "https://gravatar.com/avatar/33447fff40bae71826bdfce4f0ef240e?s=400&d=robohash&r=x",
    networks: ["facebook", "instagram"],
    services: 4,
    value: 35,
  },
  {
    username: "@salud_ays",
    image:
      "https://gravatar.com/avatar/33447fff40bae71826bdfce4f0ef240e?s=400&d=robohash&r=x",
    networks: ["facebook", "instagram"],
    services: 2,
    value: 80,
  },
  {
    username: "@salud_ays",
    image:
      "https://gravatar.com/avatar/33447fff40bae71826bdfce4f0ef240e?s=400&d=robohash&r=x",
    networks: ["instagram"],
    services: 1,
    value: 10,
  },
];

// Populate influencer table
function populateInfluencerTable() {
  const tableBody = document.getElementById("influencerTableBody");
  tableBody.innerHTML = "";

  influencers.forEach((influencer) => {
    const row = document.createElement("tr");

    // Influencer profile
    const profileCell = document.createElement("td");
    profileCell.className = "align-middle";
    profileCell.innerHTML = `
          <div class="d-flex align-items-center gap-2">
              <img src="${influencer.image}" class="profile-image" alt="Profile">
              <span>${influencer.username}</span>
          </div>
      `;

    // Social networks
    const networksCell = document.createElement("td");
    networksCell.className = "align-middle";
    networksCell.innerHTML = `
          <div class="d-flex gap-2">
              ${influencer.networks
                .map(
                  (network) => `
                  <div class="social-icon ${network}"></div>
              `
                )
                .join("")}
          </div>
      `;

    // Services
    const servicesCell = document.createElement("td");
    servicesCell.className = "align-middle";
    servicesCell.textContent = `${influencer.services} Servicios`;

    // Value
    const valueCell = document.createElement("td");
    valueCell.className = "align-middle";
    valueCell.textContent = `${influencer.value} CRTS`;

    // Change button
    const changeCell = document.createElement("td");
    changeCell.className = "align-middle";
    changeCell.innerHTML = `
          <button class="btn action-button">
              <i class="bi bi-arrow-clockwise"></i>
          </button>
      `;

    // Delete button
    const deleteCell = document.createElement("td");
    deleteCell.className = "align-middle";
    deleteCell.innerHTML = `
          <button class="btn action-button">
              <i class="bi bi-trash"></i>
          </button>
      `;

    // Review button
    const actionCell = document.createElement("td");
    actionCell.className = "align-middle";
    actionCell.innerHTML = `
          <button class="btn btn-light">Revisar</button>
      `;

    // Append cells to row
    row.append(
      profileCell,
      networksCell,
      servicesCell,
      valueCell,
      changeCell,
      deleteCell,
      actionCell
    );

    tableBody.appendChild(row);
  });
}
