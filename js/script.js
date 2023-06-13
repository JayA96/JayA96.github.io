async function fetchScores() {
    const res = await fetch("js/data.json");
    const data = await res.json();
    const reaction = data[0].score;
    const memory = data[1].score;
    const verbal = data[2].score;
    const visual = data[3].score;
    const average = Math.round((reaction + memory + verbal + visual) / 4);
    document.querySelector(".reaction__score").innerHTML = reaction;
    document.querySelector(".memory__score").innerHTML = memory;
    document.querySelector(".verbal__score").innerHTML = verbal;
    document.querySelector(".visual__score").innerHTML = visual;
    document.querySelector(".average").innerHTML = average;
}

fetchScores();