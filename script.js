// Registration
document.getElementById("regForm")?.addEventListener("submit", function(e){
  e.preventDefault();
  let team = document.getElementById("teamName").value;
  let teams = JSON.parse(localStorage.getItem("teams") || "[]");

  if (teams.includes(team)) {
    alert("Team already registered");
    return;
  }

  teams.push(team);
  localStorage.setItem("teams", JSON.stringify(teams));
  alert("Registered Successfully");
});

// Admin Login
function login() {
  let pass = document.getElementById("adminPass").value;
  if (pass === "admin123") {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Wrong Password");
  }
}

// Create Match
function createMatch() {
  let matches = JSON.parse(localStorage.getItem("matches") || "[]");
  matches.push({
    teamA: teamA.value,
    teamB: teamB.value,
    date: date.value,
    time: time.value,
    room: room.value,
    pass: pass.value
  });
  localStorage.setItem("matches", JSON.stringify(matches));
  alert("Match Created");
}

// Match Check
function checkMatch() {
  let team = document.getElementById("searchTeam").value;
  let matches = JSON.parse(localStorage.getItem("matches") || "[]");

  let match = matches.find(m => m.teamA === team || m.teamB === team);

  if (!match) {
    result.innerHTML = "No match found";
    return;
  }

  result.innerHTML = `
    <p>${match.teamA} vs ${match.teamB}</p>
    <p>${match.date} at ${match.time}</p>
    <p>Room: ${match.room}</p>
    <p>Password: ${match.pass}</p>
  `;
  }
