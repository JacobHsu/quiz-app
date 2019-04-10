const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//localStorage.setItem("highScores",JSON.stringify([]));
//console.log(JSON.parse(localStorage.getItem("highScores")));

const MAX_HIGH_SCORES = 5;
//console.log(highScores);
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  //console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  //console.log("clicked the save button!");
  e.preventDefault(); //log up here maybe for a second. so 取消事件的默認動作

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES); //keep 5 highScores

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
