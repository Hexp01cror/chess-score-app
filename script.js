let scores = { 1: 0, 2: 0 };

function changeScore(player, amount) {
    scores[player] += amount;
    if (scores[player] < 0) scores[player] = 0; // 점수가 음수가 되지 않도록 방지
    document.getElementById(`score${player}`).textContent = scores[player];
}