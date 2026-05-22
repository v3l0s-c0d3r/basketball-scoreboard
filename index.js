let homeScoreEl = document.getElementById("home-display");
let guestScoreEl = document.getElementById("guest-display");
let homeScore = 0;
let guestScore = 0;

homeScoreEl.textContent = homeScore;
guestScoreEl.textContent = guestScore;

function updateScore(team, points) {
    if (team === "home") {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === "guest") {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
};


