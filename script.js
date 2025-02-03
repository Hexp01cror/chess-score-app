let score1 = localStorage.getItem("score1") ? parseInt(localStorage.getItem("score1")) : 0;
let score2 = localStorage.getItem("score2") ? parseInt(localStorage.getItem("score2")) : 0;

document.getElementById("score1").innerText = score1;
document.getElementById("score2").innerText = score2;

function incrementScore(player) {
    if (player === 1) {
        score1++;
        document.getElementById("score1").innerText = score1;
        localStorage.setItem("score1", score1);
    } else {
        score2++;
        document.getElementById("score2").innerText = score2;
        localStorage.setItem("score2", score2);
    }
}

function resetScores() {
    score1 = 0;
    score2 = 0;
    document.getElementById("score1").innerText = score1;
    document.getElementById("score2").innerText = score2;
    localStorage.setItem("score1", score1);
    localStorage.setItem("score2", score2);
}